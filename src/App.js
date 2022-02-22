import React,{useReducer} from "react";
import reducer from './reducers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './ui/Seach.js';
import Main from './ui/Main.js';
import { pokeindex } from "./data/pokemons";


function App() {
  const [list, setList] = useReducer(reducer,{arr: pokeindex});
  const [showNewPoke, setShowNewPoke] = React.useState(false);
  const handleKeyPres = (e) => {
      setList({ type: "SEARCH", keyword:  e.target.value });
  };

  const addPokeEvent = (vis) => {
    setShowNewPoke(vis);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search keypres={handleKeyPres} addPokeEvent={addPokeEvent}></Search>
        <Main //list={list.arr} 
        addPokeEvent={addPokeEvent} showNewPoke={showNewPoke} ></Main>
      </header>
    </div>
  );
}

export default App;
