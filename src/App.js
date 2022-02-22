import React, { Component,useReducer } from "react";
import reducer from './reducers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './ui/Seach.js';
import Main from './ui/Main.js';
import { pokeindex } from "./data/pokemons";


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      showNewPoke: false
    }
  }
  setShowNewPoke (v)  {
    console.log("eeee",this.state)
    this.state = { showNewPoke: v };
  }
  // const [showNewPoke, setShowNewPoke] = React.useState(false);


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search addPokeEvent={this.setShowNewPoke}></Search>
          <Main addPokeEvent={this.setShowNewPoke} showNewPoke={this.state.showNewPoke} ></Main>
        </header>
      </div>
    );
  }
}

export default App;
