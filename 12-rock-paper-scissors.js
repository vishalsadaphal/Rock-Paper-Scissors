/*{
  wins: 0,
  losses: 0,
  ties: 0
};
*/

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/


let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
  intervalId = setInterval(() =>  {

  const playerMove = pickComputerMove();
  playGame(playerMove);

  }, 1000);
  isAutoPlaying = true;
}
else{
  clearInterval(intervalId);
  isAutoPlaying = false;
}

}


document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });


document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });


document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });



document.body.addEventListener('keydown', (event) =>{

  if(event.key === 'r'){
    playGame('rock');
  }
  else if(event.key === 'p'){
    playGame('paper');
  }
  else if(event.key === 's'){
    playGame('scissors');
  }
});


function playGame(playerMove){
  
  const computerMove =pickComputerMove();

let result ='';

if(playerMove === 'scissors'){


if(computerMove === 'Rock'){
  result = 'you losses';

}

else if(computerMove === 'Paper'){
  result = 'you wins';

}

else if(computerMove === 'Scissors'){
  result= 'ties';

}
}



else if(playerMove === 'paper'){
  if(computerMove === 'Rock'){
    result = 'you wins';

  }

  else if(computerMove === 'Paper'){
    result = 'ties';

  }

  else if(computerMove === 'Scissors'){
    result= 'you losses';

  }
}




else if(playerMove === 'rock'){

  if(computerMove === 'Rock'){
    result = 'ties';

  }

  else if(computerMove === 'Paper'){
    result = 'you losses';

  }

  else if(computerMove === 'Scissors'){
    result= 'you wins';

  }

}


if(result === 'you wins'){
  score.wins += 1;
}
else if(result === 'you losses'){
  score.losses += 1;
}
else if(result === 'ties'){
  score.ties += 1;
}


localStorage.setItem('score', JSON.stringify(score));


updateScoreElement();



document.querySelector('.js-result').innerHTML = result;


document.querySelector('.js-moves').innerHTML = 
  `you 
    <img src="${playerMove}-emoji copy.png" class="move-icon">
    <img src="${computerMove}-emoji copy.png" class="move-icon">
  computer`

/*
alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
*/


}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML =
`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}




function pickComputerMove()
{

  /*this variable only accss within the function so to aacess it in scissore we have to declare as :
   const computerMove =pickComputerMove();  where computerMove is a diiferent from inside function computerMove.
*/

  let computerMove = '';


  const randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber <=1/3){
 computerMove = 'Rock';

  }
  else if(randomNumber >= 1/3 && randomNumber <= 2/3){
    computerMove =  'Paper';
    
  }

   else if(randomNumber >= 2/3 && randomNumber <1){
    computerMove = 'Scissors';
    
  }

  return computerMove;

  //it return the computer move to the rock, paper and scisor button.


 // *************************************

  //it return value 5 whene function is caled in console.log.
  // reffer above line 70. wehre it is called. also it called function.

}
