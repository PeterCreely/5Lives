document.addEventListener('DOMContentLoaded', (event) => {
    const popArea = document.getElementById('popArea');
    let score = 0;
    let maxLives = 5;
    let level = 1;
    const bubbleSize = 30;
    const bubbles = [];
    const livesDisplay = document.getElementById('lives-display');
    const failSound = new Audio('buzzer.mp3');

    const list1 = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const symbols = ['-', '+', '*', '/'];
    const list2 = [1, 3, 5, 7, 9, 12, 14, 16, 18, 10, 21, 23, 25, 27, 29, 30, 32]
    const symbols2 = ['-', '+'];
    const list3 = [1, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const symbols3 = ['*', '/'];
    const list4 = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    const symbols4 = ['-', '/'];
    const list5 = [-1, -2, -3, -5, -6, -7, -8, -9, -10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const symbols5 = ['-', '+'];

    const levelModal = document.getElementById('levelModal');
    const levelMessage = document.getElementById('poplevelMessage');
    const closeModal = document.getElementsByClassName('close')[0];
    const continueButton = document.getElementById('continueButton');
    const popgameOverModal = document.getElementById('popgameOverModal');
    const popgameOverMessage = document.getElementById('popgameOverMessage');
    const submitNameButton = document.getElementById('submitNameButton');
    const playerNameInput = document.getElementById('playerNameInput');

    // let popscoreboard = localStorage.getItem('popscoreboard') ? JSON.parse(localStorage.getItem('popscoreboard')) : [];

    let popscoreboard = [];



    if (levelMessage && levelModal && popgameOverModal) {
        function showModal(message) {
            console.log('showModal called with message:', message); // Debug log
            levelMessage.textContent = message;
            levelModal.style.display = 'block';
            popgameOverModal.style.display = 'block !important';
            popgameOverModal.style.visibility = 'visible !important';
            popgameOverModal.style.opacity = '1 !important';
            loadpopscoreboard();
        }

        window.onload = () => {
            showModal('Game Over');
        };
    } else {
        console.error('One or more elements are not found');
    }

    closeModal.onclick = function () {
        levelModal.style.display = 'none';
        popgameOverModal.style.display = 'none';
    }

    continueButton.onclick = function () {
        levelModal.style.display = 'none';
        transitionToNextLevel();
    }

    window.onclick = function (event) {
        if (event.target == levelModal) {
            levelModal.style.display = 'none';
            popgameOverModal.style.display = 'none';
        }
    }

    function showModal(message) {
        console.log('showModal called with message:', message); // Debug log
        levelMessage.textContent = message;
        levelModal.style.display = 'block';
        popgameOverModal.style.display = 'block';
        popgameOverModal.style.visibility = 'visible';
        popgameOverModal.style.opacity = '1';
    }

    const handlepopGameOver = () => {
        popgameOverMessage.innerHTML = `<strong>Game Over!</strong><br>You scored ${score}  points.<br>Enter your name for the scoreboard:`;
        popgameOverModal.style.display = 'block';
        console.log("Game Over modal should be displayed now.");
        console.log(popgameOverModal);
    };

    submitNameButton.onclick = () => {
        const playerName = playerNameInput.value;
        if (playerName) {
            updatepopscoreboard(playerName, score);
            popgameOverModal.style.display = 'none';
            location.reload(); // Reload the page or reset the game as needed
        } else {
            alert("Please enter your name.");
        }
    };

    const updatepopscoreboard = (playerName, score) => {
        popscoreboard.push({ playerName, score });
        // Sort the scoreboard by points in descending order
        popscoreboard.sort((a, b) => b.score - a.score);
        localStorage.setItem('popscoreboard', JSON.stringify(popscoreboard)); // Save to localStorage
        displaypopscoreboard();
    };

    const displaypopscoreboard = () => {
        const popscoreboardDiv = document.getElementById('popscoreboard');
        popscoreboardDiv.innerHTML = `
        <h3>POP SCOREBOARD</h3>
        <div class="header">
            <span>No.</span>
            <span>Name</span>
            <span>Score</span>
        </div>
    `;
        popscoreboard.forEach((entry, index) => {
            popscoreboardDiv.innerHTML += `
            <div class="entry">
                <span>${index + 1}</span>
                <span>${entry.playerName}</span>
                <span>${entry.score}</span>
            </div>
        `;
        });
    };

    const loadpopscoreboard = () => {
        const savedpopscoreboard = localStorage.getItem('popscoreboard');
        if (savedpopscoreboard) {
            popscoreboard = JSON.parse(savedpopscoreboard);
            displaypopscoreboard();
        }
    };

    const updateLivesDisplay = () => {
        livesDisplay.innerText = `You Have ${maxLives} Lives`;
    };

    function initializeLevel() {
        //score = 0;
        maxLives = 5;
        bubbles.length = 0; // Clear previous bubbles
        popArea.innerHTML = ''; // Clear popArea
        numberPopsLevel1();
        enableAllButtons(); // Enable all buttons for the new level
        updateLivesDisplay();
    }

    function initializeLevel2() {
        maxLives = 5;
        bubbles.length = 0; 
        popArea.innerHTML = ''; 
        numberPopsLevel2();
        enableAllButtons();
        updateLivesDisplay();
    }

    function initializeLevel3() {
       // score = [];
        maxLives = 5;
        bubbles.length = 0; 
        popArea.innerHTML = ''; 
        numberPopsLevel3();
        enableAllButtons(); 
        updateLivesDisplay();
    }

    function initializeLevel4() {
       // score = [];
        maxLives = 5;
        bubbles.length = 0;
        popArea.innerHTML = '';
        numberPopsLevel4();
        enableAllButtons();
        updateLivesDisplay();
    }

    function initializeLevel5() {
     //   score = [];
        maxLives = 5;
        bubbles.length = 0;
        popArea.innerHTML = '';
        numberPopsLevel5();
        enableAllButtons();
        updateLivesDisplay();
    }

    function applyButtonStyling(button) {
        button.style.backgroundColor = 'white';
        button.style.borderColor = 'white';
        button.disabled = false;
        button.style.color = 'black';
    }

    function createBubble(id, text) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.id = id;
        bubble.innerText = text;

        let position;
        do {
            position = {
                top: Math.random() * (popArea.clientHeight - bubbleSize),
                left: Math.random() * (popArea.clientWidth - bubbleSize)
            };
        } while (isOverlapping(position));

        bubble.style.top = `${position.top}px`;
        bubble.style.left = `${position.left}px`;
        bubble.addEventListener('click', buttonClickHandler);
        applyButtonStyling(bubble);
        popArea.appendChild(bubble);
        bubbles.push(position);
    }

    function isOverlapping(position) {
        for (const bubble of bubbles) {
            const distance = Math.sqrt(
                Math.pow(bubble.left - position.left, 2) + Math.pow(bubble.top - position.top, 2)
            );
            if (distance < bubbleSize) {
                return true;
            }
        }
        return false;
    }

    function buttonClickHandler(event) {
        const bubble = event.target;
        fillBox(bubble.innerText);
        bubble.remove(); // Remove the button after it is clicked
    }

    function fillBox(content) {
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        const box3 = document.getElementById('box3');
        const box5 = document.getElementById('box5');

        if (!box1.textContent) {
            box1.textContent = content;
        } else if (!box2.textContent && symbols.includes(content)) {
            box2.textContent = content;
        } else if (!box3.textContent) {
            box3.textContent = content;
        } else if (!box5.textContent) {
            box5.textContent = content;
        }
    }

    function calculateResult() {
        const box1 = document.getElementById('box1').textContent;
        const box2 = document.getElementById('box2').textContent;
        const box3 = document.getElementById('box3').textContent;
        const box5 = document.getElementById('box5').textContent;

        if (box1 && box2 && box3 && box5) {
            let expectedResult;
            switch (box2) {
                case '+':
                    expectedResult = parseInt(box1) + parseInt(box3);
                    break;
                case '-':
                    expectedResult = parseInt(box1) - parseInt(box3);
                    break;
                case '*':
                    expectedResult = parseInt(box1) * parseInt(box3);
                    break;
                case '/':
                    expectedResult = parseInt(box1) / parseInt(box3);
                    break;
                default:
                    expectedResult = 'Error';
            }

            if (expectedResult == parseInt(box5)) {
                document.getElementById('resultBox').textContent = 'Correct';
                resultBox.classList.remove('placeholder');
                score += expectedResult;
            } else {
                failSound.play();
                document.getElementById('resultBox').textContent = 'Wrong';
                resultBox.classList.remove('placeholder');
                score -= Math.abs(expectedResult); // Subtract the absolute value of the expected result
            }
            document.getElementById('scoreBox').textContent = `Score: ${score}`;
        } else {
            document.getElementById('resultBox').textContent = 'Fill all boxes';
            resultBox.classList.remove('placeholder');
        }
        document.getElementById('calculateButton').disabled = true;
    }

    function clearBoxes() {
        document.getElementById('box1').textContent = '';
        document.getElementById('box2').textContent = '';
        document.getElementById('box3').textContent = '';
        document.getElementById('box5').textContent = '';
        document.getElementById('resultBox').textContent = 'Keep Going!';
        resultBox.classList.remove('placeholder');

        // Ensure all used buttons remain disabled
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            if (bubble.style.backgroundColor === 'grey') {
                bubble.disabled = true;
            }
        });
        maxLives--;
        updateLivesDisplay();
        if (maxLives <= 0) {
            if (level < 5) {
                console.log('Showing modal for level:', level + 1); // Debug log
                alert(`Welcome to Level ${level + 1}!`);
                showModal(`Welcome to Level ${level + 1}!`);
            }
            level++;
            transitionToNextLevel();
        } else {
            // Ensure all used buttons remain disabled
            const bubbles = document.querySelectorAll('.bubble');
            bubbles.forEach(bubble => {
                if (bubble.style.backgroundColor === 'grey') {
                    bubble.disabled = true;
                }
            });
        }
        document.getElementById('calculateButton').disabled = false;
    }

    function isLevel5Completed() {
        return maxLives <= 0;
    }

    function onLifeLost() {
        maxLives--;
        updateLivesDisplay(); // Update the display to show remaining lives
        if (isLevel5Completed()) {
            handlepopGameOver();
        }
    }

    // Example function to simulate losing a life
    function loseLife() {
        onLifeLost();
    }

    function transitionToNextLevel() {
        switch (level) {
            case 2:
                initializeLevel2();
                break;
            case 3:
                initializeLevel3();
                break;
            case 4:
                initializeLevel4();
                break;
            case 5:
                initializeLevel5();
                break;
            default:
                // alert('Congratulations! You have completed all levels.');
                // showModal('Congratulations! You have completed all levels.');
               // popgameOverMessage.innerHTML = `<strong>Game Over!</strong><br>You scored ${score}  points.<br>Enter your name for the scoreboard:`;
             //   popgameOverModal.style.display = 'block';
                handlepopGameOver();
                break;
        }
    }

    function enableAllButtons() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            bubble.disabled = false;
            bubble.style.backgroundColor = 'white';
        });
    }

    function numberPopsLevel1() {
        for (let i = 1; i <= 75; i++) {
            const randomIndex = Math.floor(Math.random() * list1.length);
            const randomNumber = list1[randomIndex];
            createBubble(`btnBubble${i.toString().padStart(3, '0')}`, randomNumber);
        }
        for (let i = 1; i <= 5; i++) {
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            createBubble(`symbolBubble${i.toString().padStart(3, '0')}`, randomSymbol);
        }
    }

    function numberPopsLevel2() {
        for (let i = 1; i <= 75; i++) {
            const randomIndex = Math.floor(Math.random() * list2.length);
            const randomNumber = list2[randomIndex];
            createBubble(`btnBubble${i.toString().padStart(3, '0')}`, randomNumber);
        }
        for (let i = 1; i <= 5; i++) {
            const randomSymbol = symbols2[Math.floor(Math.random() * symbols2.length)];
            createBubble(`symbolBubble${i.toString().padStart(3, '0')}`, randomSymbol);
        }
    }

    function numberPopsLevel3() {
        for (let i = 1; i <= 70; i++) {
            const randomIndex = Math.floor(Math.random() * list3.length);
            const randomNumber = list3[randomIndex];
            createBubble(`btnBubble${i.toString().padStart(3, '0')}`, randomNumber);
        }
        for (let i = 1; i <= 5; i++) {
            const randomSymbol = symbols3[Math.floor(Math.random() * symbols3.length)];
            createBubble(`symbolBubble${i.toString().padStart(3, '0')}`, randomSymbol);
        }
    }

    function numberPopsLevel4() {
        for (let i = 1; i <= 65; i++) {
            const randomIndex = Math.floor(Math.random() * list4.length);
            const randomNumber = list4[randomIndex];
            createBubble(`btnBubble${i.toString().padStart(3, '0')}`, randomNumber);
        }
        for (let i = 1; i <= 5; i++) {
            const randomSymbol = symbols4[Math.floor(Math.random() * symbols4.length)];
            createBubble(`symbolBubble${i.toString().padStart(3, '0')}`, randomSymbol);
        }
    }

    function numberPopsLevel5() {
        for (let i = 1; i <= 65; i++) {
            const randomIndex = Math.floor(Math.random() * list5.length);
            const randomNumber = list5[randomIndex];
            createBubble(`btnBubble${i.toString().padStart(3, '0')}`, randomNumber);
        }
        for (let i = 1; i <= 5; i++) {
            const randomSymbol = symbols5[Math.floor(Math.random() * symbols5.length)];
            createBubble(`symbolBubble${i.toString().padStart(3, '0')}`, randomSymbol);
        }
    }

    document.getElementById('calculateButton').addEventListener('click', calculateResult);
    document.getElementById('clearButton').addEventListener('click', clearBoxes);

    initializeLevel();
    updateLivesDisplay();
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


document.getElementById('colourButton').onclick = function () {
    var dropdown = document.getElementById('color-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
};

// Function to change the background color and save it to localStorage
function changeColor(backgroundColor, textColor) {
    document.body.style.backgroundColor = backgroundColor;
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('textColor', textColor);

    // Change the text color for all elements
    var allElements = document.querySelectorAll('*');
    allElements.forEach(function (element) {
        element.style.color = textColor;
    });

    // Change the border color for all elements
    document.documentElement.style.setProperty('--border-color', textColor);

    document.getElementById('color-dropdown').style.display = 'none';
}

// Function to load the background and text color from localStorage
function loadColors() {
    var backgroundColor = localStorage.getItem('backgroundColor');
    var textColor = localStorage.getItem('textColor');
    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
    }
    if (textColor) {
        // Apply the text color to all elements
        var allElements = document.querySelectorAll('*');
        allElements.forEach(function (element) {
            element.style.color = textColor;
        });
        document.documentElement.style.setProperty('--border-color', textColor);
    }
}
