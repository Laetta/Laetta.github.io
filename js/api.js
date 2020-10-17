$.getJSON("https://valtakausi.fi/api/players", function (players) {
  const list = document.querySelector(".playerlist");

  /* Testing players *
  players.push.apply(players, [
    "Raetta",
    "Asver",
    "Pertsa",
    "Rolli2005",
    "Notch",
    "Purrri",
    "Raetta",
    "Asver",
    "Pertsa",
    "Rolli2005",
    "Notch",
    "Purrri",
    "Raetta",
    "Asver",
    "Pertsa",
    "Rolli2005",
    "Notch",
    "Purrri",
  ]);
  /**/

  const len = players.length;
  const playercount = document.getElementById("playercount");
  const msg = len
    ? `Palvelimella pelaa ${len} pelaaja${len === 1 ? "" : "a"}:`
    : "Kukaan ei pelaa palvelimella juuri nyt.";
  playercount.innerHTML = msg;

  for (player of players) {
    const p = document.createElement("div");
    p.className = "player";
    p.innerHTML = player;

    const img = document.createElement("img");
    img.className = "player";
    img.src = `https://minotar.net/helm/${player}/16.png`;

    const row = document.createElement("li");
    row.className = "player";
    row.appendChild(img);
    row.appendChild(p);

    list.appendChild(row);
  }
});
