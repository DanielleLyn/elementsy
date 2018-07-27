import React from 'react';

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
           <button>add to cart</button>
        </div>
    )

}