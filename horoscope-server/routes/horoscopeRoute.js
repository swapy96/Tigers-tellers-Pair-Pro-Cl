const express = require('express');
const router = express.Router();
const axios = require('axios')
// const { v4: uuidv4 } = require('uuid'); 
const fs = require('fs'); 
const { response } = require('express');


const sign = "aries"
const day = "today"

const url = `https://aztro.sameerkumar.website?sign=${sign}&day=${day}`


router.get('/',(req, response)=>{
  axios.post(url).then((res)=>{console.log(res.data)
  response.send(res.data)});

})


module.exports = router;