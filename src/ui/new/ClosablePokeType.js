import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function ClosablePokeType({ list,removeType }) {
     return (
          <>
               {list ? list.map(i => (
                    <span key={i} className={"ms-1 me-1 pe-2 type " + i}>
                         {i}  <FontAwesomeIcon icon={faX} className="ms-1 me-1 p-0 typeX" onClick={() => removeType(i)}/>
                    </span>
               )) : <div />}
          </>
     );
}

export default ClosablePokeType;
