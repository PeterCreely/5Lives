const grid = [];
const rows = 12;
const columns = 12;
const startPosition = { row: 5, col: 5 }; // Starting at AF (row 12) and A6 (column 6)
//let currentPosition = { ...startPosition };
let dynamite = 0; // Initialize the number of keys collected
let kids = 5;
const dynamiteDisplay = document.getElementById('dynamite-display');
const kidsDisplay = document.getElementById('kids-display');
const cratesDisplay = document.getElementById('crates-display');
let crates = 5;

// Initialize grid with labels
for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < columns; c++) {
        const rowLabel = String.fromCharCode(65 + r); // Convert to letter
        const colLabel = c + 1;
        row.push(`${rowLabel}${colLabel}`);
    }
    grid.push(row);
}

const gridPrompts = {
    'A1': 'The clearing is empty. There is nothing here.',
    'A2': 'The clearing is empty. There is nothing here.',
    'A3': 'There is a small hole in the ground! Do you look in ?',
    'A4': 'The clearing is empty. There is nothing here.',
    'A5': 'The way to the right is blocked by trees!',
    'A6': 'The clearing is empty. There is nothing here.',
    'A7': 'The clearing is empty. There is nothing here.',
    'A8': 'There is a small hole in the ground! Do you look in?.', 
    'A9': 'The clearing is empty. There is nothing here.',
    'A10': 'The way to the right is blocked by trees!',
    'A11': 'The clearing is empty. There is nothing here.',
    'A12': 'A large monster appears!',
    'B1': 'There is a small hole in the ground! Do you look in?.', 
    'B2': 'The way backwards is blocked by trees!',
    'B3': 'The clearing is empty. There is nothing here.',
    'B4': 'There is nothing here. Just trees and shrubs!',
    'B5': 'There is a HOLE and one kid falls in with a scream and dissapears!',
    'B6': 'The way forward is blocked!',
    'B7': 'The clearing is empty. There is nothing here.',
    'B8': 'The clearing is empty. There is nothing here.',
    'B9': 'The clearing is empty. There is nothing here.',
    'B10': 'There is a small hole in the ground! Do you look in?.', 
    'B11': 'The clearing is empty. There is nothing here.',
    'B12': 'The way left is blocked!',
    'C1': 'The clearing is empty. There is nothing here.',
    'C2': 'You have found one of the Dynamite Sticks! Do you want to pick it up?',
    'C3': 'The way left is blocked!',
    'C4': 'The clearing is empty. There is nothing here.',
    'C5': 'You hear a strange noise, but you can not tell which way it is coming from!',
    'C6': 'The clearing is empty. There is nothing here.',
    'C7': 'The clearing is empty. There is nothing here.',
    'C8': 'The way forward is blocked!',
    'C9': 'The way to the right is blocked by trees!',
    'C10': 'You glance around. No one knows which way to go. No one knows what to do. You decide to take the lead!',
    'C11': 'The clearing is empty. There is nothing here.',
    'C12': 'The clearing is empty. There is nothing here.',
    'D1': 'The clearing is empty. There is nothing here.',
    'D2': 'The clearing is empty. There is nothing here.',
    'D3': 'The way forward is blocked!',
    'D4': 'The clearing is empty. There is nothing here.',
    'D5': 'A large monster appears!',
    'D6': 'The clearing is empty. There is nothing here.',
    'D7': 'There is a HOLE and one kid falls in with a scream and dissapears!',
    'D8': 'The clearing is empty. There is nothing here.',
    'D9': 'The clearing is empty. There is nothing here.',
    'D10': 'The clearing is empty. There is nothing here.',
    'D11': 'The way left is blocked!',
    'D12': 'The way backwards is blocked by trees!',
    'E1': 'The clearing is empty. There is nothing here.',
    'E2': 'The way left is blocked!',
    'E3': 'ThIS IS E3.',
    'E4': 'The clearing is empty. There is nothing here.',
    'E5': 'The clearing is empty. There is nothing here.',
    'E6': 'The way forward is blocked!',
    'E7': 'You have found one of the Dynamite Sticks! Do you want to pick it up?',
    'E8': 'You hear a strange noise, but you can not tell which way it is coming from!',
    'E9': 'The clearing is empty. There is nothing here.',
    'E10': 'There is a small hole in the ground! Do you look in ?',
    'E11': 'The clearing is empty. There is nothing here.',
    'E12': 'The clearing is empty. There is nothing here.',
    'F1':'You look around. No one knows which way to go. No one knows what to do. You are chosen to take the lead!',
    'F2': 'There is a HOLE and one kid falls in with a scream and dissapears!',
    'F3': 'There is a river behind you, you cant go that way!',
    'F4': 'There is a river behind you, you cant go that way!',
    'F5': 'There is a river behind you, you cant go that way!',
    'F6': 'You look around. Confused no one knows which way to go. No one knows what to do. You decide to take the lead!',
    'F7': 'The clearing is empty. There is nothing here.',
    'F8': 'The clearing is empty. There is nothing here.',
    'F9': 'The clearing is empty. There is nothing here.',
    'F10': 'There is a river behind you, you cant go that way!',
    'F11': 'There is a river behind you, you cant go that way!',
    'F12': 'The clearing is empty. There is nothing here.',
    'G1': 'There is a river behind you, you cant go that way!',
    'G2': 'There is a river behind you and to the right, you cant go that way!',
    'G3': 'ThIS IS G3.', 'G4': 'ThIS IS G4.', 'G5': 'ThIS IS G5.',
    'G6': 'There is a river behind you and to your left! You cant go either way!',
    'G7': 'There is a river behind you, you cant go that way!',
    'G8': 'There is a river behind you, you cant go that way!',
    'G9': 'There is a river to your right! You cant go that way! BUT! There is a bridge behind you!', 
    'G10': 'ThIS IS G10.', 'G11': 'ThIS IS G11.',
    'G12': 'The way to your right is blocked by Giant Crates. Do you want to use the Dynamite to remove the Crates?',
    'H1': 'ThIS IS H1.',    'H2': 'ThIS IS H2.',    'H3': 'ThIS IS H3.',    'H4': 'ThIS IS H4.',    'H5': 'ThIS IS H5.',    'H6': 'ThIS IS H6.',
    'H7': 'ThIS IS H7.', 'H8': 'ThIS IS H8.',
    'H9': 'You are on a bridge, there is water to your left and right! ',
    'H10': 'ThIS IS H10.', 'H11': 'ThIS IS H11.', 'H12': 'ThIS IS H12.',
    'I1': 'ThIS IS I1.', 'I2': 'ThIS IS I2.',
    'I3': 'You have found one of the Dynamite Sticks! Do you want to pick it up?',
    'I4': 'There is a river in front of you! You cant go this way!',
    'I5': 'There is a river in front of you and to the right! You cant go these ways!',
    'I6': 'ThIS IS I6.',
    'I7': 'ThIS IS I7.', 'I8': 'ThIS IS I8.',
    'I9': 'You are on a bridge, there is water to your left and right! ',
    'I10': 'There is a river in front of you! You cant go this way!',
    'I11': 'There is a small hole in the ground! Do you look in ?',
    'I12': 'ThIS IS I12.',
    'J1': 'The clearing is empty. There is nothing here.',
    'J2': 'A large monster appears!',
    'J3': 'The clearing is empty. There is nothing here.',
    'J4': 'The clearing is empty. There is nothing here.',
    'J5': 'The way to your right is blocked by trees!',
    'J6': 'There is a river in front of you! You cant go this way!',
    'J7': 'There is a river in front of you! You cant go this way!',
    'J8': 'There is a river in front of you! You cant go this way!',
    'J9': 'There is a bridge in front of you!',
    'J10': 'You have found one of the Dynamite Sticks! Do you want to pick it up?',
    'J11': 'The clearing is empty. There is nothing here.',
    'J12': 'There is a river in front of you! You cant go this way!',
    'K1': 'The clearing is empty. There is nothing here.',
    'K2': 'The clearing is empty. There is nothing here.',
    'K3': 'The way backwards is blocked by trees!',
    'You stop and look around. No one knows which way to go. No one knows what to do. You decide to take the lead!',
    'K5': 'There is a HOLE and one kid falls in with a scream and dissapears!',
    'K6': 'The clearing is empty. There is nothing here.',
    'K7': 'The way forwards is blocked by trees!',
    'K8': 'The clearing is empty. There is nothing here.',
    'K9': 'The way forwards is blocked by trees!',
    'K10': 'The clearing is empty. There is nothing here.',
    'K11': 'The clearing is empty. There is nothing here.',
    'K12': 'There is a small hole in the ground! Do you look in ?',
    'L1': 'The clearing is empty. There is nothing here.',
    'L2': 'There is a small hole in the ground! Do you look in ?',
    'L3': 'The clearing is empty. There is nothing here.',
    'L4': 'The path to the right is blocked by trees!',
    'L5': 'The clearing is empty. There is nothing here.',
    'L6': 'The clearing is empty. There is nothing here.',
    'L7': 'A large monster appears!', 
    'L8': 'The clearing is empty. There is nothing here.',
    'L9': 'You look around Puzzled. No one knows which way to go. No one knows what to do. You decide to take the lead!',
    'L10': 'The path to the left is blocked by trees!',
    'L11': 'There is a HOLE and one kid falls in with a scream and dissapears!',
    'L12': 'The clearing is empty. There is nothing here.',
};

