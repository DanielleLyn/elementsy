import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {handleChange} from '../../ducks/reducer';
import {connect} from 'react-redux';
import{Modal, Button} from 'react-bootstrap';
import './AddListing.css';


class AddListing extends Component {
    constructor(){
        super();
       this.createListing = this.createListing.bind(this);   
        }
        
    createListing(){
        const{image, name, price, description, category} = this.props;
        axios.post('/api/listing', {image, name, price, description, category})
        .then(res => {
            console.log(res.data.newListing);
            window.location.reload();
        }).catch(err=> console.log('Axios Post Listing error', err));
    }
   
    render(){
        const {dispatch} = this.props;
    return(

        <div className='app'>
        <div className='addListingHeader'>
        
        </div>
            <div className='AddBody'>
            <div className='AddListing-modal'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Add Listing</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Item Name</p>
                <input type="text" placeholder="Name" onChange={(e) => dispatch(handleChange('name', e.target.value))} />
                <p>Image</p>
                <input type="text" placeholder="Image url" onChange={(e) => dispatch(handleChange('image', e.target.value))} />
                <p>Price</p>
                <input type='text' placeholder ="Price" onChange={(e) => dispatch(handleChange('price',e.target.value))} />
                <p>Description</p>
                <input type='text' placeholder="Description" onChange={(e) => dispatch(handleChange('description',e.target.value))} />
                <p>Category</p>
                <input type='text' placeholder="Category" onChange={(e) => dispatch(handleChange('category',e.target.value))} />
                
                </Modal.Body>
                <Modal.Footer>
                <Button bsStyle="primary" onClick={this.createListing}><Link to='/'>Add</Link></Button> 
                <Button onClick={this.props.cancelMenu}><Link to='/'>Cancel</Link></Button> 
                </Modal.Footer>
                
                

            </Modal.Dialog>    
          </div>
         
          
            </div>

        </div>

        )
    }
};
const mapStateToProps = state => {
    return state;
}



export default connect(mapStateToProps)(AddListing);