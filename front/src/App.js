import React, { useState, useEffect } from "react";
import "./App.css";

import Pokemon from "./Pokemon.js"


function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      console.log("getting pokemon");
      try {
        const _pokemon = await fetch("/pokemon").then((res) => res.json());
        console.log("got pokemon", pokemon);
        setPokemon(_pokemon);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPokemon();
  }, []); // Only run the first time

  console.log("rendering app", pokemon);

  return (
    <div className="App" className="container">
      <h1><img src="./pika.png" 
          alt="Pikachu" 
          title="Pikachu"
          width="80"/>PokeMongoDB</h1>

      <p>Build Your Best Team!</p>

      <Pokemon pokemon={pokemon}></Pokemon>

      <footer>Created by Alex Moeller and Ely Lam 2020 <img src="./pokeball-favicon.png" 
        alt="Pokeball" 
        title="Pokeball"
        width="30"/>
      </footer>
    </div>
  );
}

// Image from https://www.freeiconspng.com/img/45343


export default App;
