import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';


export default class Cart extends Component {
  render() {
    return (
      <div>
        <nav>
        
        </nav>
          <div className="cart">
          <div>item list</div>
          <div> item total </div>
          <button> Checkout </button>
          </div>
          
      </div>
    )
  }
}