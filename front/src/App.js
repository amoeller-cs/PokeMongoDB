import React, { useState } from "react";
import "./App.css";


function App() {
  return (
    <div className="App" class="container">
      <h1><img src="./images/pika.png" 
          alt="Pikachu" 
          title="Pikachu"
          width="80"/>PokeMongoDB</h1>

      <p>Build Your Best Team!</p>

      <form>
        <label for="username">Username:</label><br/>
        <input type="text" id="username"/>
        <input type="submit" value="Submit" id="userSub"/>
      </form>

      <ul id="player"></ul>

      <form>
        <label for="search">Search for a pokemon to add to your team:</label>
        <br/>
        <input type="text" id="searchPokemon"/>
        <input type="submit" value="Search" id="pokeDBSearch"/>
      </form>

      <br/>
      <ul id="pokemon"></ul>

      <footer>Created by Alex Moeller and Ely Lam 2020 <img src="./images/pokeball-favicon.png" 
        alt="Pokeball" 
        title="Pokeball"
        width="30"/>
      </footer>
    </div>
  );
}

// Image from https://www.freeiconspng.com/img/45343


export default App;
