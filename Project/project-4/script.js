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

//check you are available for the playing game

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
    //check for the number is valid or not, negative or not
    if (isNaN(guess)) {
        alert(`Please enter a valid number`)
    }
    else if(guess < 1){
        alert(`Please enter a number more than 1`)
    }
    else if(guess > 100){
        alert(`Please enter number less then 100`)
    }
    else{
        prevGuess.push(guess)
        if(numOfGuess > 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //Avobe function we got validation, here we print message that value is correct or not

}


function displayGuess(guess){

}


function displayMessage(message){
    //print message
}

function newGame(){

}

function endGame(){

}