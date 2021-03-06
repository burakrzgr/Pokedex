import axios from "axios"

const fetchPokemon = (id) => {return axios.get("http://localhost:3001/pokemon/"+id);}
const fetchAllPokemon = () => {return axios.get("http://localhost:3001/pokemon");}
const patchPokemon = (poke) => {return axios.patch("http://localhost:3001/pokemon/" + poke.id,poke);}
const postPokemon = (poke) => {return axios.post("http://localhost:3001/pokemon" ,poke);}
const putPokemon = (id,poke) => {return axios.put("http://localhost:3001/pokemon/"+id, poke);}
const deletePokemon = (id) => {return axios.delete("http://localhost:3001/pokemon/"+id);}


const fetchType = (id) => {return axios.get("http://localhost:3001/type/"+id);}
const fetchTypeByName = (name) => {return axios.get("http://localhost:3001/type?Name="+name);}
const fetchAllTypes = () => {return axios.get("http://localhost:3001/type");} 

export {fetchPokemon,fetchAllPokemon, patchPokemon,postPokemon,putPokemon,deletePokemon,fetchType,fetchTypeByName,fetchAllTypes};

