import React, { useState } from "react";
import PropTypes from "prop-types";

function Player(props) {
  const [player, setPlayer] = useState("");

  const renderTeams = () => {
  	const teams = props.player;
  	console.log(teams);
  	if (teams.length === 0) return null;
  	console.log("getting team in player");
  	let poke = teams[0].team[0]; 
  	let poke1 = teams[0].team[1];
  	let poke2 = teams[0].team[2];
  	let poke3 = teams[0].team[3];
  	let poke4 = teams[0].team[4];
  	let poke5 = teams[0].team[5];
  	return (<div>
	  		<li key={poke}>
						(#{poke}) <br/>
	       <img src={`./images/${poke}.png`} 
	         alt={`(#${poke}) Sprite`} />
	       <br/>
	       <br/>
	     </li>
	     <li key={poke1}>
						(#{poke1}) <br/>
	       <img src={`./images/${poke1}.png`} 
	         alt={`(#${poke1}) Sprite`} />
	       <br/>
	       <br/>
	     </li>
	     <li key={poke2}>
						(#{poke2}) <br/>
	       <img src={`./images/${poke2}.png`} 
	         alt={`(#${poke2}) Sprite`} />       
         <br/>
	       <br/>
	      </li>
	      <li key={poke3}>
							(#{poke3}) <br/>
	        <img src={`./images/${poke3}.png`} 
	          alt={`(#${poke3}) Sprite`} />
	        <br/>
	        <br/>
	      </li>
	      <li key={poke4}>
							(#{poke4}) <br/>
	        <img src={`./images/${poke4}.png`} 
	          alt={`(#${poke4}) Sprite`} />
	        <br/>
	        <br/>
	      </li>
	      <li key={poke5}>
							(#{poke5}) <br/>
	        <img src={`./images/${poke5}.png`} 
	          alt={`(#${poke5}) Sprite`} />
	        <br/>
	        <br/>
	      </li>
      </div>);
  };

  return (
    <div>
      <label htmlFor="player">
        Enter your username: {" "}
      <input type="text" value={player} onChange={(evt) =>
      	setPlayer(evt.target.value)}/>
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
