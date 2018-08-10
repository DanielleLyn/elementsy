import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import {Jumbotron, Grid, Row, Col, Image, Button, Nav, NavItem} from 'react-bootstrap';
import routes from './routes';
import './App.css';
import Navbar from './Component/Navbar/CustomNavbar';
// import {Tarot} from '.Component/Tarot/Tarot'

import axios from 'axios';
// import Home from './Component/Home/Home';
// import Listing from './Component/Listing/Listing';

class App extends Component {
  constructor(){
    super();
    this.state={
     
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
  
    // const{showMenu} = this.state;
    console.log('App** Category', this.props.selectedCategory)
    return (
      <div>
           <div>
            <Navbar />
          </div>
 
      <div className="app">
        <div>
         {routes}
         </div>
      </div>
   
    </div>
      
    )
  }
}

export default App;


