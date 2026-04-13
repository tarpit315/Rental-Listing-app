const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listing = new Schema({
    title:{
        type : String,
        required: true
    },
    description :{
        type : String,
        required:true
    },
    price:Number,
    location:String,
    country:String,
    image:{
        type:String,
        set: (v) => v===""? "http://images.unsplash.com/photo-1658194356755-22109e2c76e6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    }

})

const Listing = mongoose.model("Listing",listing);
module.exports = Listing;
