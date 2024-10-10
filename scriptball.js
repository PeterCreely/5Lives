

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
    const livesDisplay = document.getElementById('lives-display');
    const pointsDisplay = document.getElementById('points-display');
    const highestStreakDisplay = document.getElementById('highestStreak-display');
    const currentStreakDisplay = document.getElementById('currentStreak-display');
    const clickSound = new Audio('slap.wav');
    const failSound = new Audio('boo.wav');

    let ballTop = -50;
    let maxLives = 5;
    let points = 0;
    let ballscoreboard = [];
    let currentStreak = 0;
    let highestStreak = localStorage.getItem('highestStreak') ? parseInt(localStorage.getItem('highestStreak')) : 0;

    const updateLivesDisplay = () => {
        livesDisplay.innerText = `You Have ${maxLives} Lives`;
    };

    const updatepointsDisplay = () => {
        pointsDisplay.innerText = `You have ${points} points`;
    };

    const updatehighestStreakDisplay = () => {
    if (highestStreakDisplay) {
        highestStreakDisplay.innerText = `Hottest Streak ! ${highestStreak} ! in a row`;
    }
    };

    const updatecurrentStreakDisplay = () => {
    if (currentStreakDisplay) {
        currentStreakDisplay.innerText = `current streak ${currentStreak} in a row`;
    }
    };

    function updatePoints(newPoints) {
    if (newPoints > 0) {
        points += newPoints;
        currentStreak += newPoints;
        if (currentStreak > highestStreak) {
            highestStreak = currentStreak;
            localStorage.setItem('highestStreak', highestStreak); // Save to local storage
            updatehighestStreakDisplay();
            updatecurrentStreakDisplay();
        }
    } else {
        currentStreak = 0; // Reset current streak if no points are gained
    }
    displayStreaks();
    }
    
    function displayStreaks() {
    console.log(`Current Streak: ${currentStreak}, Highest Streak: ${highestStreak}`);
    updatehighestStreakDisplay();
    updatecurrentStreakDisplay();// Ensure the highest streak display is always updated
    }

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
        let speed;
        if (points <= 5) {
            let speed = getRandomSpeed(1, 5);
            ballTop += speed; 
        } else if (points > 5 && points <= 15) {
            let speed = getRandomSpeed(1, 10);
            ballTop += speed; 
        } else if (points > 15 && points <= 25) {
            let speed = getRandomSpeed(1, 15);
            ballTop += speed; 
        } else if (points > 25 && points <= 25) {
            let speed = getRandomSpeed(1, 15);
            ballTop += speed;

        } else if (points > 25 && points <= 35) {
            if (ballTop <= -50) {
                ballTop = playAreaHeight; // Start from the bottom
            }
            let speed = getRandomSpeed(1, 10);
            ballTop -= speed;
        } else if (points > 35 && points <= 45) {
            if (ballTop <= -50) {
                ballTop = playAreaHeight; // Start from the bottom
            }
            let speed = getRandomSpeed(1, 15);
            ballTop -= speed;
        } else if (points > 45 && points <= 55) {
            if (ballTop <= -50) {
                ballTop = playAreaHeight; // Start from the bottom
            }
            let speed = getRandomSpeed(1, 15);
            ballTop -= speed;
        }

        else {
            let speed = getRandomSpeed(1, 20);
            ballTop += speed; // Adjust the speed of the ball drop
            //ball.style.top = ballTop + 'px';
        }

        ball.style.top = ballTop + 'px';

        if (ballTop < playAreaHeight && ballTop > -50) {
            requestAnimationFrame(dropBall);
        } else {
            if (ballTop >= playAreaHeight) {
                ballTop = -50; // Reset the ball position to the top
            } else {
                ballTop = playAreaHeight; // Reset the ball position to the bottom
            }
            ball.style.top = ballTop + 'px';
            ball.style.left = getRandomXPosition() + 'px';
            maxLives--;
            failSound.play();
            console.log(`Lives remaining: ${maxLives}`);
            if (maxLives > 0) {
                let timeout = getRandomTimeout(1000, 5000);
                setTimeout(dropBall, timeout);
            } else {
                handleballGameOver();
            }
            updatePoints(0); 
        }
        updateLivesDisplay();
        updatepointsDisplay();
        updatehighestStreakDisplay();
    }
    
    function handleBallClick() {
        updatePoints(1);
        console.log(`Score: ${points}`); // Log the score
        ballTop = -50; // Reset the ball position to off-screen at the top
        ball.style.top = ballTop + 'px';
        ball.style.left = getRandomXPosition() + 'px'; // Set a new random x position

        const soundClone = clickSound.cloneNode(); // Clone the audio element
        soundClone.play();
    }
    
    ball.addEventListener('click', handleBallClick);
    ball.addEventListener('touchstart', handleBallClick);

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
        <h3>BALL SCOREBOARD</h3>
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
