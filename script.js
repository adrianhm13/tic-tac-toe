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

//Module for displayController

const DisplayController = (() => {

    const boardDiv = document.getElementById("GameBoard");
    const board = GameBoard.board
    const winComb = GameBoard.winComb
    const checkWinComb = [];

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
            checkWin(i);
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
        return firstPlayer;
    }
    const checkWin = (i) => {
        const getID = document.getElementById(i)
        const getMark = getID.getAttribute("mark")
        console.log(getID)
        console.log(getMark)
        checkWinComb.push(parseInt(getID.id));

        for (let i = 0; i < winComb.length; i++) {
            const matching = winComb[i].filter(element => checkWinComb.includes(element))
            if(matching.length == winComb[i].length){
                console.log("we may have a winner")
            }else{
                console.log("No matching")
            }
            console.log("hehe" + matching)
        }
    }
    return {
        checkWin,
        infoBoard,
        addEvents,
        firstTurn
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
const Player1 = Player("Adrian", "X");
const Player2 = Player("Jose", "O");
Player1.logName();
Player2.logName();
DisplayController.infoBoard();
DisplayController.addEvents();
DisplayController.firstTurn();