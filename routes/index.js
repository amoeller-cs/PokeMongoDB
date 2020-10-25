const express = require('express');
const router = express.Router();


const myDB = require("../db/myPokeMongoDB.js"); //pokedb


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'PokeMongoDB' });
});

router.get('/player', async (req, res, next) => {
  const player = await myDB.getPlayer("alex");
  res.json(player);
});

router.get('/pokemon', async (req, res, next) => {
  const pokemon = await myDB.getPokemon("Pikachu");
  //res.send(JSON.stringify(pokemon));
  res.json(pokemon);
});

router.get('/test', async function(req, res, next) {
  myDB.setPokemon("alex", "team1", 0, 100);
  const player = await myDB.getPlayer("alex");
  res.json(player);
});

module.exports = router;
