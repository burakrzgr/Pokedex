import axios from "axios"

const fetchPokemon = (id) => {return axios.get("http://localhost:3001/pokemon/"+id);}
const fetchAllPokemon = () => {return axios.get("http://localhost:3001/pokemon");}
const fetchAllTypes = () => {return axios.get("http://localhost:3001/type");}
const patchPokemon = (poke) => {return axios.patch("http://localhost:3001/pokemon/" + poke.id,poke);}

export {fetchPokemon,fetchAllPokemon,fetchAllTypes, patchPokemon};

