import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Seach";
import Main from "./components/Main";
import LoadingPanel from "./LoadingPanel";
import LoginPanel from "./LoginPanel";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginPanel></LoginPanel>
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/pokemons" element={<MainComp></MainComp>} />
              <Route path="/types" element={<div> Great!</div>} />
              <Route path="/region/:reg" element={<PokeRegion />} />
              <Route path="/" element={<MainComp></MainComp>} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

const PokeRegion =() => {
  var { reg } = useParams();
  return (
    <>
    <div>Map of the Region! {reg}</div>
    </>
  );
}
function MainComp() {
  const [state, setState] = useState({ showNewPoke: false, loading: true });
  function setShowNewPoke(v) {
    setState({ ...state, showNewPoke: v });
  }
  function loaded() {
    setState({ ...state, loading: false });
  }
  return (
    <>
      <Search addPokeEvent={(v) => setShowNewPoke(v)}></Search>
      {state.loading ? (
        <LoadingPanel isLoading={state.loading} loaded={() => loaded()} />
      ) : (
        <Main
          addPokeEvent={(v) => setShowNewPoke(v)}
          showNewPoke={state.showNewPoke}
        ></Main>
      )}
    </>
  );
}

export default App;
