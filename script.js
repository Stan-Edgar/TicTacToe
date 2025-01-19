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


let counter = 0;

one.addEventListener('click', function(e){
    alert(e.target);
})

let div = document.querySelectorAll("div").forEach(div => div.addEventListener('click', function(e)
{ 
    
    counter++
    e.target.style.background = "black";
    console.log(e.target.className); 

   if (counter === 3) {

    console.log("You won!");
    john.score++;
    console.log("John's score is " + john.score);

   }

}))

