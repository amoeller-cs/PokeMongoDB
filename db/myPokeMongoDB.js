const { MongoClient } = require("mongodb");

function MyDB() {
  const myDB = {};

  const uri = "mongodb://localhost:27017";

  myDB.getPlayer = async (player) => {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("pokedb"); // access pokemon db
    const players = db.collection("players"); // access players collection
    const query = { name: player };
    const result = await players.find(query).toArray(); // wait for query result
    if (result == undefined || result.length == 0){ // if no entry for user
      var newEntry = { name: player };
      players.insertOne(newEntry); // create new entry in db
    }
    return players.find(query).toArray(); // return the players file
  };

  myDB.setPokemon = async (player, team, dex, newPokemon) => {
    const tempString = team + "." + dex;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("pokedb"); // access pokemon db
    const players = db.collection("players"); // access players collection
    players.updateOne({ name: player }, { $set: { [tempString]: newPokemon } }); // update the pokemon
    return;
  };

  myDB.getPokemon = async (pokeDBSearch) => {
    console.log(`getting pokemon: ${pokeDBSearch}`);
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db("pokedb"); // access pokemon db
    const pokemon = db.collection("pokemon"); // access pokemon collection
    const query = { Pokemon: pokeDBSearch };
    const result = await pokemon.find(query).toArray(); // wait for query result
    if (result == undefined || result.length == 0){ // if no entry for pokemon or pokemon does not exist
      console.log(`could not find ${pokeDBSearch}`);
    }
    return pokemon.find(query).toArray();
  };

  return myDB;
}

module.exports = MyDB();
