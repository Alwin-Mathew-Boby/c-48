var backgroundImg
var marioAnimations
var gameState
var playerCount

function preload(){

backgroundImg=loadImage("../Assets/images.png") 
marioAnimations=loadAnimation("../Assets/1.png","../Assets/2.png","../Assets/3.png","../Assets/4.png","../Assets/5.png","../Assets/6.png")
}


function setup() {
  createCanvas(1000, 600); // Create a canvas for the game
  database = firebase.database(); // Initialize the database connection
  game = new Game(); // Create a game object
  game.getState(); // Get the current game state from the database
  game.start(); // Start the game
}

function draw() {
  background(backgroundImg);
  
   if (playerCount === 2) {
     game.update(1);// If there are 2 players, update the game state to 1 (playing)
   }
   if (gameState === 1) {
    clear(); // Clear the canvas
    game.play(); // Start the game
   }
   if (gameState === 2) {
    game.end(); // If the game state is 2, end the game
   }
}