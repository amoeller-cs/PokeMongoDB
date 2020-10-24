const express = require('express');
const router = express.Router();
const myDB = require("../db/myPokeMongoDB.js");

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

router.get('/player', async function(req, res, next) {
  const player = await myDB.getPlayer("alex");
  res.json(player);
});

router.get('/pokemon', async function(req, res, next) {
  const pokemon = await myDB.getPokemon();
  //res.send(JSON.stringify(pokemon));
  res.json(pokemon);
});

module.exports = router;
