let ani;

function setup() {
  createCanvas(500, 600);
  
  ani = new Sprite (width/2, height/2);
  ani.color = "purple";
  ani.friction = 0.05;
  
}

function draw() {
  background(220);
  console.log(keyCode);
  
}

function mousePressed() {
  
}

// The keyPressed() function is called once every time a key is pressed. 
function keyPressed() {
  // see the key pressed in the console
  console.log(keyCode);

  // PLAYER MOVEMENT
  // move up
  if (keyCode === 38) {
    ani.direction = 270;
    ani.speed = 2;
    // move right
  } else if (keyCode === 39) {
    ani.direction = 0;
    ani.speed = 2;
    // move down
  } else if (keyCode === 40) {
    ani.direction = 90;
    ani.speed = 2;
    // move left
  } else if (keyCode === 37) {
    ani.direction = 180;
    ani.speed = 2;
  } 
}

// checks every time a key is released
function keyReleased() {
  ani.speed = 0;
}
