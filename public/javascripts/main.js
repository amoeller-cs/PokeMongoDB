const ulPokemon = document.querySelector("#pokemon")
const ulPlayers = document.querySelector("#player")
const divErr = document.querySelector("#err");

function populatePokemon(pokemon) {
  for (let p of pokemon) {
    const liP = document.createElement("li");

    liP.innerHTML = `${p.Pokemon}: <br>
    HP: ${p.HP} <br>
    ATK: ${p.Atk} <br>
    DEF: ${p.Def} <br>
    Special Atk: ${p.SpA} <br>
    Special Defense: ${p.SpD} <br>
    Type: ${p.Type_I} <br>`

    ulPokemon.appendChild(liP);
  }
}

function populatePlayers(player) {
  for (let t of player) {
    const liT = document.createElement("li");

    liT.innerHTML = `Player: <br> ${t}`

    ulPlayers.appendChild(liT);
  }
}


fetch("/pokemon")
  .then((res) => res.json())
  .then(populatePokemon)
  .catch((err) => {
    divErr.textContent = err.message;
    divErr.style.display = "block";
  });

fetch("/player")
  .then((res) => res.json())
  .then(populatePlayers)
  .catch((err) => {
    divErr.textContent = err.message;
    divErr.style.display = "block";
  });