import axios from 'axios';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Listing from '../Listing/Listing';
import {Jumbotron, Grid, Row, Col, Image, Button, Modal} from 'react-bootstrap';
import {AddModal} from '../AddModal/AddModal';
import AddListing from '../AddListing/AddListing';


export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      showMenu: false,

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

  addListingToCart= (id,image,name,price,description,category,user_id) => {
    let post = {
      image: image,
      name: name,
      price: price,
      description:description,
      category:category,
      id:id,
      user_id:user_id
      
    }
    console.log('post',post)
    axios.post(`/api/cart`, post)

    
  }

  editListing(id){
    console.log('id', id);
  
    axios.get(`/api/listing/${id}`)
    .then(response => { 
      console.log('.....response',response.data)
      //need to set state 
      this.setState({
        itemName: response.data.name,
        itemImage:response.data.image,
        itemPrice:response.data.price,
        ItemDescription:response.data.description,
        itemCategory:response.data.category
      })
    })
        
  }

  changeMenu=()=> {
    this.setState({
      showMenu: true
  })
}

  cancelMenu= ()=> {
    this.setState({
      showMenu: false
    })
  }

  render() {
    console.log('user',this.state.user)
    console.log('listings----', this.state.listings);
    const{showMenu} = this.state;

    const ViewAll = this.state.listings.map((listing, index) => {
      return <div key={listing.id}>
        <Listing deleteListing ={this.deleteListing}{...listing} addListingToCart={this.addListingToCart} editListing={this.editListing} changeMenu={this.changeMenu} />

        </div>
    })
    console.log('view all', ViewAll);
    return (
    <Grid>
      <div className='appHome'>
        <Row className= 'row1'>
          <Col className='col1' xs={12} md={12} lg={6} > 
           tarot
          </Col>
          <Col className='col2' xs={12} md={12} lg={6} >
            moon
          </Col>
        </Row>
        <div className =  {showMenu ? "menuopen" : "menu"}>
        <AddListing cancelMenu = {this.cancelMenu} />
        </div>
        <Row className='row2'>
          <Col className='row2col2' lg={12}  >
           <Jumbotron>
           {ViewAll}
           </Jumbotron>

          </Col>
        </Row>

      </div>
    </Grid>



    );
  }
}