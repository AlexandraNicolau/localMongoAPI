var express = require("express");
var router = express.Router();
const Player = require("../models/player");

router.get("/", async function(req, res, next) {
  try {
    const players = await Player.find({});
    if (players) {
      return res.json({
        success: true,
        data: { players }
      });
    }
  } catch {
    err => console.error(err);
  }
});

module.exports = router;
