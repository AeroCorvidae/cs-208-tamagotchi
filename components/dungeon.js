class Dungeon extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", {
      className: "dungeon"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dungeonWrapper d-flex flex-column justify-content-between vh-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dungeonWall"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 text-center"
    }, /*#__PURE__*/React.createElement("img", {
      id: "escape",
      className: "img-fluid",
      src: "assets/doors/Ladder.webp",
      alt: "Return to Hub"
      // Play the Dungeon click sound before returning.
      ,
      onClick: () => {
        ladderClickSound.play();
        load("hub");
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "dungeonFloor"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12"
    }))));
  }
}
