import initalState from "../redux/initalState";
import * as actionTypes from "../actions/actionTypes";

export default function pokeReducer(state = initalState, action) {
  switch (action.type) 
  {
    //console.log(actions);
    case actionTypes.OPEN:
      return { ...state,showNewModal:action.payload.showNewModal,newModalValue:action.payload.newModalValue};
    case actionTypes.SEARCH:
        state.filteredPokemons = state.pokemons.filter((x) =>
        x.Name.toLowerCase().includes(action.payload.toLowerCase()));
      return { ...state,pokemons: state.pokemons, filteredPokemons: state.filteredPokemons };
    case actionTypes.LOAD:
      return { ...state, pokemons: action.payload, filteredPokemons: action.payload };
    default:
      return state;
  }
}