const directions = {
    forward: [-1, 0],
    back: [1, 0],
    left: [0, -1],
    right: [0, 1]
};

const updatedynamiteDisplay = () => {
    dynamiteDisplay.innerText = `You Have ${dynamite} Stick of Dynamite`;
};

const updatekidsDisplay = () => {
    kidsDisplay.innerText = `There are ${kids} kids left...`;
};

const updatecratesDisplay = () => {
    cratesDisplay.innerText = `There are ${crates} crates left...`;
};

function move(direction) {
    const [rowChange, colChange] = directions[direction];
    const newRow = currentPosition.row + rowChange;
    const newCol = currentPosition.col + colChange;

    const positionLabel = grid[currentPosition.row][currentPosition.col];

    // Check if trying to move beyond the grid boundaries
    if ((newRow < 0 && direction === 'forward') ||
        (newRow >= rows && direction === 'back') ||
        (newCol < 0 && direction === 'left') ||
        (newCol >= columns && direction === 'right')) {
        alert("The trees are too think and you can't move that way!");
        return; // Stop the movement
    }

    // Example of additional specific checks (e.g., can't move forward from A7)
    if (positionLabel === 'A7' && direction === 'forward') {
        alert("The clearing is empty. There is nothing here. You can't move forward.");
        return; // Stop the movement
    }

    currentPosition.row = newRow;
    currentPosition.col = newCol;
    updateDisplay();
}


