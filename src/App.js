import React from "react";
//import logo from "./logo.svg";
import ItemList from "./ItemList";
import "./App.css";

const ReactDOM = require("react-dom");
//const client = require("./client");
function App() {
  //constructor(props) {
  //super(props);
  //this.state = {items: []};
  //}
  // ReactDOM.render(<App />, document.getElementById('root'));
  return (
    <div className="App">
      <ItemList></ItemList>
    </div>
  );
}

export default App;
