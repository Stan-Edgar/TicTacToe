function createPlayer(name, marker) {

    this.name = name;
    this.score = 0;
    this.marker = marker;
    this.turn = false;   

}

let john = new createPlayer("John", "X");

console.log(john.name);

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

let div = document.querySelectorAll("div").forEach(div => div.addEventListener('click', function (e)
{e.target.style.backgroundcolor = "black";}))
