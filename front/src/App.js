import React, { useState, useEffect } from "react";
import "./App.css";

import Pokemon from "./Pokemon.js";
import Player from "./Player.js";
import User from "./User.js";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);
  const [player, setPlayer] = useState([]);
  const [showTeam, setShowTeam] = useState(false);
  const [user, setUser] = useState("");
  const [showUserEnter, setShowUserEnter] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const _pokemon = await fetch("/pokemon").then((res) => res.json());
        setPokemon(_pokemon);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPokemon();
  }, []); // Only run the first time

  useEffect(() => {
    const getPlayer = async () => {
      console.log("getting player");
      try {
        const _player = await fetch("/player").then((res) => res.json());
        setPlayer(_player);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPlayer();
  }, []);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  function handleChange(username) {
    console.log(username);
    setUser(username);
    console.log("app: user changed");
    setShowTeam(true);
    setShowPokemon(false);
    setShowUserEnter(false);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="./pika.png" alt="Pikachu" title="Pikachu" width="60" />
          PokeMongoDB
        </a>
        <a
          className="nav-item active nav-link"
          href="teamEdit"
          onClick={(evt) => {
            evt.preventDefault();
            setShowTeam(true);
            setShowPokemon(false);
            setShowUserEnter(false);
          }}
        >
          Team Page<span className="sr-only">(current)</span>
        </a>
        <a
          className="nav-item active nav-link"
          href="pokeList"
          onClick={(evt) => {
            evt.preventDefault();
            setShowPokemon(true);
            setShowTeam(false);
            setShowUserEnter(false);
          }}
        >
          Pokemon List<span className="sr-only">(current)</span>
        </a>
        <a
          className="nav-item active mavbar-nav nav-link navbar-right"
          href="userlogin"
          onClick={(evt) => {
            evt.preventDefault();
            setShowTeam(false);
            setShowPokemon(false);
            setShowUserEnter(true);
          }}
        >
          Change User: {user}
          <span className="sr-only">(current)</span>
        </a>
      </nav>
      <div class="container text-left">
        <h1>Build Your Best Team!</h1>
        {showUserEnter ? (
          <User handleChange={handleChange} player={player}></User>
        ) : (
          ""
        )}
        {showPokemon ? (
          <Pokemon player={player} pokemon={pokemon} user={user}></Pokemon>
        ) : (
          ""
        )}
        {showTeam ? (
          <Player player={player} pokemon={pokemon} user={user}></Player>
        ) : (
          ""
        )}
        <br />
        <footer>
          Created by Alex Moeller and Ely Lam 2020{" "}
          <img
            src="./pokeball-favicon.png"
            alt="Pokeball"
            title="Pokeball"
            width="30"
          />
        </footer>
      </div>
    </div>
  );
}

// Image from https://www.freeiconspng.com/img/45343

export default App;
