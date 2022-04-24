const playGame = (() => {
  const squads = document.querySelectorAll(".squads");
  const reset_Btn = document.querySelector(".resetBtn");
  const turnText = document.querySelector("p");


  let player1 = "O";

  let tieGame = "It's a draw";

  let board = ["", "", "", "", "", "", "", "", ""]; //array for push index squad

  //adjust squads inner text player if X or O
  squads.forEach((squad) => {
    squad.addEventListener("click", (e) => {
      if (squad.innerHTML == "") {
        player1 = player1 === "O" ? "X" : "O";
        squad.innerHTML = player1;
        board[e.target.dataset.id] = player1; 
        if (player1 === "X") {
          squad.style.color = '#133c04';
        } else {
          squad.style.color = '#770c22';
        }
        checkWinner();
      }
    });
  });

  //check the logig winner a = b && b = c ---> winning lines: [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [6, 7, 8], [3, 4, 5], [2, 

  function checkWinner() {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== "") { winnerGame(player1); }
    if (board[0] === board[3] && board[0] === board[6] && board[0] !== "") { winnerGame(player1); }
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== "") { winnerGame(player1); }
    if (board[1] === board[4] && board[1] === board[7] && board[1] !== "") { winnerGame(player1); }
    if (board[2] === board[5] && board[2] === board[8] && board[2] !== "") { winnerGame(player1); }
    if (board[6] === board[7] && board[6] === board[8] && board[6] !== "") { winnerGame(player1); }
    if (board[3] === board[4] && board[3] === board[5] && board[3] !== "") { winnerGame(player1); }
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== "") { winnerGame(player1); }
    if (!board.includes("")) { winnerGame("draw"); }
  }

  //set a winner or draw message

  function winnerGame(winner) {
    if (winner === "draw") {
      turnText.innerHTML = `${tieGame} <i class="fa-solid fa-face-grimace"></i>`;
    } else {
      turnText.innerHTML = `${winner} is the winner <i class="fa-solid fa-face-smile"></i>`;
    } 
  }

  //reset the game

  function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    squads.forEach((squad) => {
      squad.innerHTML = "";
    })
    turnText.textContent = '';
  }

  reset_Btn.addEventListener('click', restartGame)
})();