const forrestimageArea = document.getElementById('forrestimageArea');
const forrestArea = document.getElementById('forrestArea');

function showYesNoPopup(message, onYes, onNo) {
    if (confirm(message)) {
        onYes();
    } else {
        onNo();
    }
}

function checkGameStatus() {
    if (kids === 0) {
        alert("You lost. All kids are gone.");
        // Optionally, reload the game or navigate to a different state
        location.reload(); // Reloads the current page to restart the game
    } else if (crates === 0) {
        alert("You have destroyed all the Crates and can escape the Forrest! Click to continue to the next level.");
        // Navigate to the next level or reload with new settings
        // Example: location.href = 'next-level.html'; // Navigate to a new page
    }
}

const possiblePositions1 = [
    { row: 5, col: 5 }, // F6 
    { row: 2, col: 9 }, // C10 
    { row: 5, col: 0 } // F1
    { row: 10, col: 3 }, // k4
    { row: 11, col: 8 } // k4
];

function getRandomPosition1() {
    const randomIndex = Math.floor(Math.random() * possiblePositions1.length);
    return possiblePositions1[randomIndex];
    }

let currentPosition = getRandomPosition1();

function updateDisplay() {
    const positionLabel = grid[currentPosition.row][currentPosition.col];
    forrestArea.innerHTML = `
        </BR>
        <h3>Where are we?</h3>
        <p>${gridPrompts[positionLabel] || 'There is nothing remarkable here.'}</p>
         `;

    const imageUrl = `Forrestpics/${positionLabel}.png`; // Ensure images are named as grid positions
    forrestimageArea.innerHTML = `<img src="${imageUrl}" alt="${positionLabel} image">`;

    const forwardButton = document.getElementById('forwardButton');
if (positionLabel === 'E6' || positionLabel === 'D3' || positionLabel === 'D5' || positionLabel === 'A12'
    || positionLabel === 'C8' || positionLabel === 'B6' || positionLabel === 'J1' || positionLabel === 'I4'
    || positionLabel === 'I5' || positionLabel === 'I10' || positionLabel === 'I11' || positionLabel === 'J2'
    || positionLabel === 'L7' || positionLabel === 'K7' || positionLabel === 'K9' || positionLabel === 'J6'
    || positionLabel === 'J7' || positionLabel === 'J8' || positionLabel === 'I3' || positionLabel === 'J12')
{ forwardButton.disabled = true; } else { forwardButton.disabled = false; }

const backwardButton = document.getElementById('backwardButton');
if (positionLabel === 'B2' || positionLabel === 'K3' || positionLabel === 'G6' || positionLabel === 'F3'
    || positionLabel === 'F4' || positionLabel === 'F5' || positionLabel === 'G2' || positionLabel === 'G7'
    || positionLabel === 'G8' || positionLabel === 'G12' || positionLabel === 'F10' || positionLabel === 'F11'
    || positionLabel === 'D5' || positionLabel === 'A12' || positionLabel === 'D12' || positionLabel === 'J2'
    || positionLabel === 'L7' || positionLabel === 'G1')
{ backwardButton.disabled = true; } else { backwardButton.disabled = false; }

const leftButton = document.getElementById('leftButton');
if (positionLabel === 'G6' || positionLabel === 'I3' || positionLabel === 'I9' || positionLabel === 'G12'
    || positionLabel === 'E2' || positionLabel === 'D5' || positionLabel === 'A12' || positionLabel === 'D11'
    || positionLabel === 'C3' || positionLabel === 'B12' || positionLabel === 'J2' || positionLabel === 'L7'
    || positionLabel === 'L10')
{ leftButton.disabled = true; } else { leftButton.disabled = false; }

const rightButton = document.getElementById('rightButton');
if (positionLabel === 'G2' || positionLabel === 'G9' || positionLabel === 'I5' || positionLabel === 'I11'
    || positionLabel === 'D5' || positionLabel === 'C9' || positionLabel === 'A12' || positionLabel === 'I5'
    || positionLabel === 'I11' || positionLabel === 'A5' || positionLabel === 'A10' || positionLabel === 'J2'
    || positionLabel === 'L7' || positionLabel === 'J5' || positionLabel === 'L4')
{ rightButton.disabled = true; } else { rightButton.disabled = false; }

    if (positionLabel === 'E7' || positionLabel === 'C2' || positionLabel === 'I3' || positionLabel === 'J10') {
       
            if (!gridPrompts[positionLabel].includes('already picked up')) {
                const pickUpDynamiteButton = document.createElement('button'); pickUpDynamiteButton.textContent = 'Pick up the Dynamite'; pickUpDynamiteButton.addEventListener('click', () => {
                    dynamite += 1; alert(`You have picked up a Dynamite Stick! Total Sticks: ${dynamite}`);
                    gridPrompts[positionLabel] = 'You have already picked up the Dynamite here.'; // Update prompt 
                    updateDisplay(); // Refresh the display 
                    updatedynamiteDisplay();
                });
                forrestArea.appendChild(pickUpDynamiteButton);
            }        
    }

    if (positionLabel === 'G12') {
        prompt = `The way to your right is blocked by ${crates} Giant Crates. Do you want to use the Dynamite to remove the Crates?`;
        const dynamiteButton = document.createElement('button');
        dynamiteButton.textContent = 'Yes';
        dynamiteButton.addEventListener('click', () => {
            if (dynamite >= crates) {
                alert(`You have successfully removed ${crates} crates with dynamite!`);
                dynamite -= crates; crates = 0;
                updatecratesDisplay();
                updatedynamiteDisplay();
            }
            else {
                alert(`You have successfully removed ${dynamite} crates with dynamite!`);
                crates -= dynamite; dynamite = 0;
                updatecratesDisplay();
                updatedynamiteDisplay();
            }
            updateDynamiteDisplay();
            updateDisplay();
            updatecratesDisplay();
        });

        const nodynamiteButton = document.createElement('button');
        nodynamiteButton.textContent = 'No';
        nodynamiteButton.addEventListener('click', () => {
            alert('You chose not to use the dynamite.');
        });
        forrestArea.appendChild(dynamiteButton);
        forrestArea.appendChild(nodynamiteButton);
        return; // Stop the movement
    }
        

    if (positionLabel === 'D7' || positionLabel === 'F2' || positionLabel === 'K5' || positionLabel === 'B5' || positionLabel === 'L11') {
        kids--;
        alert(`You have lost one of the kids! Kids left: ${kids}`);
        updatekidsDisplay();
    }

    if (positionLabel === 'E10' || positionLabel === 'A3' || positionLabel === 'I11' || positionLabel === 'K12'
        || positionLabel === 'L2') {
        const lookInButton = document.createElement('button');
        lookInButton.textContent = 'Yes';
        lookInButton.addEventListener('click', () => {
            alert('The Hole is Empty!');
            gridPrompts[positionLabel] = 'You have been here before. You have looked into the hole.';
            updateDisplay(); // Refresh the display 
        });
        const dontLookInButton = document.createElement('button');
        dontLookInButton.textContent = 'No';
        dontLookInButton.addEventListener('click', () => {
            alert('You chose not to look into the hole.');
        });
        forrestArea.appendChild(lookInButton);
        forrestArea.appendChild(dontLookInButton);
    }

    if (positionLabel === 'D5' || positionLabel === 'A12' || positionLabel === 'J2' || positionLabel === 'L7') {
        const runButton = document.createElement('button');
        runButton.textContent = 'RUN';
        runButton.addEventListener('click', () => {
            alert('You scream and run away randomly trashing through the forest!');
            const randomPosition = getRandomPosition1();
            currentPosition = { ...randomPosition };
            updateDisplay(); // Refresh the display 
        });
        const stayButton = document.createElement('button');
        stayButton.textContent = 'STAY';
        stayButton.addEventListener('click', () => {
            alert('The monster Zipps eats one of the kids and disappears');
            kids--;
            rightButton.disabled = false;
            leftButton.disabled = false;
            forwardButton.disabled = false;
            backwardButton.disabled = false;
            updatekidsDisplay();
        });
        forrestArea.appendChild(runButton);
        forrestArea.appendChild(stayButton);
    }

    if (positionLabel === 'B10') {
        const lookInButton = document.createElement('button');
        lookInButton.textContent = 'Yes';
        lookInButton.addEventListener('click', () => {
            alert('Wooo there is Dynamite in the hole!');
            dynamite++;
            updatedynamiteDisplay();
            gridPrompts[positionLabel] = 'You have been here before. You have looked into the hole.';
            updateDisplay(); // Refresh the display 
        });
        const dontLookInButton = document.createElement('button');
        dontLookInButton.textContent = 'No';
        dontLookInButton.addEventListener('click', () => {
            alert('You chose not to look into the hole.');
        });
        forrestArea.appendChild(lookInButton);
        forrestArea.appendChild(dontLookInButton);
    }

    if (positionLabel === 'A8' || positionLabel === 'B1') {
        const lookInButton = document.createElement('button');
        lookInButton.textContent = 'Yes';
        lookInButton.addEventListener('click', () => {
            alert('Arrrgghh! It is Roots! He grabs one of the kids and drags him into the hole!');
            kids--;
            updatekidsDisplay();
            gridPrompts[positionLabel] = 'You have been here before. You have looked into the hole.';
            updateDisplay(); // Refresh the display 
        });
        const dontLookInButton = document.createElement('button');
        dontLookInButton.textContent = 'No';
        dontLookInButton.addEventListener('click', () => {
            alert('You chose not to look into the hole.');
        });
        forrestArea.appendChild(lookInButton);
        forrestArea.appendChild(dontLookInButton);
    }

    checkGameStatus();

}
                
document.getElementById('leftButton').addEventListener('click', () => move('left'));
document.getElementById('forwardButton').addEventListener('click', () => move('forward'));
document.getElementById('backwardButton').addEventListener('click', () => move('back'));
document.getElementById('rightButton').addEventListener('click', () => move('right'));

function initializeGame() {
    updateDisplay();
    updatedynamiteDisplay();
    updatekidsDisplay();
    updatecratesDisplay();
}

initializeGame();
