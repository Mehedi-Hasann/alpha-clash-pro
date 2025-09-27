// function play(){
//     //step 1 : hide the home screen. To hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key;
  // console.log('player pressed ',playerPressed)
  //stop the game if pressed "Esc"
  if(playerPressed === 'Escape'){
    gameOver();
  }
  //get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log('current alphabet ',currentAlphabet);

  //checked matched or not
  if( playerPressed === expectedAlphabet){
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;

    setTextElementValueById('current-score', updatedScore);


    //............................

    //update score :
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // const newScore = currentScore + 1;

    // currentScoreElement.innerText = newScore;

    //start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if(updatedLife === 0){
      gameOver();
    }


    //............................
    // //get current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // //reduce the life count
    // const newLife = currentLife - 1;
    // //display the updated life score
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame() {
  //step -1: generate a random alphabet
  const alphabet = getARandomAlphabet();

  //set randomly generated alphabet to the screen( show it )
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById('final-score')
  showElementById("play-ground");

  //reset score and life

  setTextElementValueById('current-life',5);
  setTextElementValueById('current-score',0);
  continueGame();
}

function gameOver(){
  hideElementById("play-ground");
  showElementById("final-score");

  //update final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score',lastScore);

  //clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);]
  removeBackgroundColorById(currentAlphabet);
}