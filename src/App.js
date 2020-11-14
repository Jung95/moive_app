import React from "react";
import Potato from './Potato';

function Food({fav, picture}) {
  return (
<div>
  <h3>I love {fav}</h3>
  <img src={picture} />
  </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg"
  }, 
  {
    name: "ramen",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Korea_Ramyeon.jpg/1920px-Korea_Ramyeon.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
        {foodILike.map(dish => <Food fav ={dish.name} picture={dish.image}/>)}
    </div>
  );
}


export default App;
