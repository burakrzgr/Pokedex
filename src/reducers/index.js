import { fetchPokemon } from '../axios/pokeserver'

import { pokeindex } from "../data/pokemons";
  export const reducer = (state , action) => {
    switch (action.type) {
      case "SEARCH":
        var keyword = action.keyword;
        var filtered ={ arr :[] };
        filtered.arr = pokeindex.filter(x => x.Name.toLowerCase().includes(keyword.toLowerCase()));
        return { ...filtered };
      case "POKERATE":
        var inf = action.inf;
        return inf;
      default:
        return state;
    }
  };



  export async function asyncReducer(state , action){
    switch (action.type) {
      case "RATE":
        var inf = action.inf;
        var poke = (inf.id ? (fetchPokemon(inf.id)) : undefined);
        var rating = { id: inf.id, score: -1, total: 0 };
        if (poke) {
          poke.then(function (rs) {
            if (rs) {
              rating = rs.data && rs.data.Rating ? { id: inf.id, score: rs.data.Rating.Score, total: rs.data.Rating.Total } : { score: -1, total: 0 };
              return rating;
            }
            else {
              console.log('Connection Error!!');
            }
          }).catch(error => { console.log(error) });
        }
        return await rating;
      default:
        return state;
    }
  };

  export default reducer;