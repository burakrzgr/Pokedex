import { pokeindex } from "../data/pokemons";

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      var keyword = action.keyword;
      var filtered = { arr: [] };
      filtered.arr = pokeindex.filter((x) =>
        x.Name.toLowerCase().includes(keyword.toLowerCase())
      );
      return { ...filtered };
    case "POKERATE":
      var inf = action.inf;
      return inf;
    default:
      return state;
  }
};

export default reducer;
