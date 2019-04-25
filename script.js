let doorImage1 = document.getElementById('door1');

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const closedDoorPath = 
"https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById('start');

var numClosedDoors = 3;

var currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;
let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

const gameOver = (status) => {
  if(status=='win'){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  } 
  currentlyPlaying = false;
}
const isBot = (door) => {
  if(door.src == botDoorPath) {
    return true;
  } else {
    return false;
  }
}
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
	} else {
  return true;
	}
}

playDoor = () => {
  numClosedDoors--;
  if(numClosedDoors == 0) {
    gameOver('win');
  } 
  //else if(isBot(door)) {
  else if(isBot(doorImage1)) {
    gameOver();
  }else if(isBot(doorImage2)) {
    gameOver();
  }else if(isBot(doorImage3)) {
    gameOver();
}
}

doorImage1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)){
  		doorImage1.src= openDoor1;
  		playDoor(openDoor1);
		} 
}
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2) ){
  doorImage2.src= openDoor2;
  playDoor(openDoor2);
}
}

doorImage3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)) {
  		doorImage3.src=openDoor3;
  		playDoor(doorImage3);
	}
}

startButton.onclick = () => {
  startRound();
}

const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor==0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor == 1) {
    openDoor2 = botDoorpath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor ==2) {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
}
randomChoreDoorGenerator();