const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Goods=require("./1/Goods")
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



mongoose.set('strictQuery', false)
mongoose.connect(
    process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    console.log("ok");
  }
);

const PORT = process.env.PORT || 3000;

app.listen(3000);

//https://messaging1.onrender.com/
