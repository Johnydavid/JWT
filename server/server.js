require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')
const userRoutes =  require('./routes/user');
const authRoutes = require('./routes/auth');



//  Middleware to create web server

app.use(express.json());
app.use(cors());


const port = Number(process.env.PORT) || 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}`));


// Database Connection

connection();


// Routes

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);



