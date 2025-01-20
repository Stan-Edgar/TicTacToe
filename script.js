// Player

function createPlayer(name, marker) {

    this.name = name;
    this.score = 0;
    this.marker = marker;
    this.turn = false;   

}

let john = new createPlayer("John", "X");



let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

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
let moveList = [];

if (counter === 3) {
    console.log(compareArray(moveList, winningOutcomes[0]))
}

// Event Listeners

one.addEventListener('click', function(){
    moveList.push(1);
    console.log(moveList)
})

two.addEventListener('click', function(){
    moveList.push(2);
    console.log(moveList)
})

three.addEventListener('click', function(){
    moveList.push(3);
    console.log(moveList)
})

let div = document.querySelectorAll("div").forEach(div => div.addEventListener('click', function(e)
{  
    alert(counter);
    counter++;
    e.target.style.background = "black";
    console.log(e.target.className); 

}))

