require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')

// Database Connection

connection();

//  Middleware to create web server

app.use(express.json());
app.use(cors());


const port = Number(process.env.PORT) || 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}`));
