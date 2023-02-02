const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

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

mongoose.connect(
    process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    console.log("ok");
  }
);

const PORT = process.env.PORT || 3000;

app.listen("messaging1.onrender.com");

//https://messaging1.onrender.com/
