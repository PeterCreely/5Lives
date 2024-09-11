

document.addEventListener('DOMContentLoaded', () => {

    const ball = document.getElementById('ball');
    const playArea = document.getElementById('playArea');
    const ballgameOverModal = document.getElementById('ballgameOverModal');
    const ballgameOverMessage = document.getElementById('ballgameOverMessage');
    const closeModal = document.querySelector('.close');
    const submitNameButton = document.getElementById('submitNameButton');
    const playerNameInput = document.getElementById('playerNameInput');
    const ballscoreboardDiv = document.getElementById('ballscoreboard');
    const startGameModal = document.getElementById('startGameModal');
    const startGameButton = document.getElementById('startGameButton');
    const playAreaHeight = playArea.clientHeight;
    const playAreaWidth = playArea.clientWidth
    //const closeballGameOverModal = document.getElementsByClassName('close')[0];
    const livesDisplay = document.getElementById('lives-display');
    const pointsDisplay = document.getElementById('points-display');

    let ballTop = -50;
    let maxLives = 5;
    let points = 0;
    let ballscoreboard = [];

    const updateLivesDisplay = () => {
        livesDisplay.innerText = `You Have ${maxLives} Balls`;
    };

    const updatepointsDisplay = () => {
        pointsDisplay.innerText = `You have ${points} points`;
    };

    //updateLivesDisplay();
    //updatepointsDisplay();

    function getRandomSpeed(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomTimeout(min, max) {
        return Math.random() * (max - min) + min;
    }
    function getRandomXPosition() {
        return Math.random() * (playAreaWidth - ball.clientWidth);
    }

    function dropBall() {
        let speed = getRandomSpeed(1, 20);
        ballTop += speed; // Adjust the speed of the ball drop
        ball.style.top = ballTop + 'px';
 
        if (ballTop < playAreaHeight) {
            requestAnimationFrame(dropBall);
        } else {
            ballTop = -50; // Reset the ball position to the top
            ball.style.top = ballTop + 'px';
            ball.style.left = getRandomXPosition() + 'px';
            maxLives--;
            console.log(`Lives remaining: ${maxLives}`); 
            if (maxLives > 0) {
                let timeout = getRandomTimeout(1000, 5000);
                setTimeout(dropBall, timeout);
            } else {
                handleballGameOver();
            }
        }
        updateLivesDisplay();
        updatepointsDisplay();
        //displayballScoreboard();
    }

   /* ball.addEventListener('click', () => {
        points++; // Increase the score
        console.log(`Points: ${points}`); // Log the score
        ballTop = -50; // Reset the ball position to off-screen at the top
        ball.style.top = ballTop + 'px';
        ball.style.left = getRandomXPosition() + 'px'; // Set a new random x position

    }); */


    function handleBallClick() {
        points++; // Increase the score
        console.log(`Score: ${points}`); // Log the score
        ballTop = -50; // Reset the ball position to off-screen at the top
        ball.style.top = ballTop + 'px';
        ball.style.left = getRandomXPosition() + 'px'; // Set a new random x position
    }

    const handleballGameOver = () => {
        ballgameOverMessage.innerHTML = `<strong>Game Over!</strong><br>You scored ${points} points.<br>Enter your name for the scoreboard:`;
        ballgameOverModal.style.display = 'block';
    };

    closeModal.onclick = () => {
        ballgameOverModal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target == ballgameOverModal) {
            ballgameOverModal.style.display = 'none';
        }
    };

    // Handle name submission
    submitNameButton.onclick = () => {
        const playerName = playerNameInput.value;
        if (playerName) {
            updateballScoreboard(playerName, points);
            ballgameOverModal.style.display = 'none';
            location.reload(); // Reload the page or reset the game as needed
        } else {
            alert("Please enter your name.");
        }
    };

    startGameButton.onclick = () => {
        startGameModal.style.display = 'none'; // Hide the start game modal
        resetGame(); // Reset the game and start dropping the ball
    };

    const displayballScoreboard = () => {
       // const ballscoreboardDiv = document.getElementById('ballscoreboard');
        ballscoreboardDiv.innerHTML = `
        <h3>SCOREBOARD</h3>
        <div class="header">
            <span>No.</span>
            <span>Name</span>
            <span>Score</span>
        </div>
    `;
        ballscoreboard.forEach((entry, index) => {
            ballscoreboardDiv.innerHTML += `
            <div class="entry">
                <span>${index + 1}</span>
                <span>${entry.name}</span>
                <span>${entry.points}</span>
            </div>
        `;
        });
    };

    const loadballScoreboard = () => {
        const savedScoreboard = localStorage.getItem('ballscoreboard');
        if (savedScoreboard) {
            ballscoreboard = JSON.parse(savedScoreboard);
            displayballScoreboard();
        }
    };

    const updateballScoreboard = (name, points) => {
        ballscoreboard.push({ name, points });
        // Sort the scoreboard by points in descending order
        ballscoreboard.sort((a, b) => b.points - a.points);
        localStorage.setItem('ballscoreboard', JSON.stringify(ballscoreboard)); // Save to localStorage
        displayballScoreboard();
    };


   // When the user clicks on <span> (x), close the modal
   // closeballGameOverModal.onclick = () => {
    //   ballgameOverModal.style.display = 'none';
   // };

    const resetGame = () => {
        ballTop = -50; // Reset the ball position to off-screen at the top
        maxLives = 5; // Reset lives
        score = 0; // Reset score
        dropBall(); // Start dropping the ball
    };

    closeModal.addEventListener('click', () => {
        ballgameOverModal.style.display = 'none';
    });


    loadballScoreboard(); 

    startGameModal.style.display = 'block';
});
