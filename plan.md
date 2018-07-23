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
    * /api/products
        * GET
        * POST
        * EDIT
        * DELETE
        (can't patch something that isn't there)
    * /api/profile
        * GET
        * EDIT
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
* files
    * /db
     * init.sql
     * create_listing.sql
     * view_all_listings.sql
     * view_user_listings.sql
     * edit_listing.sql 
     * delete_listing.sql
     
     * create_profile.sql
     * read_profile.sql
     


## NPM Packages 

* axios 
* express - program in the back end with node
* massive - connect server to database, allows full crud on back end 
* body-parser - req.body
* dotenv
* express-session - setup express server 
* redux
* react-redux
* react-router-dom

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