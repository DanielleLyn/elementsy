require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');

const checkForSession = require('./middlewares/checkForSession');


const app = express();
const c = require('./Controller/controller');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
  }));

app.use( checkForSession );

app.use(express.static(`${__dirname}/../build`))
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
}).catch( err => console.log(err));


app.get('/auth/callback', (req, res) => {
    console.log('/callback hit')
    let payload = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      code: req.query.code,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/api/callback`
    }
    
    function tradeCodeForAccessToken(accessTokenResponse){
         console.log('payload', payload
         );
      return axios.post(`https://${process.env.REACT_APP_DOMAIN}/oauth/token`, payload)
    }
  
    function tradeAccessTokenForUserInfo(accessTokenResponse){
      const accessToken = accessTokenResponse.data.access_token;
      return axios.get(`https://${process.env.REACT_APP_DOMAIN}/userinfo/?access_token=${accessToken}`) 
    }
  
    // function setUserToSessionGetAuthAccessToken(userInfoResponse){
    //     req.session.user = userInfoResponse.data
    //   console.log(userInfoResponse.data)
    //  res.end()
     
    // }

    function storeUserInfoInDataBase(response) {
        console.log('----response data', response.data );
        const auth0id = response.data.sub;
         req.app.get('db').find_user_by_auth0_id(auth0id).then(users=>{
            console.log('new user', users[0])
          if (users.length){
            let user = users[0];
            req.session.user = user;
            res.redirect('/');
          } else {
            let createUserData = {
              auth0_id: auth0id,
              email: response.data.email,
              username: response.data.nickname,
              
            };
          req.app.get('db').create_user({...createUserData}).then(newUsers =>{
               console.log('new user', newUsers)
              let user = newUsers[0];
              req.session.user = user;
              res
            })
          }
        })   
      }
       
  
    tradeCodeForAccessToken()
    .then(accessToken=> tradeAccessTokenForUserInfo(accessToken))
    .then(userInfo => storeUserInfoInDataBase(userInfo))
    .catch(err =>  console.log(err))      
  })


app.get('/api/listings', c.listingRead);
app.get('/api/user', c.read);
app.post('/api/listing', c.createListing);
app.put('/api/listing/:id', c.editListing)
app.delete('/api/listings/:id', c.deleteListing)


const path= require('path')
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

const PORT = 5000;
app.listen(PORT, () => console.log('Listening on Port:'+ PORT))