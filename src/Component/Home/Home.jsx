import axios from 'axios';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Listing from '../Listing/Listing';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';
// import {AddModal} from '../AddModal/AddModal';
// import AddListing from '../AddListing/AddListing';
// import {EditModal} from '../EditModal/EditModal';
import Tarot from '../Tarot/Tarot';
import ScrollUp from '../ScrollUp/ScrollUp';
import EditModal from '../EditModal/EditModal.jsx';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      showMenu: false,
      showReading: false,
      user:{},
      listings: [], //this.props.listing
      currentModalListing: {},
      
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
      // console.log('***user', user.data)
      this.setState({
        listings: listings.data,
        user: user.data
      })
      // console.log('---state', this.state)
    }))

    axios.get('/api/listings').then(response => { //need to pass this down through props 
      // console.log('.....response',response.data)
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
      user_id:user_id,

      
    }
    console.log('post',post)
    axios.post(`/api/cart`, post)

    
  }

  editListing(id){
    console.log('id', id);
  
    axios.get(`/api/listing/${id}`)
    .then(response => { 
      // console.log('.....response',response.data)
      //need to set state 
      this.setState({
        itemName: response.data.name,
        itemImage:response.data.image,
        itemPrice:response.data.price,
        itemDescription:response.data.description,
        itemCategory:response.data.category
      })
    })
        
  }

  changeMenu=(id)=> {
    let listingToEdit = this.state.listings.filter((listing) => {
      return (
      listing.id === id 
      )
    })
    this.setState({
      showMenu: true,
      currentModalListing: listingToEdit[0],
    })

    
   console.log(
     'listing to edit', listingToEdit
   )
}

  cancelMenu= ()=> {
    this.setState({
      showMenu: false
    })
  }

  changeReading = () => {
    this.setState({
      showReading: true
    })
  }

  cancelReading = () =>{
    console.log('hit');
    this.setState({
      showReading: false
    })
  }
  
  render() {

    // console.log('this.state.user',this.state.user.id)
    // console.log('listings----', this.state.listings);
    // const{showMenu} = this.state;
    // const{showReading}=this.state;
    // console.log('----', user.id)
    const ViewAll = this.state.listings.map((listing, index) => {
      return <div key={listing.id}>
        <Listing user={this.state.user.id} deleteListing ={this.deleteListing} {...listing} addListingToCart={this.addListingToCart} changeMenu={this.changeMenu} showMenu={this.state.showMenu} cancelMenu={this.cancelMenu} listingToEdit = {this.state.listingToEdit}  />

        </div>
    })
        
    // console.log('view all', ViewAll);
    return (
      <Grid>

        <div className =  {this.state.showMenu ? "menuopen" : "menu"}>
            <EditModal cancelMenu = {this.cancelMenu} listing={this.state.currentModalListing}  changeMenu={this.changeMenu}  />
        </div>

      <div className='appHome'>
        <Row className= 'row1'>
          <Col className='col1' xs={12} md={12} lg={6} > 
          <Button onClick={() => this.changeReading()} > Tarot Reading </Button>
          {this.state.showReading ? <Tarot cancelReading ={this.cancelReading} /> : null}
      {/* <Tarot cancelReading ={this.cancelReading} showReading ={this.state.showReading}/>   */}
           {/* <Tarot /> */}
          </Col>
          <Col className='col2' xs={12} md={12} lg={6} >
            moon
          </Col>
        </Row>
      
        <Row className='row2'>
          <Col className='row2col2' lg={12}  >
           <Jumbotron>
           {ViewAll}
           </Jumbotron>

          </Col>
        </Row>

         <div className="footer">
         <ScrollUp style={{width: 75}} ToggledStyle={{right: 100}}/>
        </div>

      </div>
    </Grid>



    );
  }
}