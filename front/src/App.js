import React, { useState, useEffect } from "react";
import "./App.css";

import Pokemon from "./Pokemon.js"
import Player from "./Player.js"


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);
  const [player, setPlayer] = useState([]);
  // const [team, setTeam] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      console.log("getting pokemon");
      try {
        const _pokemon = await fetch("/pokemon").then((res) => res.json());
        setPokemon(_pokemon);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPokemon();
  }, []); // Only run the first time

  // useEffect(() => {
  //   const getTeam = async () => {
  //     console.log("getting teams");
  //     try {
  //       const _team = await fetch("/getTeam").then((res) => res.json());
  //       console.log("got teams", team);
  //       setPokemon(_team);
  //     } catch (err) {
  //       console.log("error ", err);
  //     }
  //   };
  //   getTeam();
  // }, []); // Only run the first time
  
  useEffect(() => {
    const getPlayer = async () => {
      console.log("getting player");
      try {
        const _player = await fetch("/player").then((res) => res.json());
        console.log("got player", player);
        setPlayer(_player);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPlayer();
  }, []);

  // console.log("rendering app", pokemon);
  // console.log("rendering teams", team);

  return (
    <div className="App container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src="./pika.png" 
              alt="Pikachu" 
              title="Pikachu"
              width="60"/>
            PokeMongoDB
          </a>
          <a
            className="nav-item active nav-link"
            href="about"
            onClick={(evt) => {
              evt.preventDefault();
              //setShowUser(true);
              setShowPokemon(false);
            }}
          >
            About PokeMongoDB
          </a>
          <a
            className="nav-item active nav-link"
            href="teamEdit"
            onClick={(evt) => {
              evt.preventDefault();
              setShowPokemon(true);
            }}
          >
            Edit Team<span className="sr-only">(current)</span>
          </a>
        </nav>
      </div>
      <div className="row" id="motto">
        <p>Build Your Best Team!</p>
      </div>
      <div className="row" id="entry">
        {showPokemon ? <Pokemon pokemon={pokemon}></Pokemon> : "Enter a username and begin creating your team!"}
        <Player player={player}></Player>
      </div>
      <br/>
      <div className="row">
        <footer>Created by Alex Moeller and Ely Lam 2020 <img src="./pokeball-favicon.png" 
          alt="Pokeball" 
          title="Pokeball"
          width="30"/>
        </footer>
      </div>
    </div>
  );
}

// Image from https://www.freeiconspng.com/img/45343


export default App;
