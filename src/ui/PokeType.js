import React from "react";

function PokeType({ list }) {
     
     const Type = ({i}) => {
         return(<span key={i} className={"ms-1 me-1 type " + i} >
                         {i} 
                    </span>);
     }

     return (
          <>
               {list ? list.map(i => (
                    <Type i={i}></Type>
               )) : <div />}
          </>
     );
}

export default PokeType;
