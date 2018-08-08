import axios from 'axios';
// import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import Profile from "../Profile/Profile";
import './Login.css';
import '../Home/Home'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
    
      username: '',
      userListings: [],
      id: '',
      
    }
  }
  componentDidMount(){
      axios.get('/api/userdata').then(response => {
          console.log('response', response);
          axios.get(`/api/userListing/${response.data.id}`).then(response2 => { 
            console.log('userListing.....response', response2.data)
            this.setState({
            username: response.data.username,
            userListings: response2.data.listing
            })
          })
      })

  }

  login = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
    window.location = `https://${process.env.REACT_APP_DOMAIN}/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
  }

    render(){
        // console.log('---state', this.state);
        
        const userListings = this.state.userListings.map((listing, index) => {
            return <div key={listing.id}>
                <h1> Product Name: {listing.name} </h1>
                <img src={listing.image} alt='listing item' className='listing_image'  />
                <h4>Price:$ {listing.price} </h4>
                <h4>description: {listing.description || 'unlisted'} </h4>
                <h4>category: {listing.category || 'unlisted' } </h4>
           </div>
        } )

    return(
        <div className='LoginApp'>
           <div className='loginBody'>
            <div>


        <Button onClick={this.login}>Log In</Button>
           

            </div>
            <div className='ifLoggedIn-modal'>
            <Modal.Dialog>
                <Modal.Header>
                    <h1>{ this.state.username || 'Please Log In'}</h1>
                </Modal.Header>
                <Modal.Body><h3>  My Listings </h3> </Modal.Body>
                <Modal.Body> {userListings || 'Please log in to view listings'}</Modal.Body>
                <Modal.Footer>
                    <Button><Link to='/add'> Add New Listing</Link></Button>
                    <Button>Log Out </Button>
                    
          
                </Modal.Footer>
                
                
            </Modal.Dialog>    
            </div>
            </div>
        </div>

        )
    }
}