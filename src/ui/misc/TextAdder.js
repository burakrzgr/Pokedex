import React from 'react';
import { Stack, Button,InputGroup,FormControl } from "react-bootstrap";


function TextAdder({ list, listChanged }) {

    const [text, setText] = React.useState({ arr: list });

    const addText = () => {
        console.log(text);
        if (!list.arr.includes(text)) {
            listChanged(prev => ({ arr: [...prev.arr, text] }));
        }
    };
    const removeText = (remove) => {
        listChanged(prev => ({ arr: prev.arr.filter(t => t !== remove) }))
    };

    function TextController({ addText }) {
        return (
            <>
                <InputGroup className="mb-3" style={{width:"6rem"}}>
                    <FormControl
                        placeholder="Pokemon"
                        aria-label="Pokemon"
                        aria-describedby="poke-addon"
                        id="addpoketextcontrol"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button variant="outline-success" id="button-addon" onClick={() => addText()} >
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