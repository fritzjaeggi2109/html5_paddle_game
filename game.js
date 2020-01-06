const FPS = 30;
let ballSpeedX = 5;
let ballSpeedY = 7;
let ballX = 100;
let ballY = 100;
let ballRadius = 10;
let canvas, canvasContext;

// Draw the game board
function drawBoard(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

//Draw the ball
function drawBall(posX, posY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(posX, posY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

//Set the X direction of the ball
function ballXDirection() {
    ballX += ballSpeedX;
    if(ballX > (canvas.width - ballRadius)){
        ballSpeedX = ballSpeedX * -1;
    }else if(ballX < (0 + ballRadius )){
        ballSpeedX = ballSpeedX * -1;
    }
}

//Set the Y direction of the ball
function ballYDirection() {
    ballY += ballSpeedY;
    if(ballY > (canvas.height - ballRadius)){
        ballSpeedY = ballSpeedY * -1;
    }else if(ballY < (0 + ballRadius )){
        ballSpeedY = ballSpeedY * -1;
    }
}

//Function called every frame
function updateAll() {
    drawBoard(0,0,canvas.width,canvas.height,'black');
    drawBall(ballX, ballY, ballRadius, 'white');
    ballXDirection();
    ballYDirection();
}

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(updateAll, 1000/FPS);
}