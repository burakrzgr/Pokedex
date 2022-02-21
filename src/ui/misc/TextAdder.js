import React from 'react';
import { Stack, Button, InputGroup, FormControl } from "react-bootstrap";

function TextAdder({ list, listChanged,variety,buttonText }) {

    const [text, setText] = React.useState("");

    const addText = (e) => {
        var tx = text ? text.trim():"";
        if (tx !== "" && !list.arr.includes(tx)) {
            listChanged(prev => ({ arr: [...prev.arr, tx] }));
        }
        setText("");
    };

    const removeText = (remove) => {
        listChanged(prev => ({ arr: prev.arr.filter(t => t !== remove) }))
    };

    return (
        <Stack direction="horizontal" gap={0}>
            <div>
                <TextList listText={list.arr} removeText={removeText} variety={variety} />
            </div>
            <TextController setText={setText} addText={addText} textV={text} variety={variety} buttonText={buttonText} />
        </Stack>
    );
};
function TextList({ listText, removeText,variety}) {
    return (listText && listText.length > 0 ?
        <Stack direction="horizontal" className="me-3" >
            {listText.map(i => (
                <div key={i} className="me-1">
                    <InputGroup size='sm' >
                        <Button variant={variety?'outline-'+variety:"outline-success"}>{i}</Button>
                        <Button variant='danger' onClick={() => removeText(i)}>X</Button>
                    </InputGroup>
                </div>
            ))}
        </Stack> : <div />
    );
}

function TextController({ textV, setText, addText,variety,buttonText }) {
    return (
        <>
            <InputGroup style={{ width: "7rem" }} size='sm'>
                <FormControl
                    placeholder={buttonText?buttonText:"Pokemon"}
                    aria-label="Pokemon"
                    aria-describedby="poke-addon"
                    value={textV}
                    onChange={(e) => { setText(e.target.value) }}
                />
                <Button variant={variety?variety:"success"} id="button-addon" onClick={addText} >
                    +
                </Button>
            </InputGroup>
        </>
    );
}

export default TextAdder;