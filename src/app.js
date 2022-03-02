const express = require("express")
const {join} =require("path");
const {getData, serachData} = require("./fetch")
// const compression = require('compression')
// const router = require("./controller/router")
const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.disable("x-powered-by");

app.use(express.static(join(__dirname,".." , "public")));

// app.use(compression())
app.get("/image" , (req,res) =>{
  res.sendFile(join(__dirname , ".." ,"public","image.html"))
})
app.get("/Imagedata", getData)
app.post("/searchImages", serachData)

app.set('port',process.env.PORT || 3000);
// app.use(router);
module.exports =app;