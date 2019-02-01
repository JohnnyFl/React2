import React, { Component } from "react";
import Name from "./name/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name name="Jess" />
        <Name name="Jake" />
        <Name name="Josh" />
      </div>
    ); 
  }
}

export default App;
