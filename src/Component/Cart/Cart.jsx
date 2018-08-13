import React, { Component } from 'react';
import axios from 'axios';
import './Cart.css';
import {Grid, Jumbotron} from 'react-bootstrap';
import ScrollUp from '../ScrollUp/ScrollUp';


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
                <h4><img src={item.image} /></h4>
               <h3>{item.description}</h3>
              <h4> {item.price}</h4>
               <h6>{item.category}</h6>
               <h6>{item.user_id}</h6>
      
            </div>
      
    }) : 'Your Cart is Empty'

    return (
<Grid>
        <div className='cartBody'>
  <Jumbotron>
          <div className='box'>
          {ViewCart}
          </div>

  </Jumbotron>
        <div className="footer">
         <ScrollUp style={{width: 75}} ToggledStyle={{right: 100}}/>
        </div>
        </div>
</Grid>
    
    )
  }
}