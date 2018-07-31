const axios = require('axios')
let allListings = [];

module.exports={
    read:(req,res)=>{
        res.status(200).json(req.session.user)
    },

    listingRead: (req, res)=> {
        const db = req.app.get('db');
        db.view_all_listings().then(response=>{
            res.status(200).json(response);
        })
    },

    createListing:(req,res) => {
        const{image, name, price, description, category} = req.body;
        console.log(req.session.user.id);
        const newListing = {image, name, price, description, category, user_id: req.session.user.id};
        const dbInstance = req.app.get('db');
        dbInstance.create_listing(newListing)
        .then(listing => {
            res.status(200).json({message: 'Listing created!'});
        }).catch(err => console.log('Create Listing error---', err));
    },

    editListing: (req,res) => {
        const {id} = req.params; //not sure what this is doing
        const{image, name, price, description, category, user_id} = req.body
        const dbInstance = req.app.get('db');
        dbInstance.edit_listing(updatedListing) //not sure what this is doing
        .then(listing => {
            res.status(200).json({listing});
        }).catch(err => console.log('Databases put errror', err));
    },

    deleteListing: (req,res) => {
        const {id} = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.delete_listing(id).then(() => {
            res.status(200).json({message: 'Listing Deleted!'});
        }).catch(err => console.log('error deleting house', err));
    },

    addToCart: (req,res) =>{
    // const {id} = req.query;
    req.session.cart.push(req.body)

    console.log('===========================', req.session.cart)
    res.end(); 
    },

    readCart: (req , res) => {
        console.log('hit')
        res.status(200).json(req.session.cart)
    },


    getListing: (req,res) => {
        console.log('hello');
        // console.log ('req means', req);
        // console.log('res means', res);
        console.log('req.params',req.params);
         const db = req.app.get('db');
        db.view_listing(req.params.id).then(response=>{
            res.status(200).json(response);
        })
    },

    getOne:(req,res) => {
        res.status(200).json(card);
    }




};


