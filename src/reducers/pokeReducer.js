import initalState from "../redux/initalState";
import * as actionTypes from "../actions/actionTypes";

export default function pokeReducer(state = initalState, action) {
  var newTodos;
  switch (action.type) {
    case actionTypes.ADD:
      newTodos = [...state.todos, action.payload];
      return { todos: newTodos, filterTodos: newTodos };
    case actionTypes.SEARCH:
        state.filteredPokemons = state.pokemons.filter((x) =>
        x.Name.toLowerCase().includes(action.payload.toLowerCase()));
      return { pokemons: state.pokemons, filteredPokemons: state.filteredPokemons };
    case actionTypes.LOAD:
        state.pokemons = action.payload;
        state.filteredPokemons = action.payload;
      return { pokemons: state.pokemons, filteredPokemons: state.pokemons };
    default:

      return state;
  }
}