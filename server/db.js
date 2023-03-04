const mongoose = require('mongoose');


module.exports = () =>{
    try{
        mongoose.connect(process.env.ATLAS_URI, {});
        console.log("Connection success")

    }
    catch(error){

        console.log(error);

        console.log("connection failed");

    }
}