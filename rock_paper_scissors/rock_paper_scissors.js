const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')  {
    return userInput
  } else {
    console.log('Please choose a valid option. Rock, Paper, or Scissors')
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
}

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return 'Its a draw! Try again';
  }
  if (getUserChoice === 'rock') {
    if (getComputerChoice === 'paper') {
      return 'Computer chose paper, you lose!'
    } else {
      return 'You win!'
    }
  }

    if (getUserChoice === 'paper') {
    if (getComputerChoice === 'scissors') {
      return 'Computer chose scissors, you lose!'
    } else {
      return 'You win!'
    }
  }

    if (getUserChoice === 'scissors') {
    if (getComputerChoice === 'rock') {
      return 'Computer chose paper, you lose!'
    } else {
      return 'You win!'
    }
  }

  if (getUserChoice === 'bomb') {
    return 'You got me, I lose.'
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log('You chose ' + userChoice)
  console.log('Computer chose ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()

