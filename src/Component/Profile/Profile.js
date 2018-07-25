import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';


export default class Profile extends Component {

    render(){
    return(
        <div>
            <nav className='nav'>
        <Link to='/login'><button className='btn'>Login/Register</button></Link>
        <Link to='/profile'><button className='btn'>Profile</button></Link>
        <Link to='/add'><button className='btn'>Add Listing</button></Link>
            </nav>

            <div>
                profile name, email 
            </div>
            <div>
                listings
            </div>
        </div>

        )
    }
}