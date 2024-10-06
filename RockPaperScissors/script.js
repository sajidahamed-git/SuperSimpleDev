function playGame(userChoice){

    let computerChoice = getComputerChoice()

    if (userChoice == `rock`) 
        {
        userRock(computerChoice,userChoice)
    }
        

    if (userChoice == `paper`) 
        {
        userPaper(computerChoice,userChoice)
    }
  

    if (userChoice == 'scissors') 
        {
        userScissors(computerChoice,userChoice)
    }

}

function getComputerChoice()
{
    const choices = ["rock","paper","scissors"]
    let randomindex = Math.floor((Math.random() *3))
    let computerChoice = choices[randomindex]
    return computerChoice
}




function userRock(computerChoice,userChoice) {
    

    if (computerChoice==`rock`) {
        alert(`Game Draw, both chose ${computerChoice}`)
    }
    else if (computerChoice == `paper`) {
    alert(`You Lose, Computer chose ${computerChoice} and you chose ${userChoice}`);
    }
    else if (computerChoice == `scissors`){
    alert(`You win, Computer ${computerChoice} and you chose ${userChoice}`);
    }
}

function userPaper(computerChoice,userChoice) {

    if (computerChoice==`rock`) {
        alert(`You win computer choice ${computerChoice} and you chose ${userChoice}`)
    }
    else if (computerChoice == `paper`) {
        alert(`game draw both chose ${computerChoice}`);
    }
    else if (computerChoice == `scissors`) {
        alert(`You lose, Computer chose ${computerChoice} and you chose
        ${userChoice}`);
    }
}

function userScissors(computerChoice,userChoice) {
    if (userChoice == `scissors`) {
        if (computerChoice==`rock`) 
        {
            alert(`You lose, Computer chose ${computerChoice} and you chose ${userChoice}`);
        }
   
        else if (computerChoice == `paper`) {
            alert(`You win computer choice ${computerChoice} and you chose ${userChoice}`)
            
        }
        else if (computerChoice == `scissors`) {
            alert(`game draw both chose ${computerChoice} `);
        }
    }    
}