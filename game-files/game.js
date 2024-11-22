var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.style.position = 'absolute';
canvas.height = window.innerHeight / 2;
canvas.style.position = 'absolute';
canvas.style.top = `${window.innerHeight / 2}px`;


var c = canvas.getContext('2d');

c.fillRect(900, 500, 50, 50);
c.fillRect(1000, 600, 50, 50);
c.fillRect(1300, 400, 50, 50);
c.fillRect(650, 500, 50, 50);
c.fillRect(500, 350, 50, 50);
console.log(canvas)