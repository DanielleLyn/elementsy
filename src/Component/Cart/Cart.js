import React, { Component } from 'react';
import axios from 'axios';
// import {Link, Switch, Route} from 'react-router-dom';
// import Home from '../Home/Home';


export default class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: []
    }
  }
  componentDidMount(){
  
    axios.get('/api/cart').then(response =>{
      console.log(response)
      this.setState({
        cart: response.data
      })
    })
  }

  render() {
    let ViewCart = this.state.cart.map((item,index) =>{
      return <div key={item.id}>
                <div>{item.name}</div>
            </div>
      
    })

    return (
      <div>
        <nav>
        
        </nav>
          <div className="cart">
          <div>item list</div>
          <div> item total </div>
          <button> Checkout </button>
          </div>
          <div>
            {ViewCart}
            </div>
          
      </div>
    )
  }
}