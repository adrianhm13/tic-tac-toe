//Module for gameBoard 

const GameBoard = (() => {
    const board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]
    const winComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]

    return {
        board,
        winComb,
    }
})();
//Factory for players

const Player = (inputName, symbol) => {
    const getName = () => inputName;
    const getSymbol = () => symbol;
    const logName = () => console.log("The name of the player is: " + inputName + " and it's playing " + symbol);
    let isPlaying = false;
    return {
        getName,
        logName,
        getSymbol,
        isPlaying
    }
};
//Module for displayController

const DisplayController = (() => {

    const boardDiv = document.getElementById("GameBoard");
    const board = GameBoard.board
    const winComb = GameBoard.winComb
    const checkWinComb = [];
    const Player1 = Player("", "X");
    const Player2 = Player("", "O");
    const infoBoard = () => {
        for (let i = 0; i < board.length; i++) {
            boardDiv.children[i].innerHTML = board[i];
        }
    }
    const addEvents = () => {
        for (let i = 0; i < board.length; i++) {
            boardDiv.children[i].addEventListener("click", () => {
                addMarker(i)
            })
        }
    }

    const addMarker = (i) => {
        if (board[i] != "") {
            console.log("Cell already taken")
        } else {
            const player = playerTurn();
            board[i] = player.getSymbol()  //Replace for the variable which contains the X or O depending from the player
            boardDiv.children[i].setAttribute("mark", player.getSymbol())
            infoBoard();
            if (checkWin(i) == true) {
                console.log("Not check Tie");
            } else {
                checkTie(board);
            }


            console.log(board)
        }
    }
    const playerTurn = () => {

        let playerTurn;
        if (Player1.isPlaying == true) {
            playerTurn = Player1;
            Player1.isPlaying = false;
            Player2.isPlaying = true;
            console.log("The next move belongs to " + Player2.getName())
        } else {
            playerTurn = Player2;
            Player1.isPlaying = true;
            Player2.isPlaying = false;
            console.log("The next move belongs to " + Player1.getName())
        }
        return playerTurn;
    }
    const firstTurn = () => {
        let randomStart = Math.floor(Math.random() * (2 - 0)) + 0;
        let firstPlayer;
        if (randomStart === 0) {
            Player1.isPlaying = true;
            firstPlayer = Player1
        } else {
            Player2.isPlaying = true;
            firstPlayer = Player2
        }
        console.log("The first move belongs to " + firstPlayer.getName())
        console.log(Player1.isPlaying)
        console.log(Player2.isPlaying)
        return firstPlayer;
    }
    const checkWin = (i) => {
        const getID = document.getElementById(i)
        let countCheckX = 0;
        let countCheckO = 0;
        checkWinComb.push(parseInt(getID.id));

        for (let i = 0; i < winComb.length; i++) {
            const matching = winComb[i].filter(element => checkWinComb.includes(element))
            if (matching.length == winComb[i].length) {
                for (let j = 0; j < matching.length; j++) {
                    if (board[matching[j]] === "X") {
                        countCheckX = countCheckX + 1
                        winnerPlayer1 = (countCheckX == 3) ? endWinner(Player1) : false
                    } else if (board[matching[j]] === "O") {
                        countCheckO = countCheckO + 1
                        winnerPlayer2 = (countCheckO == 3) ? endWinner(Player2) : false
                    }
                }
                if (winnerPlayer1 == true) {
                    return winnerPlayer1;
                } else if (winnerPlayer2 == true) {
                    return winnerPlayer2;
                }
                countCheckX = 0
                countCheckO = 0
            }
        }
    }
    const endWinner = (winnerPlayer) => {
        alert("The winner is: " + winnerPlayer.getName())
        return true;
    }
    const checkTie = (board) => {
        const Tie = board => board.every(e => e != "");
        if (Tie(board) == true) {
            alert("its a tie")
        }
    }
    const getPlayersName = () => {
        const inputPlayer1 = document.getElementById("input-player1").value;
        const inputPlayer2 = document.getElementById("input-player2").value;
        Player1.getName = () => inputPlayer1;
        Player2.getName = () => inputPlayer2;

    }
    const menuHide = () => {
        const menu = document.getElementById("menu").classList.add("menu-hide");
        const gameBoard = document.getElementById('GameBoard').classList.add("GameBoard-main-show");
    }
    const initGame = () => {
        infoBoard();
        addEvents();
        firstTurn();
    }

    return {
        checkWin,
        infoBoard,
        addEvents,
        firstTurn,
        Player1,
        Player2,
        getPlayersName,
        menuHide,
        initGame
    }
})();




// DisplayController.infoBoard();
// DisplayController.addEvents();
// DisplayController.firstTurn();