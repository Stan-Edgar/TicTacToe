// Player

function createPlayer(name, marker) {

    this.name = name;
    this.score = 0;
    this.marker = marker;
    this.turn = false;   

}

let playerOne = new createPlayer("One", "X");
let playerTwo = new createPlayer("Two", "O")


let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let wrapper = document.querySelector("#wrapper")

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
let poMoveList = [];
let ptMoveList = [];


// Event Listeners

one.addEventListener('click', function(){

    if (playerOne.turn) {
        poMoveList.push(1);
    } else if (playerTwo.turn) {
        ptMoveList.push(1);
    
    }
})

two.addEventListener('click', function(){
    
    if (playerOne.turn) {
        poMoveList.push(2);
    } else if (playerTwo.turn) {
        ptMoveList.push(2);
    
    }
})

three.addEventListener('click', function(){
    
    if (playerOne.turn) {
        poMoveList.push(3);
    } else if (playerTwo.turn) {
        ptMoveList.push(3);
    
    }
})

let boxes = wrapper.querySelectorAll('div');
playerOne.turn = true;

boxes.forEach(box => box.addEventListener('click', function()
{  
    counter++;

    if (counter >= 5) {

        if(compareArray(poMoveList, winningOutcomes[0])) {

            console.log(`Player one won`)

        } else if(compareArray(ptMoveList, winningOutcomes[0])) {
            console.log(`Player two won`)
        };
    }

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
  

}))

