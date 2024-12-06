var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.style.position = 'absolute';
canvas.style.top = `${window.innerHeight / 3}px`;

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
  x: 600,
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
