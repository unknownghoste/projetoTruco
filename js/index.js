document.addEventListener("DOMContentLoaded", function () {
  const team1ScoreElement = document.getElementById("team1Score");
  const team2ScoreElement = document.getElementById("team2Score");
  const addPoint1Button = document.getElementById("addPoint1");
  const addPoint3Button = document.getElementById("addPoint3");
  const addPoint6Button = document.getElementById("addPoint6");
  const addPoint12Button = document.getElementById("addPoint12");
  const addPoint1Team2Button = document.getElementById("addPoint1Team2");
  const addPoint3Team2Button = document.getElementById("addPoint3Team2");
  const addPoint6Team2Button = document.getElementById("addPoint6Team2");
  const addPoint12Team2Button = document.getElementById("addPoint12Team2");
  const resetButton = document.getElementById("reset");
  const team1NameInput = document.getElementById("team1Name");
  const team2NameInput = document.getElementById("team2Name");
  const winnerTextElement = document.getElementById("winnerText");

  let team1Score = 0;
  let team2Score = 0;

  addPoint1Button.addEventListener("click", () => {
      addPointsToTeam1(1);
  });

  addPoint3Button.addEventListener("click", () => {
      addPointsToTeam1(3);
  });

  addPoint6Button.addEventListener("click", () => {
      addPointsToTeam1(6);
  });

  addPoint12Button.addEventListener("click", () => {
      addPointsToTeam1(12);
  });

  addPoint1Team2Button.addEventListener("click", () => {
      addPointsToTeam2(1);
  });

  addPoint3Team2Button.addEventListener("click", () => {
      addPointsToTeam2(3);
  });

  addPoint6Team2Button.addEventListener("click", () => {
      addPointsToTeam2(6);
  });

  addPoint12Team2Button.addEventListener("click", () => {
      addPointsToTeam2(12);
  });

  resetButton.addEventListener("click", () => {
      resetScores();
  });

  function addPointsToTeam1(points) {
      team1Score += points;
      updateScores();
  }

  function addPointsToTeam2(points) {
      team2Score += points;
      updateScores();
  }

  function updateScores() {
      team1ScoreElement.textContent = team1Score;
      team2ScoreElement.textContent = team2Score;

      if (team1Score >= 12) {
          winnerTextElement.textContent = team1NameInput.value + " venceu!";
      } else if (team2Score >= 12) {
          winnerTextElement.textContent = team2NameInput.value + " venceu!";
      }
  }

  function resetScores() {
      team1Score = 0;
      team2Score = 0;
      team1ScoreElement.textContent = "0";
      team2ScoreElement.textContent = "0";
      winnerTextElement.textContent = "";
  }
});
