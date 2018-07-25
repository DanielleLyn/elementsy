import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Profile from "../Profile/Profile";


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      auth0_id: '',
      username: '',
      password: '',
      email: ''
    }
  }
    render(){
    return(
        <div>
            <nav className='nav'>
        <Link to='/login'><button className='btn'>Login/Register</button></Link>
        <Link to='/profile'><button className='btn'>Profile</button></Link>
        <Link to='/add'><button className='btn'>Add Listing</button></Link>
            </nav>
            <div>
            <form>
                <p>Username</p>
                <input type='text' value= 'username' />
                <p>Password</p>
                <input type='text' value= 'password' />
                <p>Email</p>
                <input type='text' value='email' />
                <button>login</button> <button>register</button>
            </form>
            </div>
        </div>

        )
    }
}