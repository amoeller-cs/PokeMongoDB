const express = require('express');
const router = express.Router();

const pokemonDB = require("../db/myPokeMongoDB.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PokeMongoDB' });
});

module.exports = router;
