var express = require("express");
var router = express.Router();

// localhost:8000/pokemons/

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to CoderDex!");
});
const pokemonRouter = require("./pokemons.api.js");
router.use("/pokemons", pokemonRouter);

module.exports = router;
