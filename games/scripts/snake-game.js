window.onload = () => {
    for(position of snake.positions) {
        position.div = createSnakeDiv(position.x, position.y, position.id);

    }
    createAppleDiv();
    apple.div = document.getElementById("apple");
    setPosition(apple.div, apple.x, apple.y);
    document.addEventListener("keydown", keypress);
    setInterval(gameloop, 1000/10); // 10FPS
}

var body = document.getElementById("main");
const gridSize = 50;
const width = Math.floor(body.clientWidth / gridSize);
body.style.width = width * gridSize;
const height = Math.floor(body.clientHeight / gridSize);
body.style.height = height * gridSize;
let snake = {
    positions: [
        {x:6, y:Math.floor(height/2), id: 0},
        {x:5, y:Math.floor(height/2), id: 1},
        {x:4, y:Math.floor(height/2), id: 2}
    ],
    velocity: {
        y: 0,
        x: 1
    },
    move: () => {
        let lastSquare = snake.positions[snake.positions.length - 1];
        let currentSquare = snake.positions[0];
        lastSquare.x = currentSquare.x + snake.velocity.x;
        if(lastSquare.x > width) {
            lastSquare.x = 0;
        } else if(lastSquare.x < 0) {
            lastSquare.x = width
        }
        lastSquare.y = currentSquare.y + snake.velocity.y;
        if(lastSquare.y > height) {
            lastSquare.y = 0;
        } else if(lastSquare.y < 0) {
            lastSquare.x = height;
        }

        if(currentSquare.x + snake.velocity.x == apple.x && currentSquare.y + snake.velocity.y == apple.y) {
            eatApple();
        } else {
            snake.positions.splice(snake.positions.length - 1);
            snake.positions.unshift(lastSquare);
            
            setObjPosition(lastSquare);
        }


        for(position of snake.positions) {
            if(position.x == lastSquare.x && position.y == lastSquare.y && position != lastSquare) {
                console.log(position.id, lastSquare.id);
                //resetGame()
            }
        }
    }
}
let apple = {x: width - 10, y: Math.floor(height/2)};

function gameloop() {
    snake.move();
    
}
function createSnakeDiv(x, y, id) {
    let cell = document.createElement("div");
    setPosition(cell, x, y);
    cell.id = id;
    cell.classList.add("snake");

    body.appendChild(cell);

    return cell;
}
function createAppleDiv(x, y) {
    let cell = document.createElement("div");
    cell.id = "apple";
    cell.classList.add("apple");

    body.appendChild(cell);
}
function setPosition(div, x, y) {
    div.style.left = body.offsetLeft + x * gridSize + "px";
    div.style.top = body.offsetLeft + y * gridSize + "px";
}
function setObjPosition(obj) {
    setPosition(obj.div, obj.x, obj.y);
}
function eatApple() {
    let newSquare = {x: apple.x, y: apple.y, id: snake.positions.length};

    newSquare.div = createSnakeDiv(apple.x, apple.y, snake.positions.length);
    snake.positions.unshift(newSquare);

    apple.x = Math.floor(Math.random() * width);
    apple.y = Math.floor(Math.random() * height);
    setObjPosition(apple);
}

function keypress(e) {
    console.log(e.key);
   if(e.key == "a" && snake.velocity.x != 1) {
        snake.velocity = {x: -1, y: 0};
    }
    if(e.key == "s" && snake.velocity.y != -1) {
        snake.velocity = {x: 0, y: 1};
    }
    if(e.key == "d" && snake.velocity.x != -1) {
        snake.velocity = {x: 1, y: 0};
    }
    if(e.key == "w" && snake.velocity.y != 1) {
        snake.velocity = {x: 0, y: -1};
    }
}

function resetGame() {
    location.reload();
}