"use strict";

/*
 * Goobies Main Menu
 * React switches between Menu and Credits without reloading.
 * All audio is handled by components/audio.js using Howler.js.
 */
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "menu"
    };
    this.showCredits = this.showCredits.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  // Open the Credits screen.
  showCredits() {
    indexClickSound.play();
    this.setState({
      screen: "credits"
    });
  }

  // Return to the Main Menu.
  showMenu() {
    indexClickSound.play();
    this.setState({
      screen: "menu"
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("main", {
      className: "main-menu"
    }, this.state.screen === "menu" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col text-center"
    }, /*#__PURE__*/React.createElement("img", {
      src: "index-images/Goobies_Logo_text.gif",
      alt: "Goobies",
      id: "game-title",
      className: "img-fluid"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "row justify-content-center my-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-10 col-md-6 col-lg-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-continue menu-button w-100",
      onMouseEnter: () => indexHoverSound.play(),
      onClick: () => indexClickSound.play()
    }, "Continue Game"))), /*#__PURE__*/React.createElement("div", {
      className: "row justify-content-center my-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-10 col-md-6 col-lg-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-new-game menu-button w-100",
      onMouseEnter: () => indexHoverSound.play(),
      onClick: () => {
        indexClickSound.play();
        window.location.href = "hub.html";
      }
    }, "New Game"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-credits menu-button btn-lg position-fixed bottom-0 start-0 m-5",
      onMouseEnter: () => indexHoverSound.play(),
      onClick: this.showCredits
    }, "Credits")) : /*#__PURE__*/React.createElement(Credits, {
      onBack: this.showMenu,
      onHover: () => indexHoverSound.play()
    }));
  }
}

// Start React after the page and components have loaded.
ReactDOM.createRoot(document.getElementById("content")).render(/*#__PURE__*/React.createElement(MainMenu, null));
