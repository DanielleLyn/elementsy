import React, {Component} from 'react';
import{Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {selectedCategoryFunc} from '../../ducks/reducer';
import {setListings} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }  
    }

    getAll(){
        axios.get('/api/listings').then(response => { 
         this.props.setListings(response.data)
        })
    }
    getClothes(){
        axios.get('/api/clothes').then(response => {  
          this.props.setListings(response.data)        
        })
      }
    
      getCrystals(){
        axios.get('/api/crystals').then(response => {  
            this.props.setListings(response.data) 
        })
      }
      getIncense(){
        axios.get('/api/incense').then(response => {  
            this.props.setListings(response.data) 
        })
      }
      getTarot(){
        axios.get('/api/tarot').then(response => {  
            this.props.setListings(response.data) 
        })
      }
      getJewelry(){
        axios.get('/api/jewelry').then(response => {  
            this.props.setListings(response.data) 
        })
      }
      getOther(){
        axios.get('/api/other').then(response => {  
            this.props.setListings(response.data) 
        })
      }


    render (props){

        return(
            <Navbar default fluid>
                <Navbar.Header>
                    <Navbar.Brand className='brand'>
                        <Link to = '/'> Elementsy </Link>
                    </Navbar.Brand>
                      <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>

                      <Nav pullLeft>
                    <NavDropdown className='menuItem2' eventKey={2} title="View Products" id="Menu-dropdown" >
                    <MenuItem componentClass='span' eventKey="2.1">
                            <a onClick={() => this.getAll()}>View All</a>
                        </MenuItem>
                        <MenuItem componentClass='span' eventKey="2.1">
                            <a onClick={() => this.getClothes()}>Clothes</a>
                        </MenuItem>
                        <MenuItem componentClass='span' eventKey="2.2">
                        <a onClick={() => this.getCrystals()}>Crystals</a>
                        </MenuItem>
                        <MenuItem componentClass='span' eventKey="2.3">
                        <a onClick={() => this.getIncense()}>Incense</a>
                        </MenuItem>
                        <MenuItem componentClass='span' eventKey="2.4">
                        <a onClick={() => this.getTarot()}>Tarot</a>
                        </MenuItem>
                        <MenuItem componentClass='span' eventKey="2.5">
                        <a onClick={() => this.getJewelry()}>Jewelry</a>
                        </MenuItem>
                        <MenuItem componentClass='span' eventKey="2.6">
                        <a  onClick={() => this.getOther()}>Other</a>
                        </MenuItem>
                    </NavDropdown>
                    </Nav>

                    <Nav pullRight >
                    <NavDropdown className='menuItem2' eventKey={1} title="Menu" id="Menu-dropdown" >
                        <MenuItem componentClass='span' eventKey="2.1">
                            <Link to='/login'>Login/Profile</Link>
                        </MenuItem>
                     
                        <MenuItem componentClass='span' eventKey="2.3">
                            <Link to='/add'>AddListing</Link>
                        </MenuItem>
                    </NavDropdown>

                     <NavItem eventKey={2}> 
                        <Link to='/'> Home </Link>
                    </NavItem>
                  
                    <NavItem  eventKey={3}> 
                        <Link to='/Cart/'> Cart </Link>
                    </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
        state
        
    }
}

const mapDispatchToProps = {
    selectedCategoryFunc: selectedCategoryFunc,
    setListings,
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)