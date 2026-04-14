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
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "http://images.unsplash.com/photo-1658194356755-22109e2c76e6?q=80&w=688&auto=format&fit=crop"
        }
    },
   
    price:Number,
    location:String,
    country:String,
   

})

const Listing = mongoose.model("Listing",listing);
module.exports = Listing;
