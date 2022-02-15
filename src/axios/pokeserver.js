import axios from "axios"

const fetchPokemon = (id) => {
return axios.get("http://localhost:3001/pokemon/"+id);
//      .then((response) => {return response}).catch(error => {console.log(error)});
}

const fetchAll = () => {
            return axios.get("http://localhost:3001/pokemon");}
               ///   .then((response) => {return response}).catch(error => {console.log(error)});}

const patchPokemon = (poke) => {
      return axios.patch("http://localhost:3001/pokemon/" + poke.id,poke);}
            //.then((response) => {return response}).catch(error => {console.log(error)});}
            
export {fetchPokemon,fetchAll, patchPokemon};

