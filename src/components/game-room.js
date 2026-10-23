"use strict";

/*
 * Game Room
 * Displays five arcade machines.
 *
 * Snake and Flappy Goobert are playable.
 * The other three machines only play sound effects.
 */

// The first Goobie receives rewards from arcade games.
let gameGoobert = null;
class GameRoom extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", {
      id: "main",
      className: "game-room"
    }, /*#__PURE__*/React.createElement("div", {
      className: "game-room-controls"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn game-room-exit",
      onClick: () => {
        doorOpenSound.play();
        load("hub");
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "game-room-exit-icon",
      src: "assets/pixelarticons/arrow-left.svg",
      alt: "",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", null, "Back to hub"))), /*#__PURE__*/React.createElement("div", {
      className: "game-room-logo-wrap"
    }, /*#__PURE__*/React.createElement("img", {
      src: "game-room-images/game-room-logo.png",
      alt: "Game Room",
      className: "game-room-logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "game-room-machines"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "machine-button",
      onMouseEnter: () => arcadeHoverSound.play(),
      onClick: () => {
        arcadeClickSound.play();

        // Select the first Goobie for rewards.
        gameGoobert = gooberts[0] || null;

        // Open Snake.
        load("snakeGame");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "game-room-images/snake-machine.png",
      alt: "Play Snake"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "machine-button",
      onMouseEnter: () => arcadeHoverSound.play(),
      onClick: () => {
        arcadeClickSound.play();

        // Select the first Goobie for rewards.
        gameGoobert = gooberts[0] || null;

        // Open Flappy Goobert.
        load("flappyGoobert");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "game-room-images/flappy-goobert-machine.png",
      alt: "Play Flappy Goobert"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "machine-button",
      onMouseEnter: () => arcadeHoverSound.play(),
      onClick: () => arcadeClickSound.play()
    }, /*#__PURE__*/React.createElement("img", {
      src: "game-room-images/frogoobert-machine.png",
      alt: "Frogoobert - Coming Soon"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "machine-button",
      onMouseEnter: () => arcadeHoverSound.play(),
      onClick: () => arcadeClickSound.play()
    }, /*#__PURE__*/React.createElement("img", {
      src: "game-room-images/pipelined-machine.png",
      alt: "Pipelined - Coming Soon"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "machine-button",
      onMouseEnter: () => arcadeHoverSound.play(),
      onClick: () => arcadeClickSound.play()
    }, /*#__PURE__*/React.createElement("img", {
      src: "game-room-images/feast-fest-machine.png",
      alt: "Feast Fest - Coming Soon"
    }))));
  }
}
