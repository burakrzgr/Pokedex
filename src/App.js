import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPanel from "./LoginPanel";
import ConfigureRouter from "./ConfigureRouter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginPanel></LoginPanel>
        <header className="App-header">
          <ConfigureRouter /> 
        </header>
      </div>
    );
  }
}

export default App;
