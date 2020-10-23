const express = require('express');
const router = express.Router();

const pokemon = require("../db/pokemon.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'PokeMongoDB' });
});

router.get('/pokemon', function(req, res, next) {
  res.send(JSON.stringify(pokemon));
});

module.exports = router;
