var express = require("express");
var router = express.Router();

const pokemonDB = require("../db/myPokeMongoDB.js");
// [
//   {

//   }
// ];

/* GET home page. */
router.get("/pokemonList", async (req, res, next) => {
  const pokemon = await pokemonDB.getDB();
  res.render("index", { title: "Express" });
});

module.exports = router;
