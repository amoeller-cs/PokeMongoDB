const { MongoClient } = require("mongodb");

function MyDB() {
  const myDB = {};

  const uri = "mongodb://localhost:27017";

  myDB.getPokemon = async () => {
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db("pokedb"); // access pokemon db
    const pokemon = db.collection("pokemon"); // access pokemon collection
    const query = { };
    return pokemon.find(query).toArray();
  };

  myDB.getPlayer = async (player) => {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("pokedb"); // access pokemon db
    const players = db.collection("players");
    const query = { name: player };
    return players.find(query).toArray();
  };

  return myDB;
}

module.exports = MyDB();
