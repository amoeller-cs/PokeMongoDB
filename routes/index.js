const express = require('express');
const router = express.Router();


const myDB = require("../db/myPokeMongoDB.js"); //pokedb
// const myImgs = require("./imgs"); //pokedb

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({ title: 'PokeMongoDB' });
});

// router.get('/imgs', (req, res, next) => {
//   const player = await myImgs.getImage();
//   res.send(imgs);
// });

router.get('/player', async (req, res, next) => {
  const player = await myDB.getPlayer("alex");
  res.json(player);
});

// const pokemonList = ["Squirtle", "Pikachu"];

router.get('/pokemon', async (req, res, next) => {
  const pokemon = await myDB.getPokemon("Pikachu");
  res.json(pokemon);
});

router.get('/test', async function(req, res, next) {
  myDB.setPokemon("alex", "newTeam", 0, "100");
  const player = await myDB.getPlayer("alex");
  res.json(player);
});

router.get('/start', async function(req, res, next) {
  myDB.loadPokemon();
  const pokemon = await myDB.getPokemon("Squirtle");
  res.json(pokemon);
});

router.get('/newTeam', async function(req, res, next) {
  myDB.createTeam("alex", "newTeam");
  const player = await myDB.getPlayer("alex");
  res.json(player);
});

module.exports = router;
