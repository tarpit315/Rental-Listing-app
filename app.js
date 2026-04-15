const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const { url } = require("inspector");
const methodOverride = require("method-override");


app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/major");
    
}

main()
.then(()=> console.log("connect"))
.catch(err => console.log("not"));




app.get("/",(req,res)=>{
    res.send("hi thisis working");
})

//INDEX ROUTE
app.get("/listing", async(req,res)=>{
   const allListing =  await Listing.find({});
     res.render("listing/index.ejs",{allListing})
    
});

//NEW ROUTE
app.get("/listing/new",(req,res)=>{
    res.render("listing/new.ejs");
})

//CREATE ROUTE
app.post("/listing",async (req,res)=>{
    const newlisting = new Listing (req.body.listing);
    await newlisting.save();
    res.redirect("listing")
})

//UPDATE RAUTE
app.put("/listing/:id", async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body);
    res.redirect("/listing");
})



//EDIT ROUTE
app.get("/listing/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    res.render("listing/edit",{listing});
})

//DELETE ROUTE
app.delete("/listing/:id", async(req,res)=>{
    let {id} = req.params;
   let deletelisting =  await Listing.findByIdAndDelete(id);
   console.log(deletelisting);
   res.redirect("/listing");
})



//SHOW ROUTE  
app.get("/listing/:id" , async(req,res)=>{
    let {id} = req.params;
    let listing =  await Listing.findById(id);
    res.render("listing/show.ejs",{listing});
})












// app.get("/listing" ,async (res,req)=>{

//     let sapmlelisting = new Listing({
//         title: "Beach House",
//         description: "Beautiful sea facing house",
//         price: 5000,
//         location: "Goa",
//         country: "India",
//         image: ""
//     })
//      await  sapmlelisting.save()
//      .then((res)=>console.log("yep"))
//      .catch((err) => console.log("nope"));
// })



app.listen(8080,()=>{
    console.log("hello");
})