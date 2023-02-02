const express = require("express");
const order = express.Router();
const Orders = require("../model/Orders");

order.get("/", async (req, res) => {
  try {
    const ordering = await Orders.find();
    res.json(ordering);
  } catch (err) {
    res.json({ message: err });
  }
});

order.get("/length", async (req, res) => {
  try {
    const ordering =  (await Orders.find()).length;
    res.json(ordering);
  } catch (err) {
    res.json({ message: err });
  }
});

order.get("/:postId", async (req, res) => {
  try {
    const ordering = await Orders.findById(req.params.postId);
    res.json(ordering);
  } catch (err) {
    res.json({ message: err });
  }
});

order.delete("/:postId", async (req, res) => {
  try {
    const removedordering = await Orders.remove({ _id: req.params.postId });
    res.json(removedordering);
  } catch (err) {
    res.json({ message: err });
  }
});

order.patch("/:postId", async (req, res) => {
  const {
    name,
    address,
    phone,
    ccnum,
    expyear,
    cvv,
    orders,
    date,
    realdate,
    ordernumber,
    status
  } = req.body;
  try {
    const updatedordering = await Orders.findOneAndUpdate(
      {
        _id: req.params.postId,
      },
      {
        $set: req.body,
      }
    );
    res.json(updatedordering);
  } catch (err) {
    res.json({ message: err });
  }
});

order.post("/", async (req, res) => {
  const ordering = new Orders({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    ccnum: req.body.ccnum,
    expyear: req.body.expyear,
    cvv: req.body.cvv,
    orders: req.body.orders,
    date: req.body.date,
    realdate: req.body.realdate,
    totalsum: req.body.totalsum,
    ordernumber: req.body.ordernumber,
    status: req.body.status
  });
  try {
    const saveOrdering = await ordering.save();
    res.json(saveOrdering);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = order;