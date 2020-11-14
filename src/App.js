import React from "react";
import Potato from './Potato';

function Food({fav, test}) {
  return (
  <h3>I love {fav}{test}</h3>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Hellow</h1>
        <Potato />
        <Food fav="kimchi" test = "12" />
        <Food fav="ramen" test = "23"  />
    </div>
  );
}


export default App;
