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

router.post("/newFav", async (req, res) => {
  let pokemon = req.body.newPokemon;
  let user = req.body.user;
  myDB.addFavorites(user, pokemon);
  res.redirect("/"); // redirect to home page
});

router.post("/removeFav", async (req, res) => {
  let pokemon = req.body.removeMon;
  let user = req.body.player;
  await myDB.removeFavorite(user, pokemon);
  res.redirect("/"); // redirect to home page
});

router.get("/start", async (req, res) => {
  myDB.loadPokemon();
  const pokemon = await myDB.getPokemon();
  res.json(pokemon);
});

router.post("/newUser", async (req, res) => {
  let user = req.body.newUsername;
  if (user != "") {
    await myDB.createTeam(user);
    await myDB.createFavorites(user);
  }
  res.redirect("/"); // redirect to home page
});

router.post("/deleteUser", async (req, res) => {
  let user = req.body.deletedUser;
  myDB.deletePlayer(user);
  res.redirect("/"); // redirect to home page
});

router.get("/favorites", async (req, res) => {
  const favs = await myDB.getFavorites();
  res.json(favs); // redirect to home page
});

module.exports = router;
