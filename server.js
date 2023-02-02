const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Goods=require("../deploy express/1/Goods")
const Orders=require("../deploy express/1/Orders")
const Rews=require("../deploy express/1/Rews")
const cors = require("cors");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
//   res.send("hello");
    try {
      const goods = await Goods.find();
      res.json(goods);
      console.log("it is working");
    } catch (err) {
      res.json({ message: err });
    }
  });

  // app.get("/user", async(req,res)=>{
  //     try{
  //       const user = 
  //     }
  //     catch{}
  // })


mongoose.set('strictQuery', false)
mongoose.connect(
    process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    console.log("ok");
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT);

//https://messaging1.onrender.com/
