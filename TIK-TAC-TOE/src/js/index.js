console.log('Welcome to TIC TAC TOE');

let music = new Audio('assets/Scarry Sound.mp3');
let turn = new Audio('assets/Ting Tong Bell.mp3');
let gameOverAudio = new Audio('assets/mixkit-arcade.wav');
let laugh = new Audio('assets/mixkit.wav');
let cry = new Audio('assets/Male-Soft-Crying.mp3');
let playerTurn = "X";
let gameOver = false;

//Function to change the turn
const ChangeTurn = () => {
  return playerTurn === "X" ? "0" : "X";
}

//Function to check event

const checkWin = () => {
  let boxText = document.getElementsByClassName('boxText');
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && 
    (boxText[e[2]].innerText === boxText[e[1]].innerText) && 
    (boxText[e[0]].innerText !== '')) {
      document.querySelector('.info').innerText = boxText[e[0]].innerText + ' Won';
      gameOver = true;
      document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
      document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector('.line').style.width = '20vw';
    }
  });
}

//Game Logic 
// music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
  let boxTest = element.querySelector('.boxText');
   element.addEventListener('click', () => {
      if(boxTest.innerText === '') {
        boxTest.innerText = playerTurn;
        playerTurn = ChangeTurn();
        turn.play();
        checkWin();
        if (!gameOver) {
          document.getElementsByClassName('info')[0].innerText = `Turn for ${playerTurn}`;
          // laugh.play();
        } 
      }
   });
});

//Add Onclick event listener to reset button
reset.addEventListener('click', () => {
  let boxTest = document.querySelectorAll('.boxText');
  Array.from(boxTest).forEach(element => {
    element.innerText = "";
  });
  playerTurn = "X";
  gameOver = false;
  document.querySelector('.line').style.width = '0vw';
    document.getElementsByClassName('info')[0].innerText = `Turn for ${playerTurn}`;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
    // laugh.play();
})