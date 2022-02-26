import React from "react";

function PokeType({ list }) {
     return (
          <>
               {list ? list.map(i => (
                    <span key={i} className={"ms-1 me-1 type " + i} >
                         {i} 
                    </span>
               )) : <div />}
          </>
     );
}

export default PokeType;
