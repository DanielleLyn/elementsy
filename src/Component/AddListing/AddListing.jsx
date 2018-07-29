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
       // this.state={
           //         image: '',
           //         name:'',
           //         price:'',
           //         description:'',
           //         category:'',
           //         user_id:'',
           // }
           
        }
        // this.deleteListing = this.deleteListing.bind(this);
        
    createListing(){
        const{image, name, price, description, category} = this.props;
        axios.post('/api/listing', {image, name, price, description, category})
        .then(res => {
            console.log(res.data.newListing);
            
          
        }).catch(err=> console.log('Axios Post Listing error', err));
    }
    // deleteListing(id){
    //     return axios.delete(`/api/listings/${id}`)
    //     .then(res => {
    //         console.log(res.data.message);
        
    //     }).catch(err => console.log('error editing listing', err));
    // }


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
                <Button bsStyle="primary" onClick={this.createListing}>Add</Button> 
                <Button><Link to='/'>Cancel</Link></Button> 
                </Modal.Footer>
                
                

            </Modal.Dialog>    
          </div>
          </div>



           
            <div>
            {/* <form>
                <p>Image</p>
                <input type="text" placeholder="Image url" onChange={(e) => dispatch(handleChange('image', e.target.value))} />
                <p>Item Name</p>
                <input type="text" placeholder="Name" onChange={(e) => dispatch(handleChange('name', e.target.value))} />
                <p>Price</p>
                <input type='text' placeholder ="Price" onChange={(e) => dispatch(handleChange('price',e.target.value))} />
                <p>Description</p>
                <input type='text' placeholder="Description" onChange={(e) => dispatch(handleChange('description',e.target.value))} />
                <p>Category</p>
                <input type='text' placeholder="Category" onChange={(e) => dispatch(handleChange('category',e.target.value))} />
                <button onClick={this.createListing}>Add</button> <button><Link to='/'>Cancel</Link></button> 
                <Link to='/add'><div className='menuItem'>Add Listing</div></Link>
                <button onClick={this.deleteListing}>Delete</button>
            </form> */}
            </div>

            

          
          
  
        </div>

        )
    }
};
const mapStateToProps = state => {
    return state;
}



export default connect(mapStateToProps)(AddListing);