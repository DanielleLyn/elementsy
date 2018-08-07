import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
// import {handleChange} from '../../ducks/reducer';
import {connect} from 'react-redux';
import{Modal, Button} from 'react-bootstrap';



class EditModal extends Component {
    constructor(){
        super();
        this.state={
        //   listingToEdit:{},
          name: '',
          image: '',
          price: '',
          description: '',
          category: '',
          updatedName:'',
          updatedImage: '',
          updatedPrice: '',
          updatedDescription: '',
          updatedCategory: '',            
            
        }
    }

    updateListing(id, name, image, price, description, category){
        console.log('stats', id, name, image, price, description, category, )
        
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
        })
    }

    changeHandler =(key, value)=> {
        console.log(key, value)
        this.setState({
            [key]:value
        })
    }
    

    
    render(){
        // console.log('------updated name', this.state.updatedName)
        // console.log('*** updated image', this.state.updatedImage)
        // const {dispatch} = this.props;
        // console.log('*** user data', user.data)
        return(
            <div>
         <div className='EditListing-modal'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit Listing</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Item Name</p>
                <input name='updatedName' type="text" onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder={this.props.listing.name || "name"} value={this.state.updatedName}/>
                <p>Image</p>
                <input name='updatedImage' type="text" onChange={(e) => this.changeHandler(e.target.image, e.target.value)} placeholder={this.props.listing.image || "image"} value={this.state.updatedImage} />
                <p>Price</p>
                <input name='updatedPrice' type='text' onChange = {(e) => this.changeHandler(e.target.price, e.target.value)} placeholder ={this.props.listing.price || "price"} value={this.state.updatedPrice}  />
                <p>Description</p>
                <input name='updatedDescription' type='text' onChange={(e) => this.changeHandler(e.target.description, e.target.value)}placeholder={this.props.listing.description || "description"} value={this.state.updatedDescription} />
                <p>Category</p>
                <input name ='updatedCategory' type='text' onChange={(e) => this.changeHandler(e.target.category, e.target.value)} placeholder={this.props.listing.category || "category" } value={this.state.updatedCategory} />
                
                </Modal.Body>
                <Modal.Footer>
                <Button bsStyle="primary" onClick= {() => this.updateListing(this.props.listing.id, this.state.updatedName, this.state.updatedImage, this.state.updatedPrice, this.state.updatedDescription, this.state.updatedCategory)} ><Link to='/'> Update Listing </Link></Button> 
                <Button onClick={this.props.cancelMenu}>Cancel</Button> 
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

{/* <div className='EditListing-modal'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit Listing</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Item Name</p>
                <input type="text" placeholder={this.props.listing.name || "name"} onChange={(e) => dispatch(handleChange('name', e.target.value))} />
                <p>Image</p>
                <input type="text" placeholder={this.props.listing.image || "image"} onChange={(e) => dispatch(handleChange('image', e.target.value))} />
                <p>Price</p>
                <input type='text' placeholder ={this.props.listing.price || "price"} onChange={(e) => dispatch(handleChange('price',e.target.value))} />
                <p>Description</p>
                <input type='text' placeholder={this.props.listing.description || "description"} onChange={(e) => dispatch(handleChange('description',e.target.value))} />
                <p>Category</p>
                <input type='text' placeholder={this.props.listing.category } onChange={(e) => dispatch(handleChange('category',e.target.value))} />
                
                </Modal.Body>
                <Modal.Footer>
                <Button bsStyle="primary" onClick={this.editListing}><Link to='/'>Add</Link></Button> 
                <Button onClick={this.props.cancelMenu}><Link to='/'>Cancel</Link></Button> 
                </Modal.Footer>
                
                

            </Modal.Dialog>    
          </div> */}