import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg",
    rating: 5
  }, 
  {
    id:2,
    name: "ramen",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Korea_Ramyeon.jpg/1920px-Korea_Ramyeon.jpg",
    rating:4
  }
]

function Food({fav, picture, rating}) {
  return (
  <div>
    <h3>I love {fav}</h3>
    <h4>{rating}/5.0</h4>
    <img src={picture}  alt={fav} />
  </div>
  );
}

Food.propTypes = {
  fav :PropTypes.string.isRequired,
  picture :PropTypes.string.isRequired,
  rating :PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
        {foodILike.map(dish => <Food key={dish.id} fav ={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}


export default App;
