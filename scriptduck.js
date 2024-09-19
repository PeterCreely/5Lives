document.addEventListener('DOMContentLoaded', function () {
    const playArea = document.getElementById('playArea');
    const ball = document.getElementById('ball');
    const timer = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const duckButton = document.getElementById('duckButton');
    const blockButton = document.getElementById('blockButton');
    const playAreaWidth = playArea.clientWidth;
    const playAreaHeight = playArea.clientHeight;
    const ballWidth = ball.clientWidth;
    const ballHeight = ball.clientHeight;

    let intervalId, timerId;
    let duckCount = 0;
    const maxDucks = 1;
    let blockCount = 0;
    const maxBlocks = 3;


    startButton.addEventListener('click', function () {
        let x = Math.random() * (playAreaWidth - ballWidth);
        let y = Math.random() * (playAreaHeight - ballHeight);
        let dx = (Math.random() - 0.5) * 10; // Random speed and direction
        let dy = (Math.random() - 0.5) * 10;
        let timeLeft = 30;

        function moveBall() {
            x += dx;
            y += dy;

            // Check for collision with walls and reverse direction if needed
            if (x <= 0 || x >= playAreaWidth - ballWidth) {
                dx = -dx;
            }
            if (y <= 0 || y >= playAreaHeight - ballHeight) {
                dy = -dy;
            }

            ball.style.left = `${x}px`;
            ball.style.top = `${y}px`;

            const elements = document.querySelectorAll('.draggable');
            elements.forEach(element => {
                const elementRect = element.getBoundingClientRect();
                const ballRect = ball.getBoundingClientRect();
                if (ballRect.left < elementRect.right &&
                    ballRect.right > elementRect.left &&
                    ballRect.top < elementRect.bottom &&
                    ballRect.bottom > elementRect.top) {
                    if (element.alt === 'Duck') {
                        clearInterval(intervalId);
                        clearInterval(timerId);
                        alert('Game Over! The ball touched the duck. Your Duck is dead!');
                        resetGame();
                    } else {
                        const overlapX = Math.min(ballRect.right - elementRect.left, elementRect.right - ballRect.left);
                        const overlapY = Math.min(ballRect.bottom - elementRect.top, elementRect.bottom - ballRect.top);

                        if (overlapX < overlapY) {
                            dx = -dx; // Reflect horizontally
                        } else {
                            dy = -dy; // Reflect vertically
                        }
                    }
                }
            });
        }

        function resetGame() {
            clearInterval(intervalId);
            clearInterval(timerId);
            ball.style.left = '0px';
            ball.style.top = '0px';
            timer.textContent = '30';
            timeLeft = 30;
            duckCount = 0;
            blockCount = 0;

            // Remove all ducks and blocks
            document.querySelectorAll('.draggable').forEach(element => element.remove());
        }
        function updateTimer() {
            timeLeft--;
            timer.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(intervalId);
                clearInterval(timerId);
                alert('Wooo...! Your Duck is Safe! You Won!')
                resetGame();
            }
        }

        // Start moving the ball and updating the timer
        intervalId = setInterval(moveBall, 20);
        timerId = setInterval(updateTimer, 1000);

        // Initially position the ball randomly
        moveBall();
    });


    duckButton.addEventListener('click', function () {
        if (duckCount < maxDucks) {
        // Create a new image element
        const duck = document.createElement('img');
        duck.src = 'duck1.png'; // Path to your duck image
        duck.alt = 'Duck';
        duck.classList.add('draggable');
        duck.style.left = '50%';
        duck.style.top = '50%';
        duck.style.transform = 'translate(-50%, -50%)';

        // Append the duck to the play area
        playArea.appendChild(duck);

        // Make the duck draggable
            makeDraggable(duck);

            duckCount++;
        } else {
            alert('Maximum number of ducks reached!');
        }
    });

    blockButton.addEventListener('click', function () {
        if (blockCount < maxBlocks) {
        // Create a new image element
        const block = document.createElement('img');
        block.src = 'block.png'; // Path to your duck image
        block.alt = 'Block';
        block.classList.add('draggable');
        block.style.left = '50%';
        block.style.top = '50%';
        block.style.transform = 'translate(-50%, -50%)';

        playArea.appendChild(block);

            makeDraggable(block);

            blockCount++;
        } else {
            alert('Maximum number of blocks reached!');
        }
    });

    function makeDraggable(element) {
        let isDragging = false;
        let startX, startY, initialX, initialY;

        element.addEventListener('mousedown', startDrag);
        element.addEventListener('touchstart', startDrag);

        function startDrag(e) {
            isDragging = true;
            startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
            startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
            initialX = parseInt(element.style.left, 10);
            initialY = parseInt(element.style.top, 10);

            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag);
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchend', endDrag);
        }

        function drag(e) {
            if (!isDragging) return;

            const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
            const currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

            const dx = currentX - startX;
            const dy = currentY - startY;

            element.style.left = `${initialX + dx}px`;
            element.style.top = `${initialY + dy}px`;
        }

        function endDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);

            element.removeEventListener('mousedown', startDrag);
            element.removeEventListener('touchstart', startDrag);
        }
    }
});
