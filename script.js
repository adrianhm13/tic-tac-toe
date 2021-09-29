//Module for gameBoard 

const GameBoard = (() => {
    const board = [
        "X", "X", "X",
        "X", "X", "X",
        "X", "X", "X"
    ]
    const infoBoard = () => {
        const boardDiv = document.getElementById("GameBoard");
        for (let i = 0; i < board.length; i++) {
            boardDiv.children[i].innerHTML = board[i];
        }  
    }
    return {
        board,
        infoBoard
    }
})();

//Module for displayController

const DisplayController = (() => {
    const board = () => GameBoard.infoBoard();
    return {
        board
    }
})();

//Factory for players

let Player = (inputName) => {
    const getName = () => inputName;
    const logName = () => console.log("The name of the player is: " + inputName);
    return {
        getName,
        logName
    }
};
console.log(DisplayController.board());
let Player1 = Player("Adrian");
Player1.logName();
GameBoard.infoBoard();