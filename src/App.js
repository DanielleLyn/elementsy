import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
    <nav className="nav">
      <div> Elementsy </div>
      <div className='link-wrap'>
      <Link to = "/" className ='links'> Home </Link>
      <Link to = "/cart" className='links'>Cart</Link>
      </div>
    </nav> 
    {routes}
    </div>
      
    )
  }
}

export default App;
