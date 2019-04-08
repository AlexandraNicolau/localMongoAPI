var express = require("express");
var router = express.Router();
const Player = require("../models/player");

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
  } catch {
    err => console.error(err);
  }
});

module.exports = router;
