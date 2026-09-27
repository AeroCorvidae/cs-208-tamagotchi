window.onload = () => {
    for (position of snake.positions) {
        position.div = createSnakeDiv(position.x, position.y, position.id);
    }
    snake.head = snake.positions[0];
    createAppleDiv();
    apple.div = document.getElementById("apple");
    setPosition(apple.div, apple.x, apple.y);
    document.addEventListener("keydown", keypress);
    setInterval(gameloop, 1000 / 10); // 10FPS
}

let body = document.getElementById("main");
const gridSize = 50;
const width = Math.floor(body.clientHeight / gridSize);
body.style.width = (width + 1) * gridSize + "px";
const height = Math.floor(body.clientHeight / gridSize);



let snake = {
    positions: [
        { x: 6, y: Math.floor(height / 2), id: 0 },
        { x: 5, y: Math.floor(height / 2), id: 1 },
        { x: 4, y: Math.floor(height / 2), id: 2 }
    ],
    velocity: {
        y: 0,
        x: 1
    },
    head: { x: 4, y: Math.floor(height / 2), id: 2 },
    direction: "right",

}
let apple = { x: width > 15 ? width - 10 : width - 3, y: Math.floor(height / 2) };

function gameloop() {
    moveSnake();

}

function moveSnake() {
    // Update snake head based on current head
    let currentSquare = snake.head;
    snake.head = snake.positions[snake.positions.length - 1];

    // Update head position
    snake.head.x = currentSquare.x + snake.velocity.x;
    if (snake.head.x > width) {
        snake.head.x = 0;
    } else if (snake.head.x < 0) {
        snake.head.x = width;
    }

    snake.head.y = currentSquare.y + snake.velocity.y;
    if (snake.head.y > height) {
        snake.head.y = 0;
    } else if (snake.head.y < 0) {
        snake.head.y = height;
    }

    if (snake.head.x == apple.x && snake.head.y == apple.y) {
        // Eat apple if the snake head would end up on the apple this frame
        // This is an easy way to ensure when the snake grows, it will not grow into itself

        eatApple();
    } else {
        // Move snake forward if it has not eaten an apple this frame

        snake.positions.splice(snake.positions.length - 1);
        snake.positions.unshift(snake.head);

        setObjPosition(snake.head);

        for (position of snake.positions) {
            if (position.x == snake.head.x && position.y == snake.head.y && position != snake.head) {
                //console.log(position.id, snake.head.id, snake.positions);
                resetGame();
            }
        }
    }
    snake.direction = snake.velocity.direction;
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
    div.style.top = body.offsetTop + y * gridSize + "px";
}
function setObjPosition(obj) {
    setPosition(obj.div, obj.x, obj.y);
}
function eatApple() {
    let newSquare = { x: apple.x, y: apple.y, id: snake.positions.length };

    newSquare.div = createSnakeDiv(apple.x, apple.y, snake.positions.length);
    snake.positions.unshift(newSquare);

    apple.x = Math.floor(Math.random() * width);
    apple.y = Math.floor(Math.random() * height);
    setObjPosition(apple);
}

function keypress(e) {
    if (e.key == "a" && snake.direction != "right") {
        snake.velocity = { x: -1, y: 0, direction: "left" };
    }
    if (e.key == "s" && snake.direction != "up") {
        snake.velocity = { x: 0, y: 1, direction: "down" };
    }
    if (e.key == "d" && snake.direction != "left") {
        snake.velocity = { x: 1, y: 0, direction: "right" };
    }
    if (e.key == "w" && snake.direction != "down") {
        snake.velocity = { x: 0, y: -1, direction: "up" };
    }
}

function resetGame() {
    location.reload();
}