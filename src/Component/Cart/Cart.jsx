import React, { Component } from 'react';
import axios from 'axios';
// import {Link, Switch, Route} from 'react-router-dom';
// import Home from '../Home/Home';
import './Cart.css';
import {Grid, Jumbotron} from 'react-bootstrap';


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
    let ViewCart = this.state.cart ? this.state.cart.map((item,index) =>{
      return <div key={item.id}>
              <h2>{item.name}</h2>
                <img src={item.image}  />
               <h3>{item.description}</h3>
              <h4> {item.price}</h4>
               <h6>{item.category}</h6>
               <h6>{item.user_id}</h6>
             {/* <Button>Delete</Button> */}
              
            </div>
      
    }) : 'Your Cart is Empty'

    return (
<Grid>
  <Jumbotron>
          <div className='box'>
          {ViewCart}
          </div>

  </Jumbotron>
</Grid>
    
    )
  }
}