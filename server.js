const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config")

app.get("/", (req, res)=>{
    res.send("hello")
    console.log("it is working")
})

const PORT=process.env.PORT || 3000

app.listen(PORT)