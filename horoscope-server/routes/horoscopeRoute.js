const express = require('express');
const router = express.Router();
const axios = require('axios')
// const { v4: uuidv4 } = require('uuid'); 
const fs = require('fs'); 
const { response } = require('express');





router.get('/',(req, response)=>{
  console.log(req.query)
  axios.post(`https://aztro.sameerkumar.website?sign=${req.query.sign}&day=${req.query.day}`).then((res)=>{
    console.log(res.data)
  response.send(res.data)});
  

})


module.exports = router;