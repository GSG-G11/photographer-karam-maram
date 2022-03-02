const {join} = require("path");
const app = require("../app");

const handleImagePage = (req,res)=>{
  res.sendFile(join(__dirname , "..",".." ,"public","image.html"))
}
// app.get("/image" ,handleImagePage )
// const handleVideoPage = (req,res)=>{
//   res.sendFile(join(__dirname , "..","..","public","video.html"))
// }
module.exports ={
  handleImagePage,
  // handleVideoPage,
}