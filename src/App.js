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

class App extends React.Component{


  state = {
    count:0
  };
  add = () => {
    this.setState(current => ({count : current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count : current.count-1}));
  };
  render(){
  return (
    <div>
      <h1>Im a class {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button  onClick={this.minus}>Minus</button>
    </div>

    
    )
  };
}

export default App;
