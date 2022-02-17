import axios from "axios"

const fetchPokemon = (id) => {
return axios.get("http://localhost:3001/pokemon/"+id);
}

const fetchAll = () => {
            return axios.get("http://localhost:3001/pokemon");}

const patchPokemon = (poke) => {
      return axios.patch("http://localhost:3001/pokemon/" + poke.id,poke);}
            
export {fetchPokemon,fetchAll, patchPokemon};

