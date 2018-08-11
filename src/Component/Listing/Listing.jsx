import React from 'react';
// import {Link} from 'react-router-dom';
import {ListGroupItem, Grid, ListGroup, Button, Alert} from 'react-bootstrap';
import '../Home/Home.css';
import './Listing.css';


export default function Listing(props){

    
    return(
        <Grid>
        <div>
      
            <ListGroup>
                <ListGroupItem >
                    <h2>{props.name}</h2>
                     <img src={props.image} alt='listing item' className='listing_image'  />
                </ListGroupItem>
                <ListGroupItem>
                    <h3>Description: {props.description}</h3>
                    <h4>Price:${props.price}</h4>
                    <h6>Category:{props.category}</h6>
                    <h6> Posted By: User { props.user_id || props.user} </h6>
                </ListGroupItem>
                    <Button className='button' onClick= {()=> props.changeMenu(props.id)}>edit </Button>
                    <Button className='button' onClick={()=>props.deleteListing(props.id)}>delete</Button> 
                    <Button className='button' onClick={() => props.addListingToCart(props.id,props.image,props.name,props.price,props.description,props.category)}>
                    add to cart
                    </Button>
                    {/* <Button onClick={()=>props.handleShow()}>alert</Button> */}
                  
                </ListGroup>

        </div>
        </Grid>
    )

}