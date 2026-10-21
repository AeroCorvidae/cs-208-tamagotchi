"use strict";

/*
Main React component for the Snake minigame.
Handles loading game scripts, selecting difficulty,
displaying controls, and returning to Game Room.
*/
class SnakeGame extends React.Component {

    constructor(props) {
        super(props);

        // Store information that can change while game is running.
        this.state = {
            scriptsReady: false, // Whether the Snake scripts have loaded
            selectedDifficulty: null, // No diffuculty selected yet
            fullness: gameGoobert ? gameGoobert.fullness : 0
        };
    }

    /*
    Loads a js file needed by the Snake game.
    If the script already exists, it will not add a duplicate.
    */
    loadScript(src, id, onReady) {
        // Check whether this script has already been added to page.
        const existing = document.getElementById(id);

        if (existing) {

            // If the script finished loading, continue immediately.
            if (existing.dataset.loaded === "true") {
                onReady();
                return;
            }

            // Otherwise, wait for the existing script to finish loading.
            existing.addEventListener("load", onReady, { once: true });
            return;
        }

        // Create a new script element.
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.defer = true;

        // Once loaded, mark the script as ready.
        script.onload = () => {
            script.dataset.loaded = "true";
            onReady();
        };

        // Add the script to the webpage.
        document.body.appendChild(script);
    }

    /*
    React calls this method when the Snake component appears.
    Loads the shared game script first, then the Sname game script.
    */
    componentDidMount() {
        this.loadScript("games/games-global.js", "games-global-script", () => {
            this.loadScript("games/snake-game.js", "snake-game-script", () => {

                // Enable difficulty selection once both scripts are ready.
                this.setState({ scriptsReady: true });
            });
        });
    }

    /*
    React calls this method when the player leaves Snake.
    Stops the game so it does not continue running in another room/game.
    */
    componentWillUnmount() {
        // Do not start if the game is not ready.
        if (typeof stopGame === "function") {
            stopGame();
        }
    }

    /*
    Starts Snake using the selected board size and difficulty.
    The game can only start after its scripts finish loading.
    */
    startSnake(width, height, difficulty) {

        // Do not start if the game is not ready.
        if (!this.state.scriptsReady || typeof initSnakeGame !== "function") {
            return;
        }

        // Save the selected difficulty, then initialize the game board.
        this.setState({ selectedDifficulty: difficulty }, () => {
            initSnakeGame(width, height);
        });
    }

    /*
    Displays the Snake screen, difficulty buttons, 
    Goobert's Fullness stat, and movement controls.
    */
    render() {

        // Only display difficulty choices before a difficulty is selected.
        const showDifficultyPicker = this.state.selectedDifficulty === null;

        return (
            <main className="snake-screen">

                {/* Button to return to the Game Room*/}
                <button
                    type="button"
                    className="btn game-return-btn"
                    onClick={() => load("gameRoom")}>
                    Back to Game Room
                </button>

                {/* Display Fullness only when a Goobert has been selected */}
                {gameGoobert && 
                <div className="fullness-label">
                    <label htmlFor="goobert-percentage" key={"SnakeFullnessLabel"}>
                        Fullness
                    </label>
                    <br />

                    {/* Shows the selected Goobert's Fullness stat */}
                    <input type="range" min={0} max={100} value={this.fullness} 
                    id="goobert-percentage" key={"SnakeFullness"} />
                </div>
                }

                {/* Difficulty menu appears before the game starts. */}
                {showDifficultyPicker && (
                    <div className="snake-difficulty-menu">
                        <h2 className="snake-difficulty-title">Select Snake Difficulty</h2>
                        <div className="snake-difficulty-buttons">

                            {/* Easy uses a 25 x 25 board */}
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => this.startSnake(25, 25, "Easy")}
                                disabled={!this.state.scriptsReady}>
                                Easy
                            </button>

                            {/* EMedium uses a 17 x 17 board */}
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => this.startSnake(17, 17, "Medium")}
                                disabled={!this.state.scriptsReady}>
                                Medium
                            </button>

                            {/* Hard uses a 10 x 10 board */}
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => this.startSnake(10, 10, "Hard")}
                                disabled={!this.state.scriptsReady}>
                                Hard
                            </button>
                        </div>
                    </div>
                )}

                {/* Snake game board is displayed inside this container */}
                <div id="main" className="snake-board"></div>

                {/* Direction buttons for smaller screens and mobile devices */}
                <div id="keys" className="d-block d-md-none">

                    {/* Move Snake upward */}
                    <i
                        className="bi bi-arrow-up text-white bg-warning p-1 rounded-pill key keyup"
                        onClick={() => setSnakeVelocity("up")}
                        onTouchStart={(event) => {
                            event.preventDefault();
                            setSnakeVelocity("up");
                        }}>
                    </i><br />

                    {/* Move Snake left */}
                    <i
                        className="bi bi-arrow-left text-white bg-warning p-1 rounded-pill key keyleft"
                        onClick={() => setSnakeVelocity("left")}
                        onTouchStart={(event) => {
                            event.preventDefault();
                            setSnakeVelocity("left");
                        }}>
                    </i>

                    {/* Move Snake downward */}
                    <i
                        className="bi bi-arrow-down text-white bg-warning p-1 rounded-pill key keydown"
                        onClick={() => setSnakeVelocity("down")}
                        onTouchStart={(event) => {
                            event.preventDefault();
                            setSnakeVelocity("down");
                        }}>
                    </i>

                    {/* Move Snake right */}
                    <i
                        className="bi bi-arrow-right text-white bg-warning p-1 rounded-pill key keyright"
                        onClick={() => setSnakeVelocity("right")}
                        onTouchStart={(event) => {
                            event.preventDefault();
                            setSnakeVelocity("right");
                        }}>
                    </i>
                </div>
            </main>
        );
    }
}
