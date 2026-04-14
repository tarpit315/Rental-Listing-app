const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/major");
    
}

main()
.then(()=> console.log("connect"))
.catch(err => console.log("not"));


const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data intizalised");
} 

initDB();