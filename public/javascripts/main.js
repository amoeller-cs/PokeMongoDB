/* global React, ReactDOM */

const ulPokemon = document.querySelector("#pokemon")
const ulPlayers = document.querySelector("#player")
const divErr = document.querySelector("#err");

function populatePlayers(player) {
  for (let t of player) {
    const liT = document.createElement("li");

    liT.innerHTML = `Player: ${t.name}<br>
    ${t.newTeam[0]}<br>
    ${t.newTeam[1]}<br>
    ${t.newTeam[2]}<br>
    ${t.newTeam[3]}<br>
    ${t.newTeam[4]}<br>
    ${t.newTeam[5]}<br>`;

    ulPlayers.appendChild(liT);
  }
}

fetch("/player")
  .then((res) => res.json())
  .then(populatePlayers)
  .catch((err) => {
    divErr.textContent = err.message;
    divErr.style.display = "block";
  });


function populatePokemon(pokemon) {
  for (let p of pokemon) {
    // const divPs = document.createElement("div");
    const liP = document.createElement("li");
    // const divPe = document.createElement("div");

    // divPs.innerHTML = `<div class="col-5">`;

    liP.innerHTML = `${p.Pokemon} (#${p._id}) <br>
    <img src="./images/${p._id}.png" 
      alt="${p.Pokemon} (#${p._id}) Sprite" 
      title="${p.Pokemon} (#${p._id})"> <br>
    HP: ${p.HP} <br>
    ATK: ${p.Atk} <br>
    DEF: ${p.Def} <br>
    Special Atk: ${p.SpA} <br>
    Special Defense: ${p.SpD} <br>
    Speed: ${p.Spe} <br>
    Type: ${p.Type_1} <br>
    Type II: ${p.Type_2} <br><br>
    <input type="submit" value="Add this pokemon" id="pokeSelection">`;

    // divPs.innerHTML = `</div>`;

    // ulPokemon.appendChild(divPs);
    ulPokemon.appendChild(liP);
    // ulPokemon.appendChild(divPe);
  }
}

fetch("/pokemon")
  .then((res) => res.json())
  .then(populatePokemon)
  .catch((err) => {
    divErr.textContent = err.message;
    divErr.style.display = "block";
  });

// const e = React.createElement;

// function MyComp() {
//   const [search, setSearch] = React.useState("");
//   const btn = e("button", {onClick: () => setSearch(search)}, "Search");
//   const output = e("output", {}, `Searching for: ${search}`);
//   const div = e("div", {}, btn);
//   return div;
// }
// const page = document.querySelector("#page");

// ReactDOM.render(e(MyComp, page);
