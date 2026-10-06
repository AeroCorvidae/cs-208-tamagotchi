let game;
window.onload = () => {
    bird.div = createBirdDiv();


    start();
}
function start() {
    // Add key press event & start game
    document.addEventListener("keydown", keypress);
    game = setInterval(gameloop, 1000 / 30); // 30FPS
}


const body = document.getElementById("main");

const width = 15;
const height = 15;

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

const gridSize = getGridSize();


body.style.width = (width+1) * gridSize + "px";
body.style.height = (height+1) * gridSize + "px";

const keys = [];


let bird = {
    x: gridSize * 3,
    y: 10,
    velocity: 0,

    jumpPower: 30,
    maxFall: 100,
    fallSpeed: 3,
}
let countdown = 0; 
let pipes = [];
class Pipe {
    constructor() {
        this.x = parseInt(body.style.width) + 20;
        this.gapSize = ((Math.random() * 80) + 300) * gridSize / 64;
        this.width = 1.5;
        this.firstPipeHeight = Math.random() * (body.offsetHeight - this.gapSize) * gridSize / 64;
        this.div = createPipeDivs(this);
        this.dead = false;
    }

    move() {
        this.x -= 10 * gridSize / 64;
        if(this.x < -gridSize * this.width) {
            body.removeChild(this.div);
            this.dead = true;
        }
    }
}

function gameloop() {
    moveBird();
    if(countdown <= 0) {
        pipes.push(new Pipe());
        countdown = Math.floor(Math.random() * 60) + 45; 
    }
    for(let i = 0; i < pipes.length; i++) {
        let pipe = pipes[i];
        pipe.move();
        if(pipe.dead) {
            pipes.splice(i, 1);
        } else {
            renderPipe(pipe);
        }
    }

    setPosition(bird.div, bird.x, bird.y);
    countdown--;
}

function moveBird() {
    bird.y += bird.velocity * gridSize / 64;
    bird.velocity = Math.min(bird.velocity + bird.fallSpeed, bird.maxFall);

    for(let pipe of pipes) {
        if(
            (bird.x < pipe.x + pipe.width * gridSize && bird.x + gridSize > pipe.x) &&
            (bird.y + gridSize > pipe.firstPipeHeight + pipe.gapSize ||
            bird.y < pipe.firstPipeHeight)
        ) {
            // Intersecting with a pipe
            resetGame();
        }
    }

    if(bird.y > (height+1) * gridSize) resetGame();

}
function createBirdDiv() {
    let cell = document.createElement("div");

    cell.style.backgroundSize = 
        gridSize + "px " + 
        gridSize + "px";
    cell.style.backgroundPosition = "0 0";

    setPosition(cell, bird.x, bird.y);
    cell.id = "bird";
    cell.classList.add("bird");
    cell.style.width = gridSize + "px";
    cell.style.height = gridSize + "px";

    body.appendChild(cell);

    return cell;
}


function createPipeDivs(pipe) {
    let div = document.createElement("div");
    div.classList.add("pipeGroup");
    
    div.appendChild(createTopPipe(pipe));
    div.appendChild(createWaterDiv(pipe));
    div.appendChild(createBottomPipe(pipe));

    body.appendChild(div);

    return div;
}
function createTopPipe(pipe) {
    let cell = document.createElement("div");
    cell.classList.add("pipe");
    cell.style.width = gridSize * pipe.width + "px";
    cell.style.height = pipe.firstPipeHeight + "px";
    cell.style.top = "0px";

    cell.style.backgroundSize = 
        gridSize + "px " + 
        gridSize + "px";
    cell.style.backgroundPosition = "0 0";

    body.appendChild(cell);

    return cell;
}
function createBottomPipe(pipe) {
    let cell = document.createElement("div");
    cell.classList.add("pipe");
    cell.style.width = gridSize * pipe.width + "px";
    cell.style.top = pipe.firstPipeHeight + pipe.gapSize + "px";
    cell.style.height = body.offsetHeight - pipe.firstPipeHeight - pipe.gapSize + "px";

    cell.style.backgroundSize = 
        gridSize + "px " + 
        gridSize + "px";
    cell.style.backgroundPosition = "0 0";

    body.appendChild(cell);

    return cell;
}
function createWaterDiv(pipe) {
    let cell = document.createElement("div");
    cell.classList.add("water");
    cell.style.width = gridSize * pipe.width * 0.75 + "px";
    cell.style.height = pipe.gapSize + "px";
    cell.style.top = pipe.firstPipeHeight + "px";

    cell.style.backgroundSize = 
        gridSize + "px " + 
        gridSize + "px";
    cell.style.backgroundPosition = "0 0";
    cell.style.top

    body.appendChild(cell);

    return cell;
}

function renderPipe(pipe) {
    pipe.div.style.left = pipe.x + "px";
}

function setPosition(div, x, y) {
    div.style.left = x  + "px";
    div.style.top = y + "px";
}


function keypress(e) {
    if(
        e.key.toLowerCase() == "w" || 
        e.key.toLowerCase() == " " || 
        e.key.toLowerCase() == "arrowup"
    ) {
        jump()
    }
}
function jump() {
    if(bird.velocity > 0) {
        bird.velocity = -bird.jumpPower
    }
}
function resetGame() {
    setPosition(bird.div, bird.x, bird.y);
    window.clearInterval(game);
    alert("You died!");
    // window.location.href = "./game-room.html";
}
