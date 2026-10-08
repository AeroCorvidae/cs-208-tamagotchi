let game;

function start(fps) {
    // Add key press event & start game
    document.addEventListener("keydown", keypress);
    document.addEventListener("keyup", keyReleased);
    game = setInterval(gameloop, 1000 / fps); // 10FPS
}

const body = document.getElementById("main");
const keys = [];
let width = 15, height = 15;

// Update grid size to a power of 2, since it helps render images better
function getGridSize() {
    const desired = Math.floor(
        Math.min(
            window.innerWidth / width,
            window.innerHeight / height
        )
    );

    if (desired >= 128) return 128;
    if (desired >= 64) return 64;
    if (desired >= 32) return 32;
    return 16;
}
function setBodySize() {
    // Update grid size
    gridSize = getGridSize();

    // Update body size
    body.style.width = (width+1) * gridSize + "px";
    body.style.height = (height+1) * gridSize + "px";

}
let gridSize = getGridSize();


function resetGame() {
    window.clearInterval(game);

    // Pause for a quarter second to let the player know they died
    // Then send the player back to the game room
    setTimeout(() => {
        if(document.referrer.includes("game-room.html")) {
            // Came from game room; go back
            history.back();
        } else {
            window.location.href = "./game-room.html";
        }
    }, 250);
}
function keypress(e) {
    keys[e.key.toLowerCase()] = true;
}
function keyReleased(e) {
    keys[e.key.toLowerCase()] = false;
}
