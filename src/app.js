const express = require("express")
const {join} =require("path");
const {getData, serachData} = require("./fetch");
// const bodyParser = require('body-parser')
// const compression = require('compression')
// const router = require("./controller/router")
const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.disable("x-powered-by");
// app.use(bodyParser.json());

app.use(express.static(join(__dirname,".." , "public")));

// app.use(compression())
app.get("/image" , (req,res) =>{
  res.sendFile(join(__dirname , ".." ,"public","image.html"))
})
app.get("/Imagedata", getData)
app.post("/searchImages", serachData)

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', 'public', '404.html'));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', 'public', '500.html'));
});

app.set('port',process.env.PORT || 3000);
// app.use(router);
module.exports = app;