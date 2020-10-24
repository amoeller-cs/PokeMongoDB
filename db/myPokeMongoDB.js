const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

function PokemonDB() {
  const pokemonDB = {};

  pokemonDB.getPosts() {
    return [1, 2, 3];
  }

  return pokemonDB;
}

function TeamsDB() {
  const teamsDB = {};

  teamsDB.getPosts() {
    return [1, 2, 3];
  }

  return teamsDB;
}

module.exports = PokemonDB();
module.exports = TeamsDB();