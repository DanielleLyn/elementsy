import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <div className="box">
      links
        <Link to='/login'><button className='btn'>Login/Register</button></Link>
        <Link to='/profile'><button className='btn'>Profile</button></Link>
        <Link to='/add'><button className='btn'>Add Listing</button></Link>
      </div>
    );
  }
}