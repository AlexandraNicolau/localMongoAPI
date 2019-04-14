const express = require("express");
const router = express.Router();
const Player = require("../models/player");

router.get("/:ID", async (req, res) => {
  try {
    const { ID } = req.params;
    const player = await Player.findOne({ ID });
    // OR JUST :-
    // const player = await Player.findOne(req.params);
    console.log(player);
    return res.json({
      success: true,
      data: { player }
    });
  } catch (e) {
    err => console.error(err);
  }
});

router.get("/", async (req, res) => {
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

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const player = new Player(req.body);
    console.log(player);
    const newPlayer = await player.save();
    // OR - this is fine but you can also do
    // const player = Player.create(req.body)
    return res.json({
      success: true,
      message: "new player has been created",
      data: { newPlayer }
    });
  } catch (e) {
    err => console.error(err);
  }
});

router.delete("/:ID", async (req, res) => {
  try {
    const { ID } = req.params;
    const player = await Player.findOneAndDelete({ ID });
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
