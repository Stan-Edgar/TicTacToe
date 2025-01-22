// Player

function createPlayer(name, marker) {

    this.name = name;
    this.score = 0;
    this.marker = marker;
    this.turn = false;   

}

let playerOne = new createPlayer("Player 1", "X");
let playerTwo = new createPlayer("Player 2", "O");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let ten = document.querySelector(".ten");

let wrapper = document.querySelector("#wrapper")

// Reset game 
function reset() {
    let boxes = wrapper.querySelectorAll('div');
    boxes.forEach(box => box.innerHTML = "");
    playerOne.turn = true;
    playerTwo.turn = false;
};

let Reset = document.querySelector(".reset");
Reset.addEventListener('click', function() {reset();});

// Winning system

function compareArray(arr1, arr2) {

    arr1.sort();
    arr2.sort();

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (i = 0; i < arr1.length; i++ ){
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

const winningOutcomes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 7, 5]

]


let counter = 0;


// Event Listeners

let boxes = wrapper.querySelectorAll('div');
playerOne.turn = true;

boxes.forEach(box => box.addEventListener('click', function()
{  
    counter++;
       

    // TURN BASE SYSTEM

    if (playerOne.turn) {
        box.innerHTML  = `${playerOne.marker}`;
        playerOne.turn = false;
        playerTwo.turn = true;
    } else if (playerTwo.turn) {
        box.innerHTML = `${playerTwo.marker}`;
        playerTwo.turn = false;
        playerOne.turn = true;
    
    }

    

    if (one.innerHTML === playerOne.marker && two.innerHTML === playerOne.marker && three.innerHTML === playerOne.marker) {
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (four.innerHTML === playerOne.marker && five.innerHTML === playerOne.marker && six.innerHTML === playerOne.marker){
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (seven.innerHTML === playerOne.marker && eight.innerHTML === playerOne.marker && nine.innerHTML === playerOne.marker){
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (one.innerHTML === playerOne.marker && four.innerHTML === playerOne.marker && seven.innerHTML === playerOne.marker){
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (two.innerHTML === playerOne.marker && five.innerHTML === playerOne.marker && eight.innerHTML === playerOne.marker){
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (three.innerHTML === playerOne.marker && six.innerHTML === playerOne.marker && nine.innerHTML === playerOne.marker){
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (one.innerHTML === playerOne.marker && five.innerHTML === playerOne.marker && nine.innerHTML === playerOne.marker){
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (three.innerHTML === playerOne.marker && seven.innerHTML === playerOne.marker && five.innerHTML === playerOne.marker){
        console.log(`Player one won`);
        setTimeout(() => {
            reset();
            }, 3000);
    }

    if (one.innerHTML === playerTwo.marker && two.innerHTML === playerTwo.marker && three.innerHTML === playerTwo.marker) {
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (four.innerHTML === playerTwo.marker && five.innerHTML === playerTwo.marker && six.innerHTML === playerTwo.marker){
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (seven.innerHTML === playerTwo.marker && eight.innerHTML === playerTwo.marker && nine.innerHTML === playerTwo.marker){
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (one.innerHTML === playerTwo.marker && four.innerHTML === playerTwo.marker && seven.innerHTML === playerTwo.marker){
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (two.innerHTML === playerTwo.marker && five.innerHTML === playerTwo.marker && eight.innerHTML === playerTwo.marker){
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (three.innerHTML === playerTwo.marker && six.innerHTML === playerTwo.marker && nine.innerHTML === playerTwo.marker){
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (one.innerHTML === playerTwo.marker && five.innerHTML === playerTwo.marker && nine.innerHTML === playerTwo.marker){
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    } else if (three.innerHTML === playerTwo.marker && seven.innerHTML === playerTwo.marker && five.innerHTML === playerTwo.marker){
        console.log(`Player two won`);
        setTimeout(() => {
            reset();
            }, 3000);
    }

 
}))


let pOne = document.querySelector(".pOne");
let pTwo = document.querySelector('.pTwo');


let btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
playerOne.name = pOne.value;
})

let button = document.querySelector(".button");
button.addEventListener('click', function(){
playerTwo.name = pTwo.value;
})
