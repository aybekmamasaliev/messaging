const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config")

app.get("/", (req, res)=>{
    send("hello")
    console.log("it is working")
})

app.listen(3000)