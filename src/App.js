import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Seach";
import Main from "./components/Main";
import LoadingPanel from "./LoadingPanel";
import LoginPanel from "./LoginPanel";
import { BrowserRouter, Route, Routes, useParams, useRouteMatch, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <LoginPanel></LoginPanel>
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" >
                <Route index element={<MainComp></MainComp>} />
                <Route path="pokemons" element={<MainComp></MainComp>} />
                <Route path="types" element={<div> Great!</div>} />
                <Route path="region" >
                    <Route index element={<p>Bölge</p>} ></Route>
                    <Route path="new" element={<h3>Please select a topic.</h3>} />
                    <Route path=":regionId" element={<PokeRegion />}/>  
                </Route> 
              </Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}


const PokeRegion = () => {
  let { regionId } = useParams();
  return(
    <>
      REgion :{regionId}
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
