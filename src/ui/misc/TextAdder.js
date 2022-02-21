import React from 'react';
import { Stack } from "react-bootstrap";
import $ from 'jquery';

function TextAdder({ list, listChanged }) {

    //const [list, setList] = React.useState({ arr: typeList });

    const addText = (text) => {
        if (!list.arr.includes(type)) {
            listChanged(prev => ({ arr: [...prev.arr, text] }));
        }
    };
    const removeText = (text) => {
        listChanged(prev => ({ arr: prev.arr.filter(t => t !== text) }))
    };

    function TextController({ addText }) {
        return (
            <>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Pokemon"
                        aria-label="Pokemon"
                        aria-describedby="poke-addon"
                        id="addpoketextcontrol"
                    />
                    <Button variant="outline-success" id="button-addon" onClick={() => addText($("#addpoketextcontrol").value)} >
                        +
                    </Button>
                </InputGroup>
            </>
        );
    }
    function TextList({ listText }) {
        return (
            <>
                {listText ? listText.map(i => (
                    <span key={i}>{i}</span>
                )) : <div />}
            </>
        );
    }


    return (
        <Stack direction="horizontal" gap={0}>
            <div>
                <TextList listText={list.arr} removeText={removeText} />
            </div>
            <TextController addText={addText} />
        </Stack>
    );
};

export default TextAdder;