import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {handleChange} from '../../ducks/reducer';
import {connect} from 'react-redux';

class AddListing extends Component {
    constructor(){
        super();
       this.createListing = this.createListing.bind(this);
       this.deleteListing = this.deleteListing.bind(this);
        // this.state={
    //         image: '',
    //         name:'',
    //         price:'',
    //         description:'',
    //         category:'',
    //         user_id:'',
        // }

    }

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
        <div>
            <nav className='nav'>
        {/* <Link to='/login'><button className='btn'>Login/Register</button></Link>
        <Link to='/profile'><button className='btn'>Profile</button></Link>
        <Link to='/add'><button className='btn'>Add Listing</button></Link> */}
            </nav>

            <div>
            <div>
            <form>
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
                {/* <Link to='/add'><div className='menuItem'>Add Listing</div></Link> */}
                {/* <button onClick={this.deleteListing}>Delete</button> */}
            </form>
            </div>
            </div>
            <div>
                listings
            </div>
        </div>

        )
    }
};
const mapStateToProps = state => {
    return state;
}



export default connect(mapStateToProps)(AddListing);