import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import{Modal, Button} from 'react-bootstrap';
import './EditModal.css';



class EditModal extends Component {
    constructor(props){
        super(props);
        this.state={
          updatedName:'',
          updatedImage: '',
          updatedPrice: '',
          updatedDescription: '',
          updatedCategory: '',            
            
        }
        this.updateListing = this.updateListing.bind(this); 
        this.changeHandler = this.changeHandler.bind(this); 
        this.cancelClicked = this.cancelClicked.bind(this); 
      
    }

    updateListing(id, name, image, price, description, category){
        console.log('stats', id, name, image, price, description, category, )
        console.log('props', this.props.listing)
        let updatedItem = {
            id: id || this.props.listing.id,
            name: name || this.props.listing.name,
            image: image || this.props.listing.image,
            price: price || this.props.listing.price,
            description: description || this.props.listing.description,
            category: category || this.props.listing.category
            
        }

        console.log('****updated item', updatedItem)
        axios.put(`/api/listing/${id}`, updatedItem).then(res => {
            this.setState({
                id: '',
                name: '',
                image:'',
                price:'',
                description: '',
                category: '',
            })
            window.location.reload();
        })
    }

    changeHandler =(key, value)=> {
        console.log(key, value)
        this.setState({
            [key]:value
        })
    }

    cancelClicked =() => {
        this.setState({
            updatedName:'',
            updatedImage: '',
            updatedPrice: '',
            updatedDescription: '',
            updatedCategory: '', 
        })
    }

    
    render(){
    
        // console.log('*** user data', user.data)
        // console.log('listing', this.props.listing)
        return(
            <div>
         <div className='EditModal'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit Listing</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Item Name</p>
                <input name='updatedName' type="text" onChange={(e) => this.changeHandler('updatedName', e.target.value)} placeholder={this.props.listing.name || "name"} value={this.state.updatedName || this.props.listing.name}/>
                <p>Image</p>
                <input name='updatedImage' type="text" onChange={(e) => this.changeHandler('updatedImage', e.target.value)} placeholder={this.props.listing.image || "image"} value={this.state.updatedImage || this.props.listing.image} />
                <p>Price</p>
                <input name='updatedPrice' type='text' onChange = {(e) => this.changeHandler('updatedPrice', e.target.value)} placeholder ={this.props.listing.price || "price"} value={this.state.updatedPrice || this.props.listing.price}  />
                <p>Description</p>
                <input name='updatedDescription' type='text' onChange={(e) => this.changeHandler('updatedDescription', e.target.value)}placeholder={this.props.listing.description || "description"} value={this.state.updatedDescription || this.props.listing.description} />
                <p>Category</p>
                <input name ='updatedCategory' type='text' onChange={(e) => this.changeHandler('updatedCategory', e.target.value)} placeholder={this.props.listing.category || "category" } value={this.state.updatedCategory || this.props.listing.category} />
                
                </Modal.Body>
                <Modal.Footer>
                <Button className='button' onClick= {() => this.updateListing(this.props.listing.id, this.state.updatedName, this.state.updatedImage, this.state.updatedPrice, this.state.updatedDescription, this.state.updatedCategory)} >Update Listing</Button> 
                <Button className='button' onClick={() => {
                    this.props.cancelMenu()
                    this.cancelClicked()
                    }}>Cancel</Button> 
                </Modal.Footer>
                
                

            </Modal.Dialog>    
          </div>
        </div>
                
        )
    }
}
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(EditModal);
