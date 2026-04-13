const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/major");
    
}

main()
.then(()=> console.log("connect"))
.catch(err => console.log("not"));


app.get("/",(req,res)=>{
    res.send("hi thisis working");
})


app.get("/listing" ,async (res,req)=>{

    let sapmlelisting = new Listing({
        title: "Beach House",
        description: "Beautiful sea facing house",
        price: 5000,
        location: "Goa",
        country: "India",
        image: ""
    })
     await  sapmlelisting.save()
     .then((res)=>console.log("yep"))
     .catch((err) => console.log("nope"));
})



app.listen(8080,()=>{
    console.log("hello");
})