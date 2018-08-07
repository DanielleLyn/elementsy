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
      userListings: '',
      
    }
  }
  componentDidMount(){
      axios.get('/api/userdata').then(response => {
          console.log('response', response);
          this.setState({
            username: response.data.username,
            id: response.data.id
          })
      })

      axios.get('/api/userListing').then(response => { //need to pass this down through props 
        console.log('.....response',response.data)
        this.setState({
          userListings: response.data
        })
      })
  }

  login = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
    window.location = `https://${process.env.REACT_APP_DOMAIN}/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
  }

    render(){
        console.log('---state', this.state);
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
                <Modal.Body><h3> My Listings</h3> </Modal.Body>
                <Modal.Body> (listings)</Modal.Body>
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