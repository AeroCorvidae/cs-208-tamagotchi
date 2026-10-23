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
      scriptsReady: false,
      // Whether the Snake scripts have loaded
      selectedDifficulty: null,
      // No diffuculty selected yet
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
        this.setState({
          scriptsReady: true
        });
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
    this.setState({
      selectedDifficulty: difficulty
    }, () => {
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
    return /*#__PURE__*/React.createElement("main", {
      className: "snake-screen"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn game-return-btn",
      onClick: () => load("gameRoom")
    }, "Back to Game Room"), gameGoobert && /*#__PURE__*/React.createElement("div", {
      className: "fullness-label"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "goobert-percentage",
      key: "SnakeFullnessLabel"
    }, "Fullness"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: 0,
      max: 100,
      value: gameGoobert.fullness,
      id: "goobert-percentage",
      key: "SnakeFullness"
    })), showDifficultyPicker && /*#__PURE__*/React.createElement("div", {
      className: "snake-difficulty-menu"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "snake-difficulty-title"
    }, "Select Snake Difficulty"), /*#__PURE__*/React.createElement("div", {
      className: "snake-difficulty-buttons"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-success",
      onClick: () => this.startSnake(25, 25, "Easy"),
      disabled: !this.state.scriptsReady
    }, "Easy"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-warning",
      onClick: () => this.startSnake(17, 17, "Medium"),
      disabled: !this.state.scriptsReady
    }, "Medium"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-danger",
      onClick: () => this.startSnake(10, 10, "Hard"),
      disabled: !this.state.scriptsReady
    }, "Hard"))), /*#__PURE__*/React.createElement("div", {
      id: "main",
      className: "snake-board"
    }), /*#__PURE__*/React.createElement("div", {
      id: "keys",
      className: "d-block d-md-none"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-up text-white bg-warning p-1 rounded-pill key keyup",
      onClick: () => setSnakeVelocity("up"),
      onTouchStart: event => {
        event.preventDefault();
        setSnakeVelocity("up");
      }
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-left text-white bg-warning p-1 rounded-pill key keyleft",
      onClick: () => setSnakeVelocity("left"),
      onTouchStart: event => {
        event.preventDefault();
        setSnakeVelocity("left");
      }
    }), /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-down text-white bg-warning p-1 rounded-pill key keydown",
      onClick: () => setSnakeVelocity("down"),
      onTouchStart: event => {
        event.preventDefault();
        setSnakeVelocity("down");
      }
    }), /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-right text-white bg-warning p-1 rounded-pill key keyright",
      onClick: () => setSnakeVelocity("right"),
      onTouchStart: event => {
        event.preventDefault();
        setSnakeVelocity("right");
      }
    })));
  }
}
