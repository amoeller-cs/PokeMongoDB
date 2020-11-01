import React, { useState } from "react";
import PropTypes from "prop-types";

function Player(props) {
  const [player, setPlayer] = useState("");

  const renderTeams = () => {
  	const teams = props.player;
  	console.log(teams);
  	let toReturn = "";
  	if (teams.length === 0) return null;
  	
  	for (let y = 0; y < 6; y++){
  		console.log("getting team in player");
  		console.log(teams[0].team[y]);
  		let poke = teams[0].team[y];
  		toReturn += <li key={poke}>
						(#{poke}) <br/>
        <img src={`./images/${poke}.png`} 
          alt={`(#${poke}) Sprite`} />
        <input type="submit" value="Switch this pokemon" id="pokeToSwitch"/>
        <br/>
        <br/>
      </li>
  	}
  	console.log(toReturn);
  	return toReturn;
    /*teams[x][y]return props.player
      .map((p) => (
        <li key={p._id}>
						 (#{p._id}) <br/>
          <img src={`./images/${p._id}.png`} 
            alt={`(#${p._id}) Sprite`} />
          <input type="submit" value="Switch this pokemon" id="pokeToSwitch"/>
          <br/>
          <br/>
        </li>
      ));*/
  };
  

  return (
    <div>
      <label htmlFor="player">
        Enter your username: {" "}
      <input type="text" value={player} onChange={(evt) => setPlayer(evt.target.value)}/>
      </label><br/>
  
      <br/>
      <ul>{renderTeams()}</ul>
    </div>
  );
}

Player.propTypes ={
  player: PropTypes.array,
};

export default Player;