//Module for gameBoard 

const GameBoard = (() => {
    const board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]
    const boardDiv = document.getElementById("GameBoard");
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
    const test = () => {
        let hola
        return hola = "hola"
    }

    const addMarker = (i) => {

        let firstTurn = false
        if (firstTurn = false) {
            let playerTurn = firstTurn();
            firstTurn = true;
        } else {
            console.log(playerTurn.getName())
            if (board[i] != "") {
                console.log("Cell already taken")
            } else {
                board[i] = playerTurn.getSymbol()  //Replace for the variable which contains the X or O depending from the player
                infoBoard();
                console.log(board)
                changeTurn(playerTurn)
            }
        }



    }
    const firstTurn = () => {
        let randomStart = Math.floor(Math.random() * (2 - 0)) + 0;
        let playerTurn;

        if (randomStart === 0) {
            playerTurn = Player1
        } else {
            playerTurn = Player2
        }
        console.log("The first turn its for: " + playerTurn.getName())
        return playerTurn;
    }
    const changeTurn = (playerTurn) => {

        let newTurn;
        if (playerTurn.getName() == Player1.getName()) {
            newTurn = Player2
        } else {
            newTurn = Player1
        }
        console.log("the turn has changed to: " + newTurn.getName());
    }
    const assignTurn = (playerAssignTurn) => {
        let assignTurn = changeTurn()
    }


    return {
        board,
        infoBoard,
        addEvents,
        addMarker,
        assignTurn,
        test
    }
})();

//Module for displayController

const DisplayController = (() => {
    const board = () => GameBoard.infoBoard();
    return {
        board,
    }
})();

//Factory for players

let Player = (inputName, symbol) => {
    const getName = () => inputName;
    const getSymbol = () => symbol;
    const logName = () => console.log("The name of the player is: " + inputName + " and it's playing " + symbol);
    return {
        getName,
        logName,
        getSymbol
    }
};
let Player1 = Player("Adrian", "X");
let Player2 = Player("Jose", "O")
Player1.logName();
Player2.logName();
GameBoard.infoBoard();
GameBoard.addEvents();