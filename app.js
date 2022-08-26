document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  const restart = document.getElementById("restart");
  let playerTurn = true;
  let computerTurn = false;
  var winner = false;

  let turnsRemaining = 9;

  // restart function
  const restartFunc = () => {
    for (let i = 0; i < squares.length; i++) {
      squares[i].className = "square";
      turnsRemaining = 9;
      computerTurn = false;
      playerTurn = true;
      winner = false;
      playText.innerHTML = `Let's Play`;
    }
  };

  restart.addEventListener("click", restartFunc);

  // check for a win
  function checkWin() {
    // check cross win horizontal
    if (
      squares[0].className == "cross" &&
      squares[1].className == "cross" &&
      squares[2].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }
    if (
      squares[3].className == "cross" &&
      squares[4].className == "cross" &&
      squares[5].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }
    if (
      squares[6].className == "cross" &&
      squares[7].className == "cross" &&
      squares[8].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }

    // check naught win horizontal
    if (
      squares[0].className == "naught" &&
      squares[1].className == "naught" &&
      squares[2].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }
    if (
      squares[3].className == "naught" &&
      squares[4].className == "naught" &&
      squares[5].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }
    if (
      squares[6].className == "naught" &&
      squares[7].className == "naught" &&
      squares[8].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }

    // check cross win vertical
    if (
      squares[0].className == "cross" &&
      squares[3].className == "cross" &&
      squares[6].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }
    if (
      squares[1].className == "cross" &&
      squares[4].className == "cross" &&
      squares[7].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }
    if (
      squares[2].className == "cross" &&
      squares[5].className == "cross" &&
      squares[8].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }

    // check naught win vertical
    if (
      squares[0].className == "naught" &&
      squares[3].className == "naught" &&
      squares[6].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }
    if (
      squares[1].className == "naught" &&
      squares[4].className == "naught" &&
      squares[7].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }
    if (
      squares[2].className == "naught" &&
      squares[5].className == "naught" &&
      squares[8].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }

    // check cross win diagonal
    if (
      squares[0].className == "cross" &&
      squares[4].className == "cross" &&
      squares[8].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }
    if (
      squares[2].className == "cross" &&
      squares[4].className == "cross" &&
      squares[6].className == "cross"
    ) {
      playText.innerHTML = `cross wins!`;
      winner = true;
    }

    // check cross win vertical
    if (
      squares[0].className == "naught" &&
      squares[4].className == "naught" &&
      squares[8].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }
    if (
      squares[2].className == "naught" &&
      squares[4].className == "naught" &&
      squares[6].className == "naught"
    ) {
      playText.innerHTML = `naught wins!`;
      winner = true;
    }
  }

  // create turn system
  if (turnsRemaining > 0) {
    // player turn
    for (let i = 0; i < squares.length; i++) {
      squares[i].onclick = () => {
        if (playerTurn && squares[i].className == "square" && !winner) {
          squares[i].className = "cross";
          turnsRemaining--;
          playerTurn = false;
          computerTurn = true;
          checkWin();
        }

        // computer turn
        while (computerTurn == true && turnsRemaining > 0) {
          let rand = Math.floor(Math.random() * 9);
          if (squares[rand].className == "square") {
            squares[rand].className = "naught";
            turnsRemaining--;
            computerTurn = false;
            playerTurn = true;
            checkWin();
          }
        }
      };
    }
  }
});
