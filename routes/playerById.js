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

router.delete("/:id", async function(req, res, next) {
  console.log(req.params.id);
  try {
    const player = await Player.findOneAndDelete({ ID: req.params.id });
    console.log(player);
    return res.json({
      success: true,
      data: { player }
    });
  } catch(e) {
    err => console.error(err);
  }
});

module.exports = router;
