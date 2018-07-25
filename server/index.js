const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const c = require('./controller');

require('dotenv').config();

app.use(bodyParser.json());

// massive(process.env.CONNECTION_STRING).then(database => {
//     app.set('db', database)
// }).catch( err => console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log('Listening on Port:', PORT));