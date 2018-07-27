import axios from 'axios';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Listing from '../Listing/Listing';


export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      // showMenu: false,
      listings: [], //this.props.listing
    }
    this.deleteListing = this.deleteListing.bind(this);
  }
  componentDidMount(){

    function listing(){
      return axios.get('/api/listings')
    }

    function user(){
      return axios.get('/api/user')
    }

    axios.all([listing(), user()]).then(axios.spread((listings, user)=> { //?
      console.log(user.data)
      this.setState({
        listings: listings.data,
        user: user.data
      })
    }))

    axios.get('/api/listings').then(response => { //need to pass this down through props 
      console.log('.....response',response.data)
      this.setState({
        listings: response.data
      })
    })
  }

  deleteListing(id){
    return axios.delete(`/api/listings/${id}`)
    .then(res => {
        console.log(res.data.message);
      window.location.reload();
    }).catch(err => console.log('error editing listing', err));
}

  render() {
    console.log('user',this.state.user)
    // const{showMenu} = this.state;
    console.log('listings----', this.state.listings);
    
    const ViewAll = this.state.listings.map((listing, index) => {
      return <div key={listing.id}>
        <Listing deleteListing ={this.deleteListing}{...listing}/>
        </div>
    })
    console.log('view all', ViewAll);
    return (
      <div className = "main">
      <nav>
        {/* <button className="hamburger" onClick={() => this.setState({showMenu: !showMenu})}>Profile</button>
        <div className = {showMenu ? "drawer" : "drawer open"}>
        <Link to='/login'><div className='menuItem'>Login/Register</div></Link>
        <Link to='/profile'><div className='menuItem'>Profile</div></Link>
        <Link to='/add'><div className='menuItem'>Add Listing</div></Link> */}
        {/* </div> */}
        
      </nav>

      <div className="box">
        {ViewAll}
      </div>
      <div>

      </div>
      </div>


    );
  }
}