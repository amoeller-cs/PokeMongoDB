const { MongoClient } = require("mongodb");

function MyDB() {
  const myDB = {};

  const uri = "mongodb://localhost:27017";

  myDB.getPokemon = async () => {
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db("pokedb"); // access pokemon db
    const players = db.collection("pokemon"); // access pokemon collection
    const query = { Pokemon: "Pikachu" }; // query
    return players.find(query).toArray();
  };
  return myDB;
}

module.exports = MyDB();
