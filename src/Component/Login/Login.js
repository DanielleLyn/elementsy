// import axios from 'axios';
// import {Link} from 'react-router-dom';
import React, {Component} from 'react';
// import Profile from "../Profile/Profile";


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

  login = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
    window.location = `https://${process.env.REACT_APP_DOMAIN}/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
  }

    render(){
    return(
        <div>
            <nav className='nav'>
        {/* <Link to='/login'><div className='btn'>Login/Register</div></Link>
        <Link to='/profile'><div className='btn'>Profile</div></Link>
        <Link to='/add'><div className='btn'>Add Listing</div></Link> */}
        <button onClick={this.login}>login</button>
            </nav>
            <div>
            {/* <form>
                <p>Username</p>
                <input type='text' value= 'username' />
                <p>Password</p>
                <input type='text' value= 'password' />
                <p>Email</p>
                <input type='text' value='email' />
                <button>login</button> <button>register</button>
            </form> */}
            </div>
        </div>

        )
    }
}