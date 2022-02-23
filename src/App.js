import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './ui/Seach.js';
import Main from './ui/Main.js';
import LoadingPanel from './LoadingPanel'


class App extends React.Component {

  state = { showNewPoke: false, loading : true }
  setShowNewPoke(v) {
    this.setState({ ...this.state,showNewPoke: v });
  }
  loaded() {
    this.setState({ ...this.state,loading: false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search addPokeEvent={(v) => this.setShowNewPoke(v)}></Search>
          {this.state.loading ?
            <LoadingPanel isLoading={this.state.loading} loaded={() => this.loaded()}/> :
            <Main addPokeEvent={(v) => this.setShowNewPoke(v)} showNewPoke={this.state.showNewPoke} ></Main>
          }
        </header>
      </div>
    );
  }
}

export default App;
