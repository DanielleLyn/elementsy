import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';


export default class AddListing extends Component {

    render(){
    return(
        <div>
            <nav className='nav'>
        <Link to='/login'><button className='btn'>Login/Register</button></Link>
        <Link to='/profile'><button className='btn'>Profile</button></Link>
        <Link to='/add'><button className='btn'>Add Listing</button></Link>
            </nav>

            <div>
            <div>
            <form>
                <p>Image</p>
                <input type='text' value= 'url' />
                <p>Item Name</p>
                <input type='text' value= 'name' />
                <p>Price</p>
                <input type='text' value='price' />
                <p>Description</p>
                <input type='text' value='description' />
                <button>add</button> <button>cancel</button>
            </form>
            </div>
            </div>
            <div>
                listings
            </div>
        </div>

        )
    }
}