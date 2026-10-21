"use strict";

/* Credits screen. This is a React screen, not another HTML page. */
function Credits(props) {
  return /*#__PURE__*/React.createElement("section", {
    className: "credits-screen",
    "aria-label": "Goobies credits"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-credits credits-back menu-button",
    onMouseEnter: props.onHover,
    onClick: props.onBack
  }, "Back to Menu"), /*#__PURE__*/React.createElement("div", {
    className: "credits-window"
  }, /*#__PURE__*/React.createElement("div", {
    className: "credits-scroll"
  }, /*#__PURE__*/React.createElement("h1", null, "GOOBIES"), /*#__PURE__*/React.createElement("h2", null, "Development Team"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#FF4D6D"
    }
  }, "Annette"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#FF922B"
    }
  }, "Elena"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#FFD43B"
    }
  }, "Joseph"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#51CF66"
    }
  }, "Katalina"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#22B8CF"
    }
  }, "Quinton"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#4C6EF5"
    }
  }, "Spencer"), /*#__PURE__*/React.createElement("h2", null, "Art & Assets"), /*#__PURE__*/React.createElement("p", null, "Menu Background \u2014 KrycerKris / DeviantArt"), /*#__PURE__*/React.createElement("p", null, "Sound Effects \u2014 Freesound / freesound.org"), /*#__PURE__*/React.createElement("h2", null, "Music"), /*#__PURE__*/React.createElement("p", null, "Title Music \u2014 Spencer Elayer"), /*#__PURE__*/React.createElement("p", null, "Main Theme \u2014 Spencer Elayer"), /*#__PURE__*/React.createElement("p", null, "Game Room \u2014 moodmode / pixabay.com"), /*#__PURE__*/React.createElement("p", null, "Fonts \u2014 Pixelify Sans"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#BE4BDB"
    }
  }, "Thanks for playing!"))));
}
