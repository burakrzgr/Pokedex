import { Modal, Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import React, { useEffect } from "react";
import "../../button.css";
import ColorPicker from "../misc/ColorPicker";
import TypeControl from "./TypeControl";
import FileUpload from "../misc/FileUpload";
import TextAdder from "../misc/TextAdder";
import { postPokemon, putPokemon } from '../../axios/pokeserver'
import { postImg } from '../../axios/imgServer'
import { fetchAllPokemon } from "../../axios/pokeserver";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openNewPoke as OpenNewAction, loadPoke as LoadAction } from "../../actions/actions";
import jqr from 'jquery';
import DeletePokeConfirmation from "../DeletePokeConfirmation";

function AddPoke(props) {

    const [values, setValues] = React.useState({ no: "", pokename: "", desc: "" });
    const [img, setImg] = React.useState({ changed: false, img: null });
    const [bColor, setBColor] = React.useState('#FFF');
    const [fColor, setFColor] = React.useState('#000');
    const [types, setTypes] = React.useState({ arr: [] });
    const [prev, setPrev] = React.useState({ arr: [] });
    const [next, setNext] = React.useState({ arr: [] });
    const [ability, setAbility] = React.useState({ arr: [] });
    const [showDelete, setShowDelete] = React.useState(false);

    useEffect(() => {
        jqr(".pokeAdd").attr("tabindex", null);
        if (props.showNewModal && props.newModalValue) {
            setPrev({ arr: props.newModalValue.Prev });
            setNext({ arr: props.newModalValue.Next });
            setAbility({ arr: props.newModalValue.Ability });
            setTypes({ arr: props.newModalValue.Type });
            setBColor(props.newModalValue.BColor);
            setFColor(props.newModalValue.FColor);
            setValues({ no: String(props.newModalValue.id), pokename: props.newModalValue.Name, desc: props.newModalValue.Desc });
            setImg({ changed: false, img: "/assets/img/pokemons/" + props.newModalValue.Img });
        }
        else {
            setPrev({ arr: [] });
            setNext({ arr: [] });
            setAbility({ arr: [] });
            setTypes({ arr: [] });
            setBColor('#FFF');
            setFColor('#000');
            setValues({ no: "", pokename: "", desc: "" });
            setImg({ changed: true, img: undefined });
        }
        setShowDelete(false);
    }, [props.showNewModal]);

    const backgroundPickedEvent = (cl) => {
        setBColor(cl);
    }
    const foregroundPickedEvent = (cl) => {
        setFColor(cl);
    }
    const handleChangeNo = (e) => {
        setValues({ no: e.target.value, pokename: values.pokename, desc: values.desc });
    }
    const handleChangeName = (e) => {
        setValues({ no: values.no, pokename: e.target.value, desc: values.desc });
    }
    const handleChangeDesc = (e) => {
        setValues({ no: values.no, pokename: values.pokename, desc: e.target.value });
    }

    const savePoke = (isUpdate) => {
        var imgName = values.pokename.trim().toLowerCase().replace(/ /g, '') + findExtension(img);

        var poke = {
            id: parseInt(values.no.trim()),
            Name: values.pokename.trim(),
            Img: imgName,
            Type: types.arr,
            Desc: values.desc.trim(),
            BColor: bColor,
            FColor: fColor,
            Prev: prev.arr,
            Next: next.arr,
            Ability: ability.arr,
            Rating: {
                Score: 1,
                Total: 1
            }
        };

        if (isUpdate)
            putPokemon(props.newModalValue.id, poke).then(res => { res.status === 200 ? savedEvent(true, poke, img, imgName) : failedEvent(res) });
        else
            postPokemon(poke).then(res => { res.status === 201 ? savedEvent(false, poke, img, imgName) : failedEvent(res) });
    }

    const deletePoke = (val) => {
        setShowDelete(true);
    }

    function savedEvent(isUpdate, poke, img, imgName) {
        if (img.changed) {
            try {
                fileUpload(img.img, imgName);
            }
            catch (e) {
                console.log("Upload da hata. Muhtemel cors hatası!")
            }
        }
        fetchAllPokemon().then((rs) => {
            var pokeindex = rs.data.filter((x) => { return x.id < 99000; }).sort((x, y) => (x.id - y.id));
            props.actions.reload(pokeindex);
            props.actions.open({ showNewModal: false, newModalValue: undefined });
        });
    }

    function failedEvent(res) {
        console.log("Update/insert Error:", res)
    }

    const fileUpload = (file, name) => {
        if (file) {
            const formData = new FormData();
            formData.append('file', renameFile(file, name));
            postImg(formData).catch(e => console.log("Consumed."));//.then(res => { (console.log(res.status === 201 ? "Success" : res)) });
            return true;
        }
        return false;
    }


    function renameFile(originalFile, newName) {
        return new File([originalFile], newName, {
            type: originalFile.type,
            lastModified: originalFile.lastModified,
        });
    }

    function findExtension(img) {
        if (img) {
            return img.name ? '.' + img.name.split('.').pop() : ".png";
        }
        return ".png";
    }

    return (
        <>
            <Modal
                show={props.showNewModal}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={() => props.actions.open({ showNewModal: false, newModalValue: undefined })}
                backdrop="static"
                className="pokeAdd"
                centered
            >
                <Container style={{ backgroundColor: "#FFF" }} fluid>
                    <Row>
                        <Col md="auto" className="m-1">
                            <FileUpload className={{ height: "100%" }} file={img} setFile={setImg} ></FileUpload>
                        </Col>
                        <Col>
                            <Modal.Header closeButton>
                                <Modal.Title
                                    id="contained-modal-title-vcenter"
                                    style={{ color: '#000' }}
                                >
                                    <Container className="ps-0" fluid>
                                        <Row>
                                            <Col xl={4}>
                                                <Form.Group className="mb-3" controlId="newpoke.No">
                                                    <Form.Label>#No</Form.Label>
                                                    <Form.Control type="number" min="1" max="999" placeholder="#No" value={values.no} onChange={handleChangeNo} />
                                                </Form.Group>
                                            </Col>
                                            <Col xl={8}>
                                                <Form.Group className="mb-3" controlId="newpoke.Name">
                                                    <Form.Label>Pokemon Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Poke Name" value={values.pokename} onChange={handleChangeName} />
                                                </Form.Group>
                                            </Col></Row>
                                    </Container>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ color: '#000' }}>
                                <Form.Group className="mb-3" controlId="newpoke.Desc">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={2} value={values.desc} onChange={handleChangeDesc} />
                                </Form.Group>
                                <Stack direction="horizontal">
                                    <Form.Group className="mb-3" controlId="newpoke.BColor">
                                        <Form.Label>Background Color</Form.Label>
                                        <div>
                                            <ColorPicker color={bColor} colorPickedEvent={backgroundPickedEvent} />
                                        </div>
                                    </Form.Group>
                                    <div className="ms-auto"></div>
                                    <Form.Group className="mb-3" controlId="newpoke.FColor">
                                        <Form.Label>Foreground Color</Form.Label>
                                        <div>
                                            <ColorPicker color={fColor} colorPickedEvent={foregroundPickedEvent} />
                                        </div>
                                    </Form.Group>
                                    <div className="ms-auto"></div>
                                </Stack>
                                <Form.Group className="mb-3" controlId="newpoke.types">
                                    <Form.Label>Type(s)</Form.Label>
                                    <div>
                                        <TypeControl list={types} typeChanged={setTypes} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="newpoke-prevpoke">
                                    <Form.Label>Previous Pokemon</Form.Label>
                                    <div>
                                        <TextAdder list={prev} listChanged={setPrev} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="newpoke-nextpoke">
                                    <Form.Label>Next Pokemon(s)</Form.Label>
                                    <div>
                                        <TextAdder list={next} listChanged={setNext} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="newpoke-ability">
                                    <Form.Label>Abilities</Form.Label>
                                    <div>
                                        <TextAdder list={ability} listChanged={setAbility} variety="primary" buttonText="Ability" />
                                    </div>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer className="justify-content-between">
                                {props.newModalValue ? <Button variant="danger" onClick={() => deletePoke(false)}>Delete Pokemon</Button> : <div></div>}
                                {props.newModalValue ? <Button variant="success" onClick={() => savePoke(true)}>Update [{props.newModalValue.Name + " #" + props.newModalValue.id}]</Button>
                                    : <Button variant="primary" onClick={() => savePoke(false)}>Add Pokemon</Button>}
                            </Modal.Footer>
                        </Col>
                    </Row>
                </Container>
            </Modal>
            {props.newModalValue?<DeletePokeConfirmation show={showDelete} handleClose={setShowDelete} id={props.newModalValue.id} img={undefined} name={props.newModalValue.Name}></DeletePokeConfirmation>:<></>}
        </>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            open: bindActionCreators(OpenNewAction, dispatch),
            reload: bindActionCreators(LoadAction, dispatch)
        },
    };
}

export default connect(
    (state) => {
        return {
            showNewModal: state.pokeReducer.showNewModal,
            newModalValue: state.pokeReducer.newModalValue
        };
    }, mapDispatchToProps)(AddPoke);
