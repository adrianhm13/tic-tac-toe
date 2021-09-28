 //Module for gameBoard 

const GameBoard = (() => { 
    const board = []
    const infoBoard = () => console.log(board)
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

const Player = (inputName) => {
    const getName = () => inputName;
    const logName = () => console.log("The name of the player is: " + inputName);
    return{
        getName,
        logName
    }
};
console.log(DisplayController.board());
const Player1 = Player("Adrian");
Player1.logName();