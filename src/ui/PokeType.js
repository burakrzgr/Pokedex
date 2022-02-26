import React from "react";
import TypeTooltip from "./TypeTooltip";

function PokeType({ list }) {
     
     const Type = ({i}) => {
         return(<span className={"ms-1 me-1 type " + i} >
               {i} 
          </span>);
     }

     return (
          <>
               {list ? list.map(i => (
                    <TypeTooltip key={i} data={{Name:i,Desc:"Yes-yes kil-kil all preyz the great horned rat."}}> 
                         <Type i={i}></Type>
                    </TypeTooltip>
               )) : <div />}
          </>
     );
}

export default PokeType;
