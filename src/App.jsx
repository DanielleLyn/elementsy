import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button, Nav, NavItem} from 'react-bootstrap';
import routes from './routes';
import './App.css';
import Navbar from './Component/Navbar/CustomNavbar';

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
    const{showMenu} = this.state;
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

// modal hidden by default
// click "edit"
// visit database and grab listing
// populate modal with the listing's details
// make modal appear
// edit modal 
// click save
// update existing row in database with new values
// refresh page 

// Bonus:
// make the modal header switch between add listing and edit listing 

