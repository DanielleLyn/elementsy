import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import Navbar from './Component/Navbar/CustomNavbar';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state={
     
    }
    this.createListing=this.createListing.bind(this);
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
    // console.log('App** Category', this.props.selectedCategory)
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


