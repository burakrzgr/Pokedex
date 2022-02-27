import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import TypeTooltip from '../TypeTooltip';

function ClosablePokeType({ list,removeType }) {
     return (
          <>
               {list ? list.map(i => (
                    <TypeTooltip key={i.id} data={i} tooltipLevel={1}> 
                         <span className={"ms-1 me-2 pe-2 type " + i.Name}>
                              {i.Name}  <FontAwesomeIcon icon={faX} className="ms-1 me-1 p-0 typeX" onClick={() => removeType(i.Name)}/>
                         </span>
                    </TypeTooltip>
               )) : <div />}
          </>
     );
}

export default ClosablePokeType;
