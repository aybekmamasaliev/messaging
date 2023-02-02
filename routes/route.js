const express = require("express");
const route = express.Router();
const Goods = require("../model/Goods");

route.get("/", async (req, res) => {
  try {
    const goods = await Goods.find();
    res.json(goods);
  } catch (err) {
    res.json({ message: err });
  }
});

route.get("/:postId", async (req, res) => {
  try {
    const goods = await Goods.findById(req.params.postId);
    res.json(goods);
  } catch (err) {
    res.json({ message: err });
  }
});

route.delete("/:postId", async (req, res) => {
  try {
    const removedgoods = await Goods.remove({ _id: req.params.postId });
    res.json(removedgoods);
  } catch (err) {
    res.json({ message: err });
  }
});

route.patch("/:postId", async (req, res) => {
  console.log({ fuck: req.body, you: req.params });
  const { name, price, img, description } = req.body;
  try {
    const updatedgood = await Goods.findOneAndUpdate(
      {
        _id: req.params.postId,
      },
      {
        $set: req.body
      }
    );
    res.json(updatedgood);
  } catch (err) {
    res.json({ message: err });
  }
});

route.post("/", async (req, res) => {
  const goods = new Goods({
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
    description: req.body.description,
    count: req.body.count,
    type: req.body.type,
  });
  try {
    const saveGood = await goods.save();
    res.json(saveGood);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = route;
