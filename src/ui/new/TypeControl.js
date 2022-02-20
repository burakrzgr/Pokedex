import React from 'react';
import { Dropdown, Stack } from "react-bootstrap";
import ClosablePokeType from './ClosablePokeType';

function TypeControl() {

    const [list, setList] = React.useState({ arr: [] });

    const addTypeToList = (type) => {
        if (!list.arr.includes(type) && list.arr.length < 3) {
            setList(prev => ({ arr: [...prev.arr, type] }));
        }
    };
    const removeTypeFromList = (type) => {
        setList(prev => ({ arr: prev.arr.filter(t => t !== type) }))

    };


    function SelectType({ setType }) {
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-typepick" variant="secondary">
                        Add Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item onClick={() => setType("Normal")}>Normal</Dropdown.Item>
                        <Dropdown.Item onClick={() => setType("Electric")}>Electric</Dropdown.Item>
                        <Dropdown.Item onClick={() => setType("Fire")}>Fire</Dropdown.Item>
                        <Dropdown.Item onClick={() => setType("Ghost")}>Ghost</Dropdown.Item>
                        <Dropdown.Item onClick={() => setType("Grass")}>Grass</Dropdown.Item>
                        <Dropdown.Item onClick={() => setType("Dragon")}>Dragon</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </>
        );
    }

    return (
        <Stack direction="horizontal" gap={0}>
            <div>
                <ClosablePokeType list={list.arr} removeType={removeTypeFromList} />
            </div>
            {list.arr.length> 2 ? <div className='ms-2 text-danger font-weight-bold'>En fazla 2 tip olabilir.</div> :<SelectType setType={addTypeToList} />}
        </Stack>
    );
};

export default TypeControl;