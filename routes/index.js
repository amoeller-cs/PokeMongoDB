const express = require('express');
const router = express.Router();

const pokemon = require("../db/pokemon.json");
const team = [
  {
    "pokemon1" : "",
    "pokemon2" : "",
    "pokemon3" : "",
    "pokemon4" : "",
    "pokemon5" : "",
    "pokemon6" : "",
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'PokeMongoDB' });
});

router.get('/pokemon', function(req, res, next) {
  res.send(JSON.stringify(pokemon));
});

module.exports = router;
