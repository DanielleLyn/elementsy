import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';
import './App.css';

import axios from 'axios';
// import Home from './Component/Home/Home';

// import Listing from './Component/Listing/Listing';

class App extends Component {
  constructor(){
    super();
    this.state={
     showMenu: false,
    }
  }


  createListing(){
    const{imageInput, nameInput, priceInput, descriptionInput, categoryInput, user_idInput} = this.props;
    axios.post('/api/listing',{imageInput, nameInput, priceInput, descriptionInput, categoryInput, user_idInput})
    .then(res => {
      console.log(res.data.newListing);
    }).catch(err => console.log('Axios post listing error---', err));

  }



  render() {
    const{showMenu} = this.state;
    return (
      
      <div className="app">
    <nav className="nav">
      <div className="logo"> Elementsy </div>
      <div className='link-wrap'>
      <Link to = "/" className ='links'> Home </Link>
      <Link to = "/cart" className='links'>Cart</Link>
      </div>
    </nav> 
    <div>
    <button className="hamburger" onClick={() => this.setState({showMenu: !showMenu})}>Menu</button>
        <div className = {showMenu ? "drawer" : "drawer open"}>
        <Link to='/login'><div className='menuItem'>Login</div></Link>
        <Link to='/profile'><div className='menuItem'>Profile</div></Link>
        <Link to='/add'><div className='menuItem'>Add Listing</div></Link>
      </div>
      <div>
       
    {routes}
      </div>
      
    </div>
    </div>
      
    )
  }
}

export default App;
