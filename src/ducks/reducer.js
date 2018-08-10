const initialState = {
    image: '',
    name: '',
    price: '',
    description: '',
    category: '',
    user_id:'',
    selectedCategory:'',
    listings:[],
};

//Action types

const UPDATE_IMAGE='UPDATE_IMAGE';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_PRICE = 'UPDATE_PRICE';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const UPDATE_USER_ID = 'UPDATE_USER_ID';


const SELECTED_CAT = 'SELECTED_CAT';

const SET_LISTINGS = 'SET_LISTINGS';

export default (state=initialState, action) => {
    switch(action.type){
        //add session storage here
        case UPDATE_IMAGE: 
            return Object.assign( {}, state, {image: action.payload});
        
        case UPDATE_NAME: 
            return Object.assign( {}, state, {name: action.payload});

        case UPDATE_PRICE:
            return Object.assign({}, state, {price: action.payload});

        case UPDATE_DESCRIPTION:
            return Object.assign({}, state, {description: action.payload});
        
        case UPDATE_CATEGORY:
            return Object.assign({}, state, {category: action.payload});
    
        case UPDATE_USER_ID:
            return Object.assign({}, state, {user_id: action.payload});

        case SELECTED_CAT: 
            return Object.assign( {}, state, {selectedCategory: action.payload});
        
        case SET_LISTINGS:
            return Object.assign({}, state, {listings: action.payload});

        default: return state;
    }
}

export function handleChange(type, value){
    switch(type){
        case 'image':
        return{
            type:UPDATE_IMAGE,
            payload:value
        }
        case 'name':
        return{
            type: UPDATE_NAME,
            payload: value
        }
        case 'price':
        return{
            type: UPDATE_PRICE,
            payload: value
        }
        case 'description': 
        return{
            type: UPDATE_DESCRIPTION,
            payload: value
        }
        case 'category':
        return {
            type: UPDATE_CATEGORY,
            payload: value
        }
        case 'user_id':
        return{
            type: UPDATE_USER_ID,
            payload: value
        }
        default:
        return value;

    }
}

export function selectedCategoryFunc(category){
    return{
        type:SELECTED_CAT,
        payload:category
    }
}

export function setListings(listings){
    return{
        type:SET_LISTINGS,
        payload: listings
    }
}

