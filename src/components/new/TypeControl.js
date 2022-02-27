import React from 'react';
import { Dropdown, Stack } from "react-bootstrap";
import ClosablePokeType from './ClosablePokeType';
import {types} from '../../data/types'

function TypeControl({list,typeChanged}) {

    //const [list, setList] = React.useState({ arr: typeList });

    const addTypeToList = (type) => {
        if (!list.arr.includes(type) && list.arr.length < 3) {
            typeChanged(prev => ({ arr: [...prev.arr, type] }));
        }
    };
    const removeTypeFromList = (type) => {
        typeChanged(prev => ({ arr: prev.arr.filter(t => t !== type) }))
    };


    function SelectType({ setType }) {
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-typepick" variant="secondary">
                        Add Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        {types ? types.map(x => (<Dropdown.Item key={x.id} onClick={() => setType(x.Name)}>{x.Name}</Dropdown.Item>)):<></>}
                        
                    </Dropdown.Menu>
                </Dropdown>
            </>
        );
    }
    let typeList = types.filter (x => list.arr.includes(x.Name));
    return (
        <Stack direction="horizontal" gap={0}>
            <div>
                <ClosablePokeType list={typeList} removeType={removeTypeFromList} />
            </div>
            {list.arr.length> 2 ? <div className='ms-2 text-danger font-weight-bold'>En fazla 2 tip olabilir.</div> :<SelectType setType={addTypeToList} />}
        </Stack>
    );
};

export default TypeControl;