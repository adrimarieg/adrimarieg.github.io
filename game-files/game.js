/*
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.style.position = 'absolute';
canvas.height = window.innerHeight / 2;
canvas.style.position = 'absolute';
canvas.style.top = `${window.innerHeight / 2}px`;

var c = canvas.getContext('2d');

// Create an image object
var cloudImage = new Image();
cloudImage.src = 'cloud.png'; // Replace 'cloud.png' with the path to your image file

// Variables for cloud animation
const clouds = [
  { x: 2000, y: 200, width: 150, height: 100 },
  { x: 2500, y: 600, width: 150, height: 100 },
  { x: 3000, y: 500, width: 150, height: 100 },
  { x: 3500, y: 500, width: 150, height: 100 },
  { x: 4000, y: 350, width: 150, height: 100 },
];

// Animation speed for clouds
const speed = 2;

// Start animation when image loads
cloudImage.onload = function () {
  animate();
};

function animate() {
  // Clear the canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each cloud
  clouds.forEach(cloud => {
    // Move cloud left
    cloud.x -= speed;

    // If cloud goes off the left side, reset it to the right with a random height
    if (cloud.x + cloud.width < 0) {
      cloud.x = canvas.width; // Reset to just outside the right side
      cloud.y = Math.random() * (canvas.height - cloud.height); // Random height
    }

    // Draw the cloud
    c.drawImage(cloudImage, cloud.x, cloud.y, cloud.width, cloud.height);
  });

  // Loop the animation
  requestAnimationFrame(animate);
}

*/



/*
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.style.position = 'absolute';
canvas.height = window.innerHeight / 2;
canvas.style.position = 'absolute';
canvas.style.top = `${window.innerHeight / 2}px`;

var c = canvas.getContext('2d');

// Create cloud and doggo image objects
var cloudImage = new Image();
cloudImage.src = 'cloud.png'; // Replace with the path to your cloud image

var doggoImage = new Image();
doggoImage.src = 'doggo.png'; // Replace with the path to your doggo image

// Variables for cloud animation
const clouds = [
  { x: 2000, y: 200, width: 150, height: 100 },
  { x: 2500, y: 600, width: 150, height: 100 },
  { x: 3000, y: 500, width: 150, height: 100 },
  { x: 3500, y: 500, width: 150, height: 100 },
  { x: 4000, y: 350, width: 150, height: 100 },
];

// Variables for doggo
const doggo = {
  x: 1500, // Horizontal position
  y: canvas.height / 2, // Vertical position
  width: 200,
  height: 150,
  velocity: 0, // Vertical speed
  gravity: 0.5, // Gravity strength
  lift: -10, // Strength of the jump
};

// Animation speed for clouds
const speed = 2;

// Flag to track whether the game has started
let gameStarted = false;

// Start animation when the spacebar is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    if (!gameStarted) {
      gameStarted = true;
      console.log('Game started!');
      animate();
    }
    // Make the doggo jump
    doggo.velocity = doggo.lift;
  }
});

function animate() {
  // Clear the canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw clouds
  clouds.forEach(cloud => {
    // Move cloud left
    cloud.x -= speed;

    // If cloud goes off the left side, reset it to the right with a random height
    if (cloud.x + cloud.width < 0) {
      cloud.x = canvas.width; // Reset to just outside the right side
      cloud.y = Math.random() * (canvas.height - cloud.height); // Random height
    }

    // Draw the cloud
    c.drawImage(cloudImage, cloud.x, cloud.y, cloud.width, cloud.height);
  });

  // Update doggo position
  doggo.velocity += doggo.gravity; // Apply gravity
  doggo.y += doggo.velocity; // Update vertical position

  // Prevent the doggo from falling off the canvas
  if (doggo.y + doggo.height > canvas.height) {
    doggo.y = canvas.height - doggo.height; // Stop at the bottom
    doggo.velocity = 0; // Reset velocity
  }
  if (doggo.y < 0) {
    doggo.y = 0; // Prevent going above the top
    doggo.velocity = 0; // Reset velocity
  }

  // Draw the doggo
  c.drawImage(doggoImage, doggo.x, doggo.y, doggo.width, doggo.height);

  // Loop the animation
  requestAnimationFrame(animate);
}

console.log("Game script loaded");
*/


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 1.5 ;
canvas.style.position = 'absolute';
canvas.style.top = `${window.innerHeight / 4}px`;

var c = canvas.getContext('2d');

// Create cloud and doggo image objects
var cloudImage = new Image();
cloudImage.src = 'cloud.png'; // Replace with the path to your cloud image

var doggoImage = new Image();
doggoImage.src = 'doggo.png'; // Replace with the path to your doggo image

// Variables for cloud animation
const clouds = [
  { x: 2000, y: 200, width: 100, height: 75 },
  { x: 2250, y: 500, width: 100, height: 75 },
  { x: 2500, y: 300, width: 100, height: 75 },
  { x: 2750, y: 200, width: 100, height: 75 },
  { x: 3000, y: 450, width: 100, height: 75 },
  { x: 3250, y: 150, width: 100, height: 75 },
  { x: 3500, y: 500, width: 100, height: 75 },
  { x: 3750, y: 500, width: 100, height: 75 },
];

// Variables for doggo
const doggo = {
  x: 1000,
  y: canvas.height / 2,
  width: 150,
  height: 100,
  velocity: 0,
  gravity: 0.5,
  lift: -10,
};

const speed = 2;
let gameStarted = false;

document.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    if (!gameStarted) {
      gameStarted = true;
      console.log('Game started!');
      animate();
    }
    doggo.velocity = doggo.lift;
  }
});

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw clouds
  clouds.forEach(cloud => {
    cloud.x -= speed;
    if (cloud.x + cloud.width < 0) {
      cloud.x = canvas.width;
      cloud.y = Math.random() * (canvas.height - cloud.height);
    }
    c.drawImage(cloudImage, cloud.x, cloud.y, cloud.width, cloud.height);
  });

  // Update doggo position
  doggo.velocity += doggo.gravity;
  doggo.y += doggo.velocity;

  if (doggo.y + doggo.height > canvas.height) {
    doggo.y = canvas.height - doggo.height;
    doggo.velocity = 0;
  }
  if (doggo.y < 0) {
    doggo.y = 0;
    doggo.velocity = 0;
  }

  c.drawImage(doggoImage, doggo.x, doggo.y, doggo.width, doggo.height);

  requestAnimationFrame(animate);
}

console.log("Game script loaded");
