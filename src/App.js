import React from "react";


function Food({fav, picture}) {
  return (
<div>
  <h3>I love {fav}</h3>
  <img src={picture}  alt={fav} />
  </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg"
  }, 
  {
    id:2,
    name: "ramen",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Korea_Ramyeon.jpg/1920px-Korea_Ramyeon.jpg"
  }
]



function App() {

  return (
    <div className="App">
      <h1>Hello </h1>

        {foodILike.map(dish => <Food key={dish.id} fav ={dish.name} picture={dish.image}/>)}
    </div>
  );
}


export default App;
