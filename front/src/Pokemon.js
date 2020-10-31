import React, { useState } from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  const [search, setPokemon] = useState("");

  const renderPokemon = () => {
    return props.pokemon
      .filter((p) => p.Pokemon && p.Pokemon.startsWith(search))
      .map((p) => (
        <li key={p._id}>
          {p.Pokemon} (#{p._id}) <br/>
          <img src={"../front/public/images/{p._id}.png"} 
            alt={"{p.Pokemon} (#{p._id}) Sprite"} 
            title={"{p.Pokemon} (#{p._id})"}/> <br/>
          HP: {p.HP} <br/>
          ATK: {p.Atk} <br/>
          DEF: {p.Def} <br/>
          Special Atk: {p.SpA} <br/>
          Special Defense: {p.SpD} <br/>
          Speed: {p.Spe} <br/>
          Type: {p.Type_1} <br/>
          Type II: {p.Type_2} <br/><br/>
          <input type="submit" value="Add this pokemon" id="pokeSelection"/>
        </li>
      ));
  };
  
  console.log("rendering Pokemon", search);

  return (
    <div>
      <label htmlFor="search">
        Search for a pokemon to add to your team: {" "}
      <input type="text" value={search} onChange={(evt) => setPokemon(evt.target.value)}/>
      </label><br/>
  
      <br/>
      <ul>{renderPokemon()}</ul>
    </div>
  );
}

Pokemon.propTypes ={
  pokemon: PropTypes.array,
};

export default Pokemon;