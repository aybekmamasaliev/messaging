const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routeUser = require("./routes/route");
const routeReviews = require("./routes/reviews");
const routeOrder = require("./routes/orders");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
app.use(bodyParser.json());
app.use(cors());
mongoose.set('strictQuery', false)
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    console.log("ok");
  }
);

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/user", routeUser);

app.use("/reviews", routeReviews);

app.use("/orders", routeOrder);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(3050, () => {
  console.log("connected");
});
