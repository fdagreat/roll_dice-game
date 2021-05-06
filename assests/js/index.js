//create variables for the game state

let player1Score = 0;
let player2Score = 0;
let plater1Turn = true;
let round = 1;

//create variables to store DOM node

const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');

const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');
const roundMessage = document.getElementById('round');
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

function toggleButtons(){
    rollBtn.style.display="none";
    resetBtn.style.display="block";  
}

function resetgame(){
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    round = 1
    roundMessage.textContent = `Round:${round}`
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    player1Dice.style.margin =" 0 auto";
}
rollBtn.addEventListener('click', function(){
    let randNumber =2*(Math.floor(Math.random()*6)+1);
   
    if(plater1Turn){
    
    player1Score +=randNumber;
    player1Dice.textContent = randNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = "Player 2 Turn";
    }else{
         player2Score +=randNumber;
        player2Dice.textContent = randNumber;
        player2Scoreboard.textContent = player2Score;
        player1Dice.classList.add('active');
        player2Dice.classList.remove('active');
        message.textContent = "Player 1 Turn";
    }

    round += 0.5;
   
   

        if (round == 1) {
             console.log(round)
            roundMessage.textContent = `Round:${round}`
        }
           

        if (round == 2) {
            console.log(round)
            roundMessage.textContent = `Round:${round}`
        }


        if (round == 3) {
            console.log(round)
            roundMessage.textContent = `Round:${round}`
        }


    if(player1Score >=20){
        message.textContent = "Player 1 has won! 🥇";
        roundMessage.textContent = ``
        toggleButtons();
              
    }else if(player2Score >=20){
        message.textContent = "Player 2 has won! 🥇";
        roundMessage.textContent = ``
        toggleButtons();
    }

    plater1Turn = !plater1Turn;
})

resetBtn.addEventListener('click',function(){
    resetgame();
})