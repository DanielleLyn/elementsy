import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,ListGroupItem, Grid, ListGroup,Row, Modal, Image,Well, Button} from 'react-bootstrap';
import './Listing.css';

export default function Listing(props){
    console.log('props', props);
    return(
        <Grid>
        <div>
       

        <div>
           
            <ListGroup>
                <ListGroupItem >
                <h2>{props.name}</h2>
                 <img src={props.image} alt='listing item' className='listing_image' rounded />
                </ListGroupItem>
                <ListGroupItem>
                <h3>Description: {props.description}</h3>
                <h4>Price:{props.price}</h4>
                {/* <h3>Category:{props.category}</h3> */}
                <h6> Posted By User: {props.user_id} </h6>
                </ListGroupItem>
              
                    <Button onClick= {()=> props.changeMenu()}>edit </Button>
                <Button onClick={()=>props.deleteListing(props.id)}>delete</Button> 
           <Button onClick={() => props.addListingToCart(props.id,props.image,props.name,props.price,props.description,props.category)}>add to cart</Button>
          
            </ListGroup>

                


            {/* <p>product name: {props.name}</p>
            <p>price: {props.price}</p>
            <p>description:{props.description}</p>
            <p>category:{props.category}</p>
            <p>posted by:{props.user_id}</p>
           <button onClick={()=>props.deleteListing(props.id)}>delete</button> 
           <button onClick={() => props.addListingToCart(props.id,props.image,props.name,props.price,props.description,props.category)}><Link to='/cart'>add to cart</Link></button>
           */}
        </div>
        </div>
        </Grid>
    )

}