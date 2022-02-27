import initalState from "../redux/initalState";
import * as actionTypes from "../actions/actionTypes";

export default function pokeReducer(state = initalState, action) {
  var newTodos;
  switch (action.type) 
  {
    case actionTypes.OPEN:
      state.showNewModal = (action.payload !== undefined);
      return { ...state,showNewModal:state.showNewModal,newModalValue:action.payload};
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