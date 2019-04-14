var express = require("express");
var router = express.Router();
const Player = require("../models/player");

router.get("/:id", async function(req, res, next) {
  console.log(req.params.id);
  try {
    const player = await Player.findOne({ ID: req.params.id });
    console.log(player);
    return res.json({
      success: true,
      data: { player }
    });
  } catch (e) {
    err => console.error(err);
  }
});

router.get("/", async function(req, res, next) {
  try {
    const players = await Player.find({});
    if (players) {
      return res.json({
        success: true,
        data: { players }
      });
    }
  } catch (e) {
    err => console.error(err);
  }
});

router.post("/", async function(req, res, next) {
  console.log(req.body);

  try {
    const player = new Player(req.body);
    console.log(player);
    const newPlayer = await player.save();
    return res.json({
      success: true,
      message: "new player has been created",
      data: { newPlayer }
    });
  } catch (e) {
    err => console.error(err);
  }
});

router.delete("/:id", async function(req, res, next) {
  console.log(req.params.id);
  try {
    const player = await Player.findOneAndDelete({ ID: req.params.id });
    console.log(player);
    return res.json({
      success: true,
      data: { player }
    });
  } catch (e) {
    err => console.error(err);
  }
});

module.exports = router;
