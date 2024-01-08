//////////////////////////MY CODE/////////////////////////////

const table = document.getElementById("tictactoe");
const cells = document.querySelectorAll(".cells");
const restartBtn = document.querySelector("#restartButton");
let current = "X";
let previous;
let win = false;
let cellClicked = 0;
let winningCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

////////

function startGame(element){
    if(win === false){
        if(element.innerHTML === ""){
            element.innerHTML = current;
            previous = current;
            if(current === "X"){
                current = "O";
            }
            else if(current === "O"){
                current = "X";
            }
            cellClicked++;
        }
        else{
            alert("Already entered!");
        }
    }
    checkWinner();   
}

////////

function checkWinner(){  
    for(i = 0; i < winningCondition.length; i++){
        if(winningCondition[i].every((condition) => cells[condition].textContent === previous)){//refer below
            win = true;
            if(win === true){
                winningCondition[i].innerHTML = "poda";
            }
            document.getElementById("result").innerHTML = `${previous} is the winner`;
            

            cells.forEach(() => {
                    cells.disabled = true;
            });
        }
    }
    if(win === false && cellClicked === 9){
        document.getElementById("result").innerHTML = "it's a tie!!!";
    }
}

restartBtn.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.innerHTML = "";
        document.getElementById("result").innerHTML = "";

    });

    current = "X";
    previous = undefined;
    win = false;

    cells.forEach((cell) => {
        cell.disabled = false;
    });

});









/*The every((condition) => cells[condition]) function in JavaScript is used to check if all 
of the elements in an array meet a certain condition. In the checkWinner() function that you 
provided, it is used to check if all of the cells in a winning combination have the same value.

The every() function takes a callback function as an argument. The callback function is called 
for each element in the array, and it returns a boolean value indicating whether the element 
meets the condition. The every() function will return true if all of the elements in the array 
meet the condition, and false otherwise.

In the checkWinner() function, the callback function that is passed to the every() function 
checks if the textContent property of the cell at the given index is equal to the previous 
value. If all of the cells in the winning combination have the same value, then the every() 
function will return true, and the checkWinner() function will declare the winner.

Here is an example of how to use the every() function:

const numbers = [1, 2, 3, 4, 5];

// Check if all of the numbers in the array are even.
const areAllEven = numbers.every((number) => number % 2 === 0);

// Check if all of the numbers in the array are greater than 10.
const areAllGreaterThanTen = numbers.every((number) => number > 10);

console.log(areAllEven); // true
console.log(areAllGreaterThanTen); // false
*/















































///////////////BELOW IS THE CODE FROM BRO CODE FOR THIS PROGRAM//////////////


// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
// const winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// let options = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let running = false;

// initializeGame();

// function initializeGame(){
//     cells.forEach(cell => cell.addEventListener("click", cellClicked));
//     restartBtn.addEventListener("click", restartGame);
//     statusText.textContent = `${currentPlayer}'s turn`;
//     running = true;
// }
// function cellClicked(){
//     const cellIndex = this.getAttribute("cellIndex");

//     if(options[cellIndex] != "" || !running){
//         return;
//     }

//     updateCell(this, cellIndex);
//     checkWinner();
// }
// function updateCell(cell, index){
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer;
// }
// function changePlayer(){
//     currentPlayer = (currentPlayer == "X") ? "O" : "X";
//     statusText.textContent = `${currentPlayer}'s turn`;
// }
// function checkWinner(){
//     let roundWon = false;

//     for(let i = 0; i < winConditions.length; i++){
//         const condition = winConditions[i];
//         const cellA = options[condition[0]];
//         const cellB = options[condition[1]];
//         const cellC = options[condition[2]];

//         if(cellA == "" || cellB == "" || cellC == ""){
//             continue;
//         }
//         if(cellA == cellB && cellB == cellC){
//             roundWon = true;
//             break;
//         }
//     }

//     if(roundWon){
//         statusText.textContent = `${currentPlayer} wins!`;
//         running = false;
//     }
//     else if(!options.includes("")){
//         statusText.textContent = `Draw!`;
//         running = false;
//     }
//     else{
//         changePlayer();
//     }
// }
// function restartGame(){
//     currentPlayer = "X";
//     options = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     cells.forEach(cell => cell.textContent = "");
//     running = true;
// }