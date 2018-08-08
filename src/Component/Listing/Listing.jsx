import React from 'react';
// import {Link} from 'react-router-dom';
import {ListGroupItem, Grid, ListGroup,Button} from 'react-bootstrap';
import './Listing.css';
import '../Home/Home.css';
// import EditModal from '../EditModal/EditModal';

export default function Listing(props){
    // console.log('**', props.user)
// let listing = {
//     id: props.id,
//     name: props.name,
//     image: props.image,
//     price: props.price,
//     description: props.description,
//     category: props.category,
//     user_id: props.user_id
// }
    
    return(
        <Grid>
        <div>
           
         {/* <div className =  {props.showMenu ? "menuopen" : "menu"}>
            <EditModal cancelMenu = {props.cancelMenu} listing={listing}  changeMenu={props.changeMenu}  />
        </div> */}

            <ListGroup>
                <ListGroupItem >
                    <h2>{props.name}</h2>
                     <img src={props.image} alt='listing item' className='listing_image'  />
                </ListGroupItem>
                <ListGroupItem>
                    <h3>Description: {props.description}</h3>
                    <h4>Price:${props.price}</h4>
                    <h6>Category:{props.category}</h6>
                    <h6> Posted By User: { props.user_id || props.user} </h6>
                </ListGroupItem>
                    <Button onClick= {()=> props.changeMenu(props.id)}>edit </Button>
                    <Button onClick={()=>props.deleteListing(props.id)}>delete</Button> 
                    <Button onClick={() => props.addListingToCart(props.id,props.image,props.name,props.price,props.description,props.category)}>add to cart</Button>
                </ListGroup>

        </div>
        </Grid>
    )

}