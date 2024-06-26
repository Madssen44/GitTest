require('dotenv').config()
const { json } = require('body-parser');
let express = require('express');
let app = express();
absolutePathIndex = __dirname + '/views/index.html'
absolutePathPublic= __dirname + '/public'
const salute = {
  "message":"Hello json"
}
console.log("Hello World");
app.get ('/',(req,res)=>{
  res.sendFile(absolutePathIndex)
})
app.use('/public',express.static(absolutePathPublic))
app.get('/json',(req,res)=>{
  if (process.env.MESSAGE_STYLE=='uppercase'){
    salute.message = salute.message.toUpperCase()
    res.json(salute)
  } else {res.json(salute)}
})




































 module.exports = app;
