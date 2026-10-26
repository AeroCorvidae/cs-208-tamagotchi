
"use strict";

/*
 * Flappy Goobert React component.
 * Displays the game, tracks when the game ends,
 * and allows the player to restart or leave.
 */
class FlappyGoobert extends React.Component {

    constructor(props) {
        super(props);

        // Store values that React needs to track.
        this.state = {
            showPlayAgain: false
        };
    }

    /*
     * Loads a JavaScript file needed by the game.
     * If the script already exists, we do not load it again.
     */
    loadScript(src, id, onReady) {
        const existing = document.getElementById(id);

        // Check whether the script was already added.
        if (existing) {
            if (existing.dataset.loaded === "true") {
                onReady();
                return;
            }

            // Wait for the existing script to finish loading.
            existing.addEventListener("load", onReady, { once: true });
            return;
        }

        // Create a new script element.
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.defer = true;

        // Run the callback when the script finishes loading.
        script.onload = () => {
            script.dataset.loaded = "true";
            onReady();
        };

        document.body.appendChild(script);
    }

    /*
     * Runs when the Flappy Goobert screen first appears.
     * Loads the required game files and starts the game.
     */
    componentDidMount() {
        this.loadScript("games/games-global.js", "games-global-script", () => {
            this.loadScript("games/flappy-goobert.js", "flappy-goobert-script", () => {

                // Show the Play Again button when the game ends.
                window.onFlappyGameOver = () => {
                    this.setState({ showPlayAgain: true });
                };

                // Start Flappy Goobert if the function is available.
                if (typeof initFlappyGoobert === "function") {
                    initFlappyGoobert();
                }
            });
        });
    }

    /*
     * Runs when the player leaves the Flappy Goobert screen.
     * Stops the game and clears its game-over callback.
     */
    componentWillUnmount() {
        window.onFlappyGameOver = null;

        if (typeof stopGame === "function") {
            stopGame();
        }
    }

    /*
     * Restarts the game after Game Over.
     * Hides the Play Again button and starts a new game.
     */
    playAgain() {
        this.setState({ showPlayAgain: false }, () => {
            if (typeof initFlappyGoobert === "function") {
                initFlappyGoobert();
            }
        });
    }

    /*
     * Handles touch controls on mobile devices.
     * Touching the game makes Goobert jump.
     * Touching a button does not trigger a jump.
     */
    handleTouch(event) {
        // Ignore touches on buttons.
        if (event.target.closest("button")) {
            return;
        }

        event.preventDefault();

        // Make Goobert jump if the function exists.
        if (typeof jump === "function") {
            jump();
        }
    }

    /*
     * Displays the Flappy Goobert game screen.
     */
    render() {
        return (
            <main
                className="flappy-screen"
                onTouchStart={(event) => this.handleTouch(event)}
            >

                {/* Button to return to the Game Room. */}
                <button
                    type="button"
                    className="btn game-return-btn"
                    onClick={() => load("gameRoom")}
                >
                    Back to Game Room
                </button>

                {/* Area where the Flappy Goobert game appears. */}
                <div id="main" className="flappy-board">

                    {/* Jump button for mobile devices. */}
                    <div id="keys" className="d-block d-md-none vw-100">
                        <i
                            className="bi bi-arrow-up text-white bg-warning p-1 rounded-pill key keyup vw-100"
                            onClick={() => jump()}
                        ></i>
                    </div>
                </div>
                <div id="flappy-score" className="flappy-score">Score: 0</div>

                {/* Display Cleanliness when a Goobert is selected.  */}
                {gameGoobert &&
                    <div className="cleanliness-label">
                        <label
                            htmlFor="goobert-percentage"
                            key={"FlappyGoobertCleanlinessLabel"}
                        >
                            Cleanliness
                        </label>
                        <br />
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={gameGoobert.cleanliness}
                            id="goobert-percentage"
                            key={"FlappyGoobertCleanliness"}
                            readOnly
                        />
                    </div>
                }

                {/* Show the Game Over screen only when the game ends. */}
                {this.state.showPlayAgain && (
                    <div className="game-over-panel">
                        <h3>Game Over</h3>

                        {/* Restart the game when clicked. */}
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => this.playAgain()}
                        >
                            Play Again
                        </button>
                    </div>
                )}

            </main>
        );
    }
}
export {FlappyGoobert};