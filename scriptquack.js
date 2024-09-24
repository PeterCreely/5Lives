const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
    x: 50,
    y: 300,
    width: 20,
    height: 20,
    speed: 5,
    dy: 0,
    gravity: 0.5,
    jumpPower: -10,
    grounded: false
};

let platforms = [
    { x: 50, y: 350, width: 100, height: 10 },
    { x: 200, y: 300, width: 100, height: 10 },
    { x: 100, y: 200, width: 100, height: 10 },
    { x: 300, y: 100, width: 100, height: 10 }
];

let lava = [
    { x: 0, y: 390, width: 350, height: 10 }
];

let keys = {};
let scrollSpeed = 1; // Speed at which the game area scrolls up

const playerImage = new Image();
playerImage.src = 'duck1.png';

navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);
        scriptProcessor.onaudioprocess = () => {
            const array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            const average = array.reduce((a, b) => a + b) / array.length;

            if (average > 50 && player.grounded) { // Adjust the threshold as needed
                player.dy = player.jumpPower;
                player.grounded = false;
            }
        };
    })
    .catch(err => console.error('Error accessing microphone:', err));


window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    const tiltX = event.gamma; // Left to right tilt in degrees
    const tiltY = event.beta;  // Front to back tilt in degrees

    // Adjust player position based on tilt
    player.x += tiltX * 0.1; // Adjust the multiplier to control sensitivity
    player.y += tiltY * 0.1;

    // Ensure player stays within canvas bounds
    player.x = Math.max(0, Math.min(player.x, canvas.width - player.width));
    player.y = Math.max(0, Math.min(player.y, canvas.height - player.height));
}


document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

function update() {
    // Player movement
    if (keys['ArrowLeft']) {
        player.x -= player.speed;
    }
    if (keys['ArrowRight']) {
        player.x += player.speed;
    }
    if (keys['Space'] && player.grounded) {
        player.dy = player.jumpPower;
        player.grounded = false;
    }

    // Apply gravity
    player.dy += player.gravity;
    player.y += player.dy;

    // Platform collision detection
    player.grounded = false;
    platforms.forEach(platform => {
        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x) {
            // Check if player is hitting the platform from the top
            if (player.y + player.height > platform.y &&
                player.y + player.height < platform.y + platform.height + player.dy) {
                player.y = platform.y - player.height;
                player.dy = 0;
                player.grounded = true;
            }
            // Check if player is hitting the platform from the bottom
            else if (player.y < platform.y + platform.height &&
                player.y > platform.y + player.dy) {
                player.dy = -player.dy; // Reverse the direction
            }
        }
    });

    // Ground collision
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.dy = 0;
        player.grounded = true;
    }

    // Scroll the game area up
    player.y -= scrollSpeed;
    platforms.forEach(platform => {
        platform.y += scrollSpeed;
    });

    // Remove platforms that have moved off the bottom and add new ones at the top
    platforms = platforms.filter(platform => platform.y < canvas.height);
    if (platforms.length < 4) {
        let highestPlatform = platforms.reduce((prev, curr) => (prev.y < curr.y ? prev : curr));
        let newPlatformX;
        do {
            newPlatformX = highestPlatform.x + (Math.random() < 0.5 ? -100 : 100);
            newPlatformX = Math.max(0, Math.min(newPlatformX, canvas.width - 100)); // Ensure the new platform is within canvas bounds
        } while (Math.abs(newPlatformX - highestPlatform.x) < 50); // Ensure the new platform is not too close to the previous one

        let newPlatform = {
            x: newPlatformX,
            y: highestPlatform.y - 100,
            width: 100,
            height: 10
        };
        platforms.push(newPlatform);
    }


    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
   // ctx.fillStyle = 'blue';
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    // Draw platforms
    ctx.fillStyle = 'white';
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });

    // Draw lava
    ctx.fillStyle = 'red';
    lava.forEach(lavaBlock => {
        ctx.fillRect(lavaBlock.x, lavaBlock.y, lavaBlock.width, lavaBlock.height);
    });

    requestAnimationFrame(update);
}

update();
