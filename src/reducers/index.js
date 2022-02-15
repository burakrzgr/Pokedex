import { pokeindex } from "../data/pokemons";
  export const reducer = (state , action) => {
    switch (action.type) {
      case "SEARCH":
        var keyword = action.keyword;
        var filtered ={ arr :[] };
        for (var pok in pokeindex) { 
          if (pokeindex[pok].Name.toLowerCase().includes(keyword.toLowerCase())) {
            filtered.arr.push(pokeindex[pok]);
          }
        }
        return { ...filtered };
      default:
        return state;
    }
  };

  export default reducer;