import React,{useReducer} from "react";
import reducer from './reducers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeSearch from './ui/seach.js';
import Main from './ui/Main.js';
import { pokeindex } from "./data/pokemons";


function App() {
  const [list, setList] = useReducer(reducer,{arr: pokeindex});
  const handleKeyPres = (e) => {
      setList({ type: "SEARCH", keyword:  e.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <PokeSearch keypres={handleKeyPres}></PokeSearch>
        <Main list={list.arr}></Main>
      </header>
    </div>
  );
}

export default App;
