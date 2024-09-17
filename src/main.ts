import { getRounds } from "./api/rounds/get-rounds";
import { IRound } from "./types/rounds";

let currentPage = 1;
let allRounds: IRound[] = [];

const prevButton = document.getElementById("prev-page") as HTMLButtonElement;
const nextButton = document.getElementById("next-page") as HTMLButtonElement;
const currentRoundHeader = document.getElementById(
  "current-round"
) as HTMLElement;
const gamesContainer = document.getElementById(
  "games-container"
) as HTMLElement;

async function displayRounds() {
  try {
    gamesContainer.innerHTML = "<p>Carregando...</p>";
    allRounds = await getRounds();
    renderPage(currentPage);
  } catch (error) {
    console.error("Erro ao buscar as rodadas:", error);
    gamesContainer.innerHTML =
      "<p>Falha ao carregar as rodadas. Por favor, tente novamente mais tarde.</p>";
  }
}

function renderPage(page: number) {
  currentPage = page;

  const currentRound = allRounds.find(({ round }) => round === currentPage);

  if (!currentRound) {
    gamesContainer.innerHTML = "<p>Rodada não encontrada.</p>";
    return;
  }

  currentRoundHeader.textContent = `RODADA ${currentRound.round}`;

  gamesContainer.innerHTML = "";

  currentRound.games.forEach((game) => {
    const matchDiv = document.createElement("div");
    matchDiv.classList.add("match");

    matchDiv.innerHTML = `
      <div class="team">
        <img src="/src/assets/images/teams/${game.team_home_id}.svg" alt="${game.team_home_name}" />
        <span>${game.team_home_name}</span>
      </div>

      <div class="score">
        <span>${game.team_home_score}</span>
        <img src="/src/assets/images/versus_icon.svg" alt="VS" />
        <span>${game.team_away_score}</span>
      </div>

      <div class="team">
        <span>${game.team_away_name}</span>
        <img src="/src/assets/images/teams/${game.team_away_id}.svg" alt="${game.team_away_name}" />
      </div>
    `;

    gamesContainer.appendChild(matchDiv);
  });

  updateNavButtons();
}

function updateNavButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === allRounds.length;
}

function addEventListeners() {
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      renderPage(currentPage - 1);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < allRounds.length) {
      renderPage(currentPage + 1);
    }
  });
}

displayRounds();
addEventListeners();
