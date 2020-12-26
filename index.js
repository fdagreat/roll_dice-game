//create variables for the game state

let player1Score = 0;
let player2Scrore = 0;
let plater1Turn = true;

//create variables to store DOM node

const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');

const player1ScoreBoard = document.getElementById('player1Scoreboard');
const player2ScoreBoard = document.getElementById('player2Scoreboard');
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

rollBtn.addEventListener('click', function(){
    let randNumber = Math.floor(Math.random()*6)+1;
   
    if(plater1Turn){
    player1Dice.textContent = randNumber;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = "Player 2 Turn";
    }else{
       
        player2Dice.textContent = randNumber;
        player1Dice.classList.add('active');
        player2Dice.classList.remove('active');
        message.textContent = "Player 1 Turn";
    }

    plater1Turn = !plater1Turn;
})