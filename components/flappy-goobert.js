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
      existing.addEventListener("load", onReady, {
        once: true
      });
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
          this.setState({
            showPlayAgain: true
          });
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
    this.setState({
      showPlayAgain: false
    }, () => {
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
    return /*#__PURE__*/React.createElement("main", {
      className: "flappy-screen",
      onTouchStart: event => this.handleTouch(event)
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn game-return-btn",
      onClick: () => load("gameRoom")
    }, "Back to Game Room"), /*#__PURE__*/React.createElement("div", {
      id: "main",
      className: "flappy-board"
    }, /*#__PURE__*/React.createElement("div", {
      id: "keys",
      className: "d-block d-md-none vw-100"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-up text-white bg-warning p-1 rounded-pill key keyup vw-100",
      onClick: () => jump()
    }))), /*#__PURE__*/React.createElement("div", {
      id: "flappy-score",
      className: "flappy-score"
    }, "Score: 0"), "//  Display Cleanliness when a Goobert is selected.", gameGoobert && /*#__PURE__*/React.createElement("div", {
      className: "cleanliness-label"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "goobert-percentage",
      key: "FlappyGoobertCleanlinessLabel"
    }, "Cleanliness"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: 0,
      max: 100,
      value: gameGoobert.cleanliness,
      id: "goobert-percentage",
      key: "FlappyGoobertCleanliness",
      readOnly: true
    })), this.state.showPlayAgain && /*#__PURE__*/React.createElement("div", {
      className: "game-over-panel"
    }, /*#__PURE__*/React.createElement("h3", null, "Game Over"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-warning",
      onClick: () => this.playAgain()
    }, "Play Again")));
  }
}
