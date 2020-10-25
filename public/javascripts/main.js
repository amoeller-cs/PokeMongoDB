const ulPokemon = document.querySelector("#pokemon")
const ulPlayers = document.querySelector("#player")
const divErr = document.querySelector("#err");

function populatePlayers(player) {
  for (let t of player) {
    const liT = document.createElement("li");

    liT.innerHTML = `Player: <br> ${t}`

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
    const liP = document.createElement("li");

    while (p.Number.length < 3) {
      const imgNumber = ['0', p.Number.toString()].join();
      console.log(imgNumber);
    }

    liP.innerHTML = `${p.Pokemon} (#${p.Number}) <br>
    <img src="./images/${p.Number}.png" 
      alt="${p.Pokemon} (#${p.Number}) Sprite" 
      title="${p.Pokemon} (#${p.Number})"> <br>
    HP: ${p.HP} <br>
    ATK: ${p.Atk} <br>
    DEF: ${p.Def} <br>
    Special Atk: ${p.SpA} <br>
    Special Defense: ${p.SpD} <br>
    Speed: ${p.Spe} <br>
    Type: ${p.Type_I} <br>
    Type II: ${p.Type_II} <br><br>
    <input type="submit" value="Add this pokemon" id="pokeSelection">`;

    ulPokemon.appendChild(liP);
  }
}

fetch("/pokemon")
  .then((res) => res.json())
  .then(populatePokemon)
  .catch((err) => {
    divErr.textContent = err.message;
    divErr.style.display = "block";
  });