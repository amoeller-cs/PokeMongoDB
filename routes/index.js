const express = require('express');
const router = express.Router();

const myDB = require("../db/myPokeMongoDB.js"); //pokedb

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({ title: 'PokeMongoDB Create a Team!' });
});

router.get('/player', async (req, res, next) => {
  const player = await myDB.getPlayer("alex");
  res.json(player); // get player db; default "alex"
});

router.get('/pokemon', async (req, res, next) => {
  const pokemon = await myDB.getPokemon();
  res.json(pokemon); // get pokemon db
});

router.post('/updateTeam', async (req, res, next) => {
  let dex = req.body.position;
  dex = dex - 1;
  let pokemon = req.body.newPokemon;
  let name = req.body.name;
  let user = req.body.user;
  myDB.setPokemon(user, "team", dex, pokemon);
  const player = await myDB.getPlayer();
  res.redirect("/"); // redirect to home page
});

router.get('/start', async (req, res, next) => {
  myDB.loadPokemon();
  const pokemon = await myDB.getPokemon("Squirtle");
  res.json(pokemon);
});

router.post('/newUser', async (req, res, next) => {
  let user = req.body.newUsername;
  myDB.createTeam(user);
  const player = await myDB.getPlayer(user);
  res.redirect("/"); // redirect to home page
});

module.exports = router;
