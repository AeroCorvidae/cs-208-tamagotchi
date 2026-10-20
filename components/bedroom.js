class Bedroom extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", {
      className: "bedroom"
    }, /*#__PURE__*/React.createElement("div", {
      id: "wall"
    }, /*#__PURE__*/React.createElement("button", {
      className: "bedroom-logo",
      onClick: () => alert('You found my secret easter egg!')
    }, /*#__PURE__*/React.createElement("img", {
      className: "img-fluid",
      src: "bedroom-images/BedroomLogo.webp",
      alt: "BedRoom"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bedroom-controls"
    }, /*#__PURE__*/React.createElement("button", {
      className: "bedroom-exit-button",
      onClick: () => load("hub")
    }, /*#__PURE__*/React.createElement("img", {
      className: "bedroom-exit-icon",
      src: "assets/pixelarticons/arrow-left.svg",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", null, "BACK TO HUB")))), /*#__PURE__*/React.createElement("div", {
      id: "floor-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bedroom-beds"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => david.sleep(),
      className: "bedroom-bed-button",
      title: "Click Here to sleep!"
    }, /*#__PURE__*/React.createElement("img", {
      src: "bedroom-images/GoobBedWeb.png",
      alt: ""
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => david.sleep(),
      className: "bedroom-bed-button",
      title: "Click Here to sleep!"
    }, /*#__PURE__*/React.createElement("img", {
      src: "bedroom-images/GoobBedWeb.png",
      alt: ""
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => david.sleep(),
      className: "bedroom-bed-button",
      title: "Click Here to sleep!"
    }, /*#__PURE__*/React.createElement("img", {
      src: "bedroom-images/GoobBedWeb.png",
      alt: ""
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => david.sleep(),
      className: "bedroom-bed-button",
      title: "Click Here to sleep!"
    }, /*#__PURE__*/React.createElement("img", {
      src: "bedroom-images/GoobBedWeb.png",
      alt: ""
    })))));
  }
}
