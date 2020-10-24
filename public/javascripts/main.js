const ulPlayerTeams = document.querySelector("#player_teams")
const divErr = document.querySelector("#err");

function populateTeams(player_teams) {
  for (let t of player_teams) {
    const liT = document.createElement("li");

    liT.innerHTML = `Team 1: <br> ${t.pokemon1}`

    ulPlayerTeams.appendChild(liT);
  }
}

