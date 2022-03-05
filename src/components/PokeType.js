import React from "react";
import TypeTooltip from "./TypeTooltip";
import types from "../data/types";

function PokeType({ list, tooltipLevel }) {
     
     const Type = ({i}) => {
         return(<span className={"ms-1 me-1 type " + i} >
               {i} 
          </span>);
     }
     
     let typeList = types.filter (x => list.includes(x.Name));
    // let filterList = list.map(itemY => { return itemY.val; });
     return (
          <>
               {typeList.length === list.length ? typeList.map(i => (
                    <TypeTooltip key={i.id} data={i} tooltipLevel={tooltipLevel}> 
                         <Type i={i.Name}></Type>
                    </TypeTooltip>
               )) : <>Types not compete! {list.toString()}</>}
          </>
     );
}

export default PokeType;
