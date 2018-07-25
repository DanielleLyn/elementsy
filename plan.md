#Elementsy plan

##front-end

* Pages 
    * Landing Page 
        * List view 
            * View all
            * My listings
    * Right nav bar 
        * tarot
        * Horoscope
        * Next Full Moon  
    * Left nav bar 
        * Login 
        * Register 
        * Profile
        * Add listing
    * Profile 
        * name
        * email address
        * my listings
    * Add listing
        * img
        * name 
        * price
        * description
        * add/cancel
    * Cart  
        * items in cart (add)
    * Checkout  
        * 
    
    

* Components 
    * Header 
    * Button - add listing
    * Navigation - view all/view mine
    * Input
    * Widgets
    * Footer 
        * copyright
        * careers 

* Redux
    * store
    * reducer 
        * initial state (what kind of state do we want? we are going to keep user state global for this app)
            * user
        * reducer function
        * action creators 
            * login
            * logout
        * action type names 
            * USER_LOGIN
            * USER_LOGOUT

* Routes 
    * BrowserRouter
    * / -main view
    * /login - (and register)
    * /profile 
    * /addlisting
    * /cart
  

## back-end (Server)

* Middleware 
    * ensureLoggedIn
* Routes
    * /api/listings
        * GET
            * GET '/api/listings' returns all listings
            * GET '/api/listings:userid' returns listings based on userID (JOIN) (in profile and on main page)
        * POST
            * POST '/api/listing' post new listing
        * EDIT
            * PUT ('/api/listing' edits posted listing
        * DELETE
            * DELETE '/api/listing' deletes posted listing
        (can't patch something that isn't there)
    * /api/profile
        * GET
            * GET '/api/profile:id' returns profile by id
        * EDIT
            * PUT '/api/profile:id edits profile by id
* Auth
    * Auth0
* files
    * /server
    * index.js
    * controller

## Database

* tables
    * users
        * id 
        * auth0_id (this is how we link to auth0)
        * username
        * email

   * listings
        * image
        * name
        * price
        * description
        * userId (unique not null) - references user table
* files
    * /db
     * init.sql
     * create_listing.sql
     * view_all_listings.sql
     * view_user_listings.sql (JOIN)
     * edit_listing.sql 
     * delete_listing.sql
     
     * create_profile.sql
     * read_profile.sql
     


## NPM Packages 

* axios 
* react-router-dom
* dotenv

* express - program in the back end with node
* massive - connect server to database, allows full crud on back end 
* body-parser - req.body
* express-session - setup express server 
* redux
* react-redux

## Third Party

* Auth0
    * application
    * social connections
* GitHub
* Heroku 
* redux devTools
* postman
* sql tabs
* Chrome
    * DevTools
     * network tabs


     MVP - simple e-commerce site with: 
     some products available
     user can add/edit own posts  
     working cart

Intended points: 
    * Domain Registration  10pts
    * Responsive design    20pts
    * stripe               20pts
    * 3 widgets
