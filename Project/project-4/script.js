//Generate Random number
const randomNumber = console.log(parseInt(Math.random()*100+1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p =document.createElement('p')



let prevGuess = []
let numOfGuess = 1

let playGame = true;

function validateGuess(guess){
    //check for the number is valid or not, negative or not

}

function checkGuess(guess){
    //Avobe function we got validation, here we print message that value is correct or not

}


function displayGuess(guess){
    
}


function displayMessage(message){
    //print message
}

