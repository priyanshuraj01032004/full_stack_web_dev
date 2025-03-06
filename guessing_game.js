const max = require("readline-sync");;
let rand = Math.floor(Math.random() * max  + 1)

const guess = require("readline-sync");
if(rand == guess){
    console.log("you won")
}
else{
    console.log("better luck next ")
}