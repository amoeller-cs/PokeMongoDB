import PropTypes from "prop-types";
import "./styles/Player.css";

function Player(props) {
  const renderTeams = () => {
    const teams = props.player.filter((t) =>
      t.name.toLowerCase().startsWith(props.user)
    );
    console.log(teams);
    if (teams.length === 0) return null;
    let poke = teams[0].team[0];
    let poke1 = teams[0].team[1];
    let poke2 = teams[0].team[2];
    let poke3 = teams[0].team[3];
    let poke4 = teams[0].team[4];
    let poke5 = teams[0].team[5];
    return (
      <div>
        <li key={poke}>
          <img src={`./images/${poke}.png`} alt={`(#${poke}) Sprite`} />
          <br />
          <br />
        </li>
        <li key={poke1}>
          <img src={`./images/${poke1}.png`} alt={`(#${poke1}) Sprite`} />
          <br />
          <br />
        </li>
        <li key={poke2}>
          <img src={`./images/${poke2}.png`} alt={`(#${poke2}) Sprite`} />
          <br />
          <br />
        </li>
        <li key={poke3}>
          <img src={`./images/${poke3}.png`} alt={`(#${poke3}) Sprite`} />
          <br />
          <br />
        </li>
        <li key={poke4}>
          <img src={`./images/${poke4}.png`} alt={`(#${poke4}) Sprite`} />
          <br />
          <br />
        </li>
        <li key={poke5}>
          <img src={`./images/${poke5}.png`} alt={`(#${poke5}) Sprite`} />
          <br />
          <br />
        </li>
      </div>
    );
  };

  const renderStats = () => {
    const teams = props.player.filter((t) =>
      t.name.toLowerCase().startsWith(props.user)
    );
    console.log("getting teams", teams);
    if (teams.length === 0) return null;
    console.log("getting team in player");
    let poke = teams[0].team[0];
    let poke1 = teams[0].team[1];
    let poke2 = teams[0].team[2];
    let poke3 = teams[0].team[3];
    let poke4 = teams[0].team[4];
    let poke5 = teams[0].team[5];
    const pokeArray = [poke, poke1, poke2, poke3, poke4, poke5];
    console.log(pokeArray);
    let statMap = new Map();
    statMap.set("Bug", 0);
    statMap.set("Dragon", 0);
    statMap.set("Electric", 0);
    statMap.set("Fighting", 0);
    statMap.set("Flying", 0);
    statMap.set("Fire", 0);
    statMap.set("Ghost", 0);
    statMap.set("Grass", 0);
    statMap.set("Ground", 0);
    statMap.set("Ice", 0);
    statMap.set("Normal", 0);
    statMap.set("Poison", 0);
    statMap.set("Psychic", 0);
    statMap.set("Rock", 0);
    statMap.set("Steel", 0);
    statMap.set("Water", 0);
    for (const poke of pokeArray) {
      console.log("getting stats of:", poke);
      let test = parseInt(poke) - 1;
      if (props.pokemon[test] === undefined) {
        return null;
      }
      let type_1 = props.pokemon[test].Type_1;
      console.log(type_1);
      let type_2 = props.pokemon[test].Type_2;
      statMap.set(type_1, statMap.get(type_1) + 1);
      if (type_2 !== "") {
        statMap.set(type_2, statMap.get(type_2) + 1);
      }
    }
    return (
      <div>
        <li>Bug : {statMap.get("Bug")}</li>
        <li>Dragon : {statMap.get("Dragon")}</li>
        <li>Electric : {statMap.get("Electric")}</li>
        <li>Fighting : {statMap.get("Fighting")}</li>
        <li>Flying : {statMap.get("Flying")}</li>
        <li>Fire : {statMap.get("Fire")}</li>
        <li>Ghost : {statMap.get("Ghost")}</li>
        <li>Grass : {statMap.get("Grass")}</li>
        <li>Ground : {statMap.get("Ground")}</li>
        <li>Ice : {statMap.get("Ice")}</li>
        <li>Normal : {statMap.get("Normal")}</li>
        <li>Poison : {statMap.get("Poison")}</li>
        <li>Psychic : {statMap.get("Psychic")}</li>
        <li>Rock : {statMap.get("Rock")}</li>
        <li>Steel : {statMap.get("Steel")}</li>
        <li>Water : {statMap.get("Water")}</li>
      </div>
    );
  };

  return (
    <div>
      <br />
      <ol>{renderTeams()}</ol>
      <br />
      <ul>{renderStats()}</ul>
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.array,
};

export default Player;
