import axios from 'axios';
import React, { Component } from 'react';
import './Home.css';
import Listing from '../Listing/Listing';
import {Jumbotron, Grid, Row, Col, Button, Modal} from 'react-bootstrap';
import Tarot from '../Tarot/Tarot';
import ScrollUp from '../ScrollUp/ScrollUp';
import EditModal from '../EditModal/EditModal.jsx';
import Moon from '../FullMoon/FullMoon';
import {setListings} from '../../ducks/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      showMoon:false,
      showMenu:false,
      showReading:false,
      user:{},
      listings: [], 
      currentModalListing: {},
      show: false,
      cartItem:'',
     
    }
    this.deleteListing = this.deleteListing.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.addListingToCart = this.addListingToCart.bind(this);
    this.editListing = this.editListing.bind(this);
    this.changeMenu=this.changeMenu.bind(this);
    this.cancelMenu=this.cancelMenu.bind(this);
    this.changeReading=this.changeReading.bind(this);
    this.cancelReading=this.cancelReading.bind(this);
    this.changeMoon=this.changeMoon.bind(this);
    this.cancelMoon=this.cancelMoon.bind(this);
    
  }
  componentDidMount(){
    
    function listing(){
      return axios.get('/api/listings')
    }

    function user(){
      return axios.get('/api/user')
    }

    axios.all([listing(), user()]).then(axios.spread((listings, user)=> { 
      this.props.setListings(listings.data)
      this.setState({
        listings: listings.data,
        user: user.data
      })
    }))

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
    axios.post(`/api/cart`, post)
    .then(()=>{
      this.setState({
        cartItem: post.name
      })
    })
    .then(()=>{
      this.handleShow();
    })
   
    console.log('post', post.name)
    console.log('cart', this.state.cartItem)
    

  }

  editListing(id){
    console.log('id', id);
  
    axios.get(`/api/listing/${id}`)
    .then(response => { 
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

  changeMoon = () => {
    this.setState({
      showMoon:true
    })
  }

  cancelMoon = () => {
    this.setState ({
      showMoon:false
    })
  }

  handleDismiss() {
    this.setState({ 
      show: false 
    });
  }

  handleShow() {
    this.setState({ 
      show: true 
    });
  }
  
  render() {
  //  console.log('-----',this.props.state.listings)
    // console.log('current view', this.state.currentView)
    console.log('----', this.state)
    const ViewAll = this.props.state.listings.map((listing, index) => {
      return <div key={listing.id}>
        <Listing user={this.state.user.id} 
        deleteListing ={this.deleteListing} 
        {...listing} 
        addListingToCart={this.addListingToCart} 
        changeMenu={this.changeMenu} 
        showMenu={this.state.showMenu} 
        cancelMenu={this.cancelMenu} 
        listingToEdit = {this.state.listingToEdit}
        handleShow = {this.handleShow}  />
        </div>
    })

    
    
    return (
      <Grid>

        <div className =  {this.state.showMenu ? "menuopen" : "menu"}>
            <EditModal cancelMenu = {this.cancelMenu} 
            listing={this.state.currentModalListing}  
            changeMenu={this.changeMenu}  />
        </div>

      <div className =  {this.state.show ? "show" : "noShow"}>

      <Modal.Dialog className='cartAlert'> 
                <Modal.Header onDismiss={this.handleDismiss}>
                    <Modal.Title>Item added to cart!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                    {this.state.cartItem} added to cart!
                    </div>

                </Modal.Body>

                <Modal.Footer>
               
                <Button><Link to='/cart'>Go to Cart</Link></Button>
                <Button onClick={() => this.handleDismiss()}>Cancel</Button> 
                </Modal.Footer>
               
            </Modal.Dialog>  

        </div>

      <div className='appHome'>
        <Row className= 'row1'>
          <Col className='col1' xs={12} md={12} lg={6} > 
          <Button className='button' onClick={() => this.changeReading()}> Tarot Reading </Button>
          {this.state.showReading ? <Tarot cancelReading ={this.cancelReading} /> : null}
          </Col>
          <Col className='col2' xs={12} md={12} lg={6} >
            <Button className='button' onClick={()=> this.changeMoon()}> Moon Info </Button>
            {this.state.showMoon ? <Moon cancelMoon={this.cancelMoon} /> : null}
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

const mapStateToProps = (state) => {
  return {
      
      state
      
  }
}
const mapDispatchToProps = {
 
  setListings,
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)