import { connect } from "react-redux";
import PokeRow from "../PokeRow";


 function TypeDetail(props) {
    var typeList = props.pokemons.filter(x => {return x.Type.includes(props.type.Name);});
    return(
        <>
        <h3>{props.type.Name}</h3>
        {console.log(props.pokemons)}
        {console.log(props.type.Name)}
        <PokeRow list={typeList}></PokeRow>
        </>

    );
}

export default connect(
    (state) => {
         return {
              pokemons: state.pokeReducer.pokemons
         };
  }, null
)(TypeDetail);