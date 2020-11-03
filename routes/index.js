const express = require("express");
const router = express.Router();

const myDB = require("../db/myPokeMongoDB.js"); //pokedb

router.get("/player", async (req, res) => {
  const player = await myDB.getPlayer("alex");
  res.json(player); // get player db
});

router.get("/pokemon", async (req, res) => {
  const pokemon = await myDB.getPokemon();
  res.json(pokemon); // get pokemon db
});

router.post("/updateTeam", async (req, res) => {
  let dex = req.body.position;
  dex = dex - 1;
  let pokemon = req.body.newPokemon;
  let user = req.body.user;
  myDB.setPokemon(user, "team", dex, pokemon);
  res.redirect("/"); // redirect to home page
});

router.get("/start", async (req, res) => {
  myDB.loadPokemon();
  const pokemon = await myDB.getPokemon();
  res.json(pokemon);
});

router.post("/newUser", async (req, res) => {
  let user = req.body.newUsername;
  myDB.createTeam(user);
  res.redirect("/"); // redirect to home page
});

router.post("/newUser", async (req, res) => {
  let user = req.body.newUsername;
  if(user != "") {
    myDB.createTeam(user);
  }
  res.redirect("/"); // redirect to home page
});

router.post("/deleteUser", async (req, res) => {
  let user = req.body.deletedUser;
  myDB.deletePlayer(user);
  res.redirect("/"); // redirect to home page
});

module.exports = router;
