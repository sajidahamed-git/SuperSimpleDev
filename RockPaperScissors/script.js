
function playGame(userChoice) {
  let computerChoice = getComputerChoice();

  if (userChoice == `rock`) {
    userRock(computerChoice, userChoice);
  } else if (userChoice == `paper`) {
    userPaper(computerChoice, userChoice);
  } else if (userChoice == "scissors") {
    userScissors(computerChoice, userChoice);
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomindex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomindex];
  return computerChoice;
}

function userRock(computerChoice, userChoice) {
  let result;

  if (computerChoice == `rock`) {
    result = "draw";
  } else if (computerChoice == `paper`) {
    result = "lose";
  } else if (computerChoice == `scissors`) {
    result = "win";
  }

  alertResult(computerChoice, userChoice, result);
}

function userPaper(computerChoice, userChoice) {
  if (computerChoice == `rock`) {
    result = "win";
  } else if (computerChoice == `paper`) {
    result = "draw";
  } else if (computerChoice == `scissors`) {
    result = "lose";
  }
  alertResult(computerChoice, userChoice, result);
}

//the above to functions userRock and userPaper use another functin
//alertResult to display the result wheare as the below functin userScissors
//displays the result within the same function you ask why jus no reason just learnin

function userScissors(computerChoice, userChoice) {
  if (computerChoice == `rock`) {
    result = "lose";
  } else if (computerChoice == `paper`) {
    result = "win";
  } else if (computerChoice == `scissors`) {
    result = "draw";
  }

  alertResult(computerChoice, userChoice, result);
}

function alertResult(computerChoice, userChoice, result) {
  let score = JSON.parse(localStorage.getItem('message'))

    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        draws: 0,
      };
      
    }
  
  

  if (result == "win") {
    score.wins = score.wins + 1;
  }
  if (result == "lose") {
    score.losses = score.losses + 1;
  }
  if (result == "draw") {
    score.draws = score.draws + 1;
  }


  alert(
    `You chose ${userChoice} and Computer chose ${computerChoice} so game ${result} 
wins: ${score.wins}, Losses :${score.losses}, Draws: ${score.draws}`
  );
  
  localStorage.setItem('message',JSON.stringify(score));
  console.log(typeof score);  
  
  console.log(score);
}

function resetButton(){
  localStorage.removeItem('message')
  console.log('score deleted');
}


//  if (score == null) {
//   console.log('nell');
//   let score = {
//     wins: 0,
//     losses: 0,
//     draws: 0,
//   }
//   else {
//     score = JSON.parse(localStorage.getItem('message'))
//   }
// }
