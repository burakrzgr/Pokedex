import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './ui/Seach.js';
import Main from './ui/Main.js';


class App extends React.Component {

  state = { showNewPoke: false}
  setShowNewPoke (v)  {
    this.setState ({ showNewPoke: v });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search addPokeEvent={(v) => this.setShowNewPoke(v)}></Search>
          <Main addPokeEvent={(v) => this.setShowNewPoke(v)} showNewPoke={this.state.showNewPoke} ></Main>
        </header>
      </div>
    );
  }
}

export default App;
