document.addEventListener('DOMContentLoaded', function () {
    const playArea = document.getElementById('playArea');
    const ball = document.getElementById('ball');
    const bomb = document.getElementById('bomb');
    const timer = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const duckButton = document.getElementById('duckButton');
    const blockButton = document.getElementById('blockButton');
    const playAreaWidth = playArea.clientWidth;
    const playAreaHeight = playArea.clientHeight;
    const ballWidth = ball.clientWidth;
    const ballHeight = ball.clientHeight;
    const levelDisplay = document.getElementById('level-display');

    let intervalId, timerId;
    let duckCount = 0;
    const maxDucks = 1;
    let blockCount = 0;
    const maxBlocks = 0;
    let timeLeft;

    let margin = 10;

    let duckButtonClicked = false;

    const failSound = new Audio('buzzer.mp3');
    const bombSound = new Audio('bomb.wav');

    const levels = [
        { speed: 10, maxBlocks: 3, timeLimit: 25, numBalls: 1, maxDucks: 1, bomb: 1 },
        { speed: 12, maxBlocks: 3, timeLimit: 30, numBalls: 2, maxDucks: 1, bomb: 2 },
        { speed: 3, maxBlocks: 3, timeLimit: 35, numBalls: 3, maxDucks: 1, bomb: 1 },
        { speed: 4, maxBlocks: 4, timeLimit: 35, numBalls: 4, maxDucks: 1, bomb: 1 },
        { speed: 5, maxBlocks: 5, timeLimit: 45, numBalls: 5, maxDucks: 1, bomb: 2 },
        // Add more levels as needed
    ];
    let currentLevel = 0;

   // levels[currentLevel].maxBlocks = 3;

    // console.log(levels[currentLevel].maxBlocks);

    const updatelevelDisplay = () => {
        levelDisplay.innerText = `Welcome to level ${currentLevel +1}...!`;
    };

    updatelevelDisplay();

    startButton.addEventListener('click', function () {
        blockButton.disabled = true;
        if (duckButtonClicked) {
            console.log('Start button clicked');
        const level = levels[currentLevel];
        updatelevelDisplay();
        timeLeft = level.timeLimit; // Initialize timeLeft for the current level
        timer.textContent = timeLeft;

        for (let i = 0; i < level.numBalls; i++) {
            createBall(level.speed);
            createBomb(level.speed);

        }
            timerId = setInterval(updateTimer, 1000);
            ballintervalId = setInterval(moveBall, 20);
            bombintervalId = setInterval(moveBomb, 20);
        } else {
            console.log('Please click the duck button first');
        }

    });

    function createBall(speed) {
        const ball = document.createElement('img');
        ball.classList.add('ball');
        ball.style.width = '20px';
        ball.style.height = '20px';
        ball.style.position = 'absolute';
        ball.src = 'ball1.png'; // Set the image source
        playArea.appendChild(ball);

        let x = Math.random() * (playAreaWidth - ball.clientWidth);
        let y = Math.random() * (playAreaHeight - ball.clientHeight);
        let dx = (Math.random() - 0.5) * speed;
        let dy = (Math.random() - 0.5) * speed;
       // let margin = 10;

        while (isOverlapping(x, y, ball.clientWidth, ball.clientHeight)) {
            x = Math.random() * (playAreaWidth - ball.clientWidth);
            y = Math.random() * (playAreaHeight - ball.clientHeight);
        }

        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;

        // Store ball's movement data
        ball.dataset.dx = dx;
        ball.dataset.dy = dy;

        console.log('Ball created:', { x, y, dx, dy });

    }

    function createBomb(speed) {
        const bomb = document.createElement('img'); // Use 'img' instead of 'div'
        bomb.classList.add('bomb');
        bomb.style.width = '20px';
        bomb.style.height = '20px';
        bomb.style.position = 'absolute';
        bomb.src = 'bomb.png'; // Set the image source
        playArea.appendChild(bomb);

        let x = Math.random() * (playAreaWidth - bomb.clientWidth);
        let y = Math.random() * (playAreaHeight - bomb.clientHeight);
        let dx = (Math.random() - 0.5) * speed;
        let dy = (Math.random() - 0.5) * speed;
        let margin = 10;

        while (isOverlapping(x, y, bomb.clientWidth, bomb.clientHeight)) {
            x = Math.random() * (playAreaWidth - bomb.clientWidth);
            y = Math.random() * (playAreaHeight - bomb.clientHeight);
        }

        bomb.style.left = `${x}px`;
        bomb.style.top = `${y}px`;

        // Store ball's movement data
        bomb.dataset.dx = dx;
        bomb.dataset.dy = dy;

        console.log('bomb created:', { x, y, dx, dy });

    }
    function moveBall() {
        const balls = document.querySelectorAll('.ball');
        balls.forEach(ball => {
            let x = parseFloat(ball.style.left);
            let y = parseFloat(ball.style.top);
            let dx = parseFloat(ball.dataset.dx);
            let dy = parseFloat(ball.dataset.dy);

            x += dx;
            y += dy;

            // Check for collision with walls and reverse direction if needed
            if (x <= 0 || x >= playAreaWidth - ball.clientWidth) {
                dx = -dx;
            }
            if (y <= 0 || y >= playAreaHeight - ball.clientHeight) {
                dy = -dy;
            }

            ball.style.left = `${x}px`;
            ball.style.top = `${y}px`;

            // Update ball's movement data
            ball.dataset.dx = dx;
            ball.dataset.dy = dy;

          //  console.log('Ball moved:', { x, y, dx, dy });

            const elements = document.querySelectorAll('.draggable');
            elements.forEach(element => {
                const elementRect = element.getBoundingClientRect();
                const ballRect = ball.getBoundingClientRect();
                if (ballRect.left < elementRect.right &&
                    ballRect.right > elementRect.left &&
                    ballRect.top < elementRect.bottom &&
                    ballRect.bottom > elementRect.top) {
                    if (element.alt === 'Duck') {
                        failSound.play();
                        clearInterval(ballintervalId);
                        clearInterval(bombintervalId);
                        clearInterval(timerId);
                        alert('Game Over! The ball touched the duck. Your Duck is dead!');
                        currentLevel = 0;
                        restartGame();
                    } else {
                        const overlapX = Math.min(ballRect.right - elementRect.left, elementRect.right - ballRect.left);
                        const overlapY = Math.min(ballRect.bottom - elementRect.top, elementRect.bottom - ballRect.top);

                        if (overlapX < overlapY) {
                            dx = -dx; // Reflect horizontally
                        } else {
                            dy = -dy; // Reflect vertically
                        }

                        ball.dataset.dx = dx;
                        ball.dataset.dy = dy;
                    }
                }
            });
        });
    }

    function moveBomb() {
        const bombs = document.querySelectorAll('.bomb');
        bombs.forEach(bomb => {
            let x = parseFloat(bomb.style.left);
            let y = parseFloat(bomb.style.top);
            let dx = parseFloat(bomb.dataset.dx);
            let dy = parseFloat(bomb.dataset.dy);

            x += dx;
            y += dy;

            // Check for collision with walls and reverse direction if needed
            if (x <= 0 || x >= playAreaWidth - bomb.clientWidth) {
                dx = -dx;
            }
            if (y <= 0 || y >= playAreaHeight - bomb.clientHeight) {
                dy = -dy;
            }

            bomb.style.left = `${x}px`;
            bomb.style.top = `${y}px`;

            // Update ball's movement data
            bomb.dataset.dx = dx;
            bomb.dataset.dy = dy;

            console.log('bomb moved:', { x, y, dx, dy });

            const elements = document.querySelectorAll('.draggable');
            elements.forEach(element => {
                const elementRect = element.getBoundingClientRect();
                const bombRect = bomb.getBoundingClientRect();
                if (bombRect.left < elementRect.right &&
                    bombRect.right > elementRect.left &&
                    bombRect.top < elementRect.bottom &&
                    bombRect.bottom > elementRect.top) {
                    if (element.alt === 'Block') {
                        bombSound.play();
                        element.remove();
                        bomb.remove(); 
                    } else {
                        const overlapX = Math.min(bombRect.right - elementRect.left, elementRect.right - bombRect.left);
                        const overlapY = Math.min(bombRect.bottom - elementRect.top, elementRect.bottom - bombRect.top);

                        if (overlapX < overlapY) {
                            dx = -dx; // Reflect horizontally
                        } else {
                            dy = -dy; // Reflect vertically
                        }
                    }
                }
            });
        });
    }

    function resetGame() {
        clearInterval(bombintervalId);
        clearInterval(ballintervalId);
        clearInterval(timerId);
        document.querySelectorAll('.ball').forEach(ball => ball.remove());
        document.querySelectorAll('.bomb').forEach(bomb => bomb.remove());
        timer.textContent = levels[currentLevel].timeLimit;
        timeLeft = levels[currentLevel].timeLimit;

        duckCount = 0;
        blockCount = 0;
        duckButtonClicked = false;
        blockButton.disabled = false;
        // Remove all ducks and blocks
        document.querySelectorAll('.draggable').forEach(element => element.remove());

        updatelevelDisplay();
    }
    function restartGame() {
        clearInterval(bombintervalId);
        clearInterval(ballintervalId);
            clearInterval(timerId);
        document.querySelectorAll('.ball').forEach(ball => ball.remove());
        document.querySelectorAll('.bomb').forEach(bomb => bomb.remove());
            timer.textContent = levels[currentLevel].timeLimit;
            timeLeft = levels[currentLevel].timeLimit;

            duckCount = 0;
        blockCount = 0;
        duckButtonClicked = false;
        blockButton.disabled = false;

            document.querySelectorAll('.draggable').forEach(element => element.remove());
            updatelevelDisplay();
        }

    function updateTimer() {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(bombintervalId);
            clearInterval(ballintervalId);
            clearInterval(timerId);
            if (currentLevel >= levels.length - 1) {
                alert('Congratulations! You have completed all levels!');
                resetGame();
            } else {
                alert('Wooo...! Your Duck is Safe! You Won!');
                currentLevel++;
                resetGame();
            }
        }
    }

    duckButton.addEventListener('click', function () {
        duckButtonClicked = true;
        console.log('Duck button clicked');
        if (duckCount < maxDucks) {
            const duck = document.createElement('img');
            duck.src = 'duck1.png';
            duck.alt = 'Duck';
            duck.classList.add('draggable');
            duck.style.left = '50%';
            duck.style.top = '50%';
            duck.style.transform = 'translate(-50%, -50%)';

            playArea.appendChild(duck);
            makeDraggable(duck);

            duckCount++;
        } else {
            alert('Maximum number of ducks reached!');
        }
    });

    blockButton.addEventListener('click', function () {
        if (blockCount < levels[currentLevel].maxBlocks) {
            const block = document.createElement('img');
            block.src = 'block.png';
            block.alt = 'Block';
            block.classList.add('draggable');
            //block.style.position = 'absolute';
            block.style.left = '50%';
            block.style.top = '50%';
            block.style.transform = '';

            playArea.appendChild(block);
            makeDraggable(block);

            blockCount++;
        } else {
            alert('Maximum number of blocks reached!');
        }
    });

    function makeDraggable(element) {
        let isDragging = false;
        let offsetX, offsetY;

        element.addEventListener('mousedown', startDrag);
        element.addEventListener('touchstart', startDrag, { passive: false });

        function startDrag(e) {
            isDragging = true;
            const startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
            const startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
            const rect = element.getBoundingClientRect();
            const playAreaRect = playArea.getBoundingClientRect();

            offsetX = startX - rect.left;
            offsetY = startY - rect.top;

            console.log('Start Drag:', { startX, startY, rect, offsetX, offsetY });

            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchend', endDrag);

            e.preventDefault();
        }

        function drag(e) {
            if (!isDragging) return;

            const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
            const currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

            const newLeft = currentX - offsetX - playArea.getBoundingClientRect().left;
            const newTop = currentY - offsetY - playArea.getBoundingClientRect().top;

            const playAreaRect = playArea.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();

            if (newLeft >= 0 && newLeft + elementRect.width <= playAreaRect.width) {
                element.style.left = `${newLeft}px`;
            }
            if (newTop >= 0 && newTop + elementRect.height <= playAreaRect.height) {
                element.style.top = `${newTop}px`;
            }

            console.log('Dragging:', { currentX, currentY, newLeft, newTop });

            e.preventDefault();
        }


        function endDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);
            element.removeEventListener('mousedown', startDrag);
            element.removeEventListener('touchstart', startDrag);

            console.log('End Drag');
        }
    }

    function isOverlapping(x, y, width, height) {
        console.log('Checking overlap with margin:', margin); 
        const elements = document.querySelectorAll('.draggable');
        for (let element of elements) {
            const rect = element.getBoundingClientRect();
            if (x < rect.right + margin && x + width > rect.left - margin &&
                y < rect.bottom + margin && y + height > rect.top - margin) {
                return true;
            }
        }
        return false;
    }

});

document.getElementById('infoButtonflip').addEventListener('mouseover', function () {
    document.getElementById('infoText').classList.add('visible');
});

document.getElementById('infoButtonflip').addEventListener('mouseout', function () {
    document.getElementById('infoText').classList.remove('visible');
});

document.getElementById('infoButtonflip').addEventListener('click', function () {
    var infoText = document.getElementById('infoText');
    if (infoText.classList.contains('visible')) {
        infoText.classList.remove('visible');
    } else {
        infoText.classList.add('visible');
    }
});
