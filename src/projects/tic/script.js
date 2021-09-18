let originalBoard;
const player1 = "X";
const playerAi = "O";
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cells = document.querySelectorAll(".cell");

const startGame = () => {
  document.querySelector(".endgame").style.display = "none"
  originalBoard = Array.from(Array(9).keys());
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener('click', turnClick, false);
  }
}
const turnClick = (square) => {
  if (typeof originalBoard[square.target.id] == "number") {
    let gameOver = turn(square.target.id, player1)
    if (!checkWin(originalBoard, player1) && !checkTie()) turn(bestSpot(), playerAi);
  }
}

const turn = (squareId, player) => {
  originalBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(originalBoard, player)
  if (gameWon) gameOver(gameWon);
}
const checkWin = (board, player) => {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, [])
  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {
        index: index,
        player: player
      };
      break;
    }
  }
  return gameWon;
}

const gameOver = (gameWon) => {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == player1 ? "purple" : "green";
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
  declareWinner(gameWon.player == player1 ? "You Win! Yay!" : "You lose.");
}
const declareWinner = (who) => {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = who;
}
const emptySquares = () => {
  return originalBoard.filter(s => typeof s == "number")
}

const bestSpot = () => {
  return minmax(originalBoard, playerAi).index;
}

const checkTie = () => {
  if (emptySquares().length == 0) {
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "green";
      cells[i].removeEventListener("click", turnClick, false);
    }
    declareWinner("Tie Game!")
    return true;
  }
  return false;
}

const minmax = (newBoard, player) => {
  let availableSpots = emptySquares(newBoard);

  if (checkWin(newBoard, player)) {
    return {
      score: -10
    };
  } else if (checkWin(newBoard, playerAi)) {
    return {
      score: 10
    };
  } else if (availableSpots.length === 0) {
    return {
      score: 0
    };
  }

  const moves = [];
  for (let i = 0; i < availableSpots.length; i++) {
    const move = {};
    move.index = newBoard[availableSpots[i]];
    newBoard[availableSpots[i]] = player;

    if (player == playerAi) {
      let result = minmax(newBoard, player1);
      move.score = result.score;
    } else {
      let result = minmax(newBoard, playerAi);
      move.score = result.score;
    }
    newBoard[availableSpots[i]] = move.index;
    moves.push(move);
  }

  let bestMove;
  if (player === playerAi) {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}

startGame();
