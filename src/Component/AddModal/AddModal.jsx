import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {handleChange} from '../../ducks/reducer';
import {connect} from 'react-redux';
import{Modal, Button} from 'react-bootstrap';


export class AddModal extends Component {
    constructor(props){
        super(props);
        console.log('props', props);
        this.state={
           
            itemName: props.itemName,
            image: props.image,
            price: props.price,
            description: props.description,
            category: props.category

           
        }
    }

   
    render(){
        console.log('this item is', this.state.name);
        const {dispatch} = this.props;
        return(
            <div>
       
</div>
                
        )
    }
}