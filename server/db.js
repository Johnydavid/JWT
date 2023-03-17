const { Db } = require("mongodb");
const mongoose = require("mongoose");

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {});
// const db = mongoose.connection;
// db.once("open", () => {
//   console.log("Connection Successful");
// });
// db.on('error', ()=>{
//     console.log('Connection Failed');
// });

module.exports = () => {
  try {
    mongoose.connect(process.env.ATLAS_URI, {});
    console.log("Connected to Database successfully");
  } catch (error) {
    console.log(error);

    console.log("connection failed");
  }
};
