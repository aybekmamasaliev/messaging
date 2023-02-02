const express = require("express");
const routeRew = express.Router();
const Rews = require("../model/Rews");

routeRew.get("/", async (req, res) => {
  try {
    const revs = await Rews.find();
    res.json(revs);
  } catch (err) {
    res.json({ message: err });
  }
});

routeRew.get("/:postId", async (req, res) => {
  try {
    const revs = await Rews.findById(req.params.postId);
    res.json(revs);
  } catch (err) {
    res.json({ message: err });
  }
});

routeRew.delete("/:postId", async (req, res) => {
  try {
    const removedgoods = await Rews.remove({ _id: req.params.postId });
    res.json(removedgoods);
  } catch (err) {
    res.json({ message: err });
  }
});

routeRew.patch("/:postId", async (req, res) => {
  try {
    const updatedrew = await Rews.updateOne(
      {
        _id: req.params.postId,
      },
      {
        $set: { name: req.body.name },
        $set: { description: req.body.description },
        $set: { date: req.body.date },
        $set: { type: req.body.type },
      }
    );
    res.json(updatedrew);
  } catch (err) {
    res.json({ message: err });
  }
});



routeRew.post("/", async (req, res) => {
  const revs = new Rews({
    name: req.body.name,
    description: req.body.description,
    date:req.body.date,
    type: req.body.type
  });
  try {
    const saveRews = await revs.save();
    res.json(saveRews);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = routeRew;
