import React from 'react';
import {Link} from 'react-router-dom';

export default function Listing(props){
    
    return(
        <div>
            <img src={props.image} alt='listing item' className='listing_image'/>
            <p>product name: {props.name}</p>
            <p>price: {props.price}</p>
            <p>description:{props.description}</p>
            <p>category:{props.category}</p>
            <p>posted by:{props.user_id}</p>
           <button onClick={()=>props.deleteListing(props.id)}>delete</button> 
           <button onClick={() => props.addListingToCart(props.id,props.image,props.name,props.price,props.description,props.category)}>add to cart</button>
          
        </div>
    )

}