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

// Evento para detectar a tecla de espaço

document.addEventListener('keydown', function(event) {
    if (event.code === 'space') {
        jump();
    }
});

// Função para verificar colisões e atualizar o score
setInterval(function() {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

    // Verificar se há colisão
    if (obstacleRight > 50 && obstacleRight < 90 && dinoBottom <= 30) {
        alert('Game Over! Your score: ' + score);
        score = 0;
        scoreDisplay.textContent = 'Score' + score; // Resetar o score na tela        
    } else {
        score++;
        scoreDisplay.textContent = 'Score: ' + score; // Atualiza a pontuação na tela
    }
}, 100); 