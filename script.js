let dino = document.getElementById('dino');
let obstacle = document.getElementById('osbtacle');
let scoreDisplay = document.getElementById('score');
let isJumping = false;
let score = 0;

function jump() {
    if (!isJumping) {
        isJumping = true;
        let jumpCount = 0;
        let jumpInterval = setInterval(function() {
            if (jumpCount < 15) {
                dino.style.bottom = parseInt(dino.style.bottom) + 5 + 'px';
            } else if (isJumping < 30) {
                dino.style.bottom = parseInt(dino.style.bottom) - 5 + 'px';
            } else {
                clearInterval(jumpInterval);
                isJumping = false;
            }
            jumpCount++;
        }, 20);
    }

}

document.addEventListener('keydown', function(event) {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

    if (obstacleRight > 50 && obstacleRight < 90 && dinoBottom <= 30) {
        alert('Game Over! Your score: ' + socre);
        score = 0;
    }

    score++;
    scoreDisplay.textContent = 'Score: ' + score;
}, 100);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker Registered'));
}