"use strict";

/* TODO: 
 - change the goobert to match the appearance of the clicked goobert
 - change the stats to match the stats of the clicked goobert
 - make the card be able to rotate and have the goobert, statbars, and icons line up correctly
 - render the card to the page via React 
 */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
class UIGoobertCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.goobert);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "info-card"
    }, /*#__PURE__*/React.createElement("img", {
      id: "card-frame-back",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement(Goobert, _extends({}, this.props.goobert, {
      x: "0.6em",
      y: "0.6em",
      className: "goobert-container icon"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ui-statbar-container"
    }, /*#__PURE__*/React.createElement("img", {
      id: "ui-statbar-fullness",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "ui-statbar-awakeness",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "ui-statbar-swagosity",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "ui-statbar-cleanliness",
      src: "assets/goobert-parts/Transparent-BG.png"
    })), /*#__PURE__*/React.createElement("img", {
      id: "card-frame-front",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ui-icon-container"
    }, /*#__PURE__*/React.createElement("img", {
      id: "ui-icon-fullness",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "ui-icon-awakeness",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "ui-icon-swagosity",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "ui-icon-cleanliness",
      src: "assets/goobert-parts/Transparent-BG.png"
    })), /*#__PURE__*/React.createElement("img", {
      id: "ui-card-xbutton",
      src: "assets/goobert-parts/Transparent-BG.png"
    }));
  }
}
