"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let rooms = {
  hub: /*#__PURE__*/React.createElement(Hub, null),
  gameRoom: /*#__PURE__*/React.createElement(GameRoom, null),
  shop: /*#__PURE__*/React.createElement(Shop, null),
  bedroom: /*#__PURE__*/React.createElement(Bedroom, null),
  dungeon: /*#__PURE__*/React.createElement(Dungeon, null),
  snakeGame: /*#__PURE__*/React.createElement(SnakeGame, null),
  flappyGoobert: /*#__PURE__*/React.createElement(FlappyGoobert, null)
};
class TopElement extends React.Component {
  constructor(props) {
    super(props);
    this.gooberts = [];
    gooberts = this.gooberts;
    this.room = rooms.hub;
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.room, this.gooberts
    // Only keep Gooberts whose location matches the current room
    .filter(goobert => {
      return goobert.location == this.room;
    })

    // Create a Goobert component for each matching Goobert
    .map(goobert => /*#__PURE__*/React.createElement(Goobert, _extends({
      key: goobert.id // Unique ID helpts React track each Goobert
    }, goobert))));
  }
  load(component) {
    // Display the selected room.
    this.room = rooms[component];
    this.setState({
      room: rooms[component]
    });
  }
  createGoobert(goobert) {
    this.gooberts.push({
      ...goobert
    });
    this.setState({});
  }
}
let topElement, gooberts;
const root = ReactDOM.createRoot(document.getElementById("content"));
function init() {
  topElement = React.createRef();
  root.render(/*#__PURE__*/React.createElement(TopElement, {
    ref: topElement
  }));
}
init();
function load(component) {
  topElement.current.load(component);
}
function createGoobert(name, location = rooms.hub, x = Math.random() * (window.innerWidth - 64 /* goobert width */), y = Math.random() * (window.innerHeight - 550 - 64 /* goobert height */) + 550) {
  topElement.current.createGoobert({
    name: name,
    x: x,
    y: y,
    location: location,
    id: name + topElement.current.gooberts.length,
    fullness: 0,
    // Eating, catch the food game
    swagosity: 50,
    // Boredom, Snake
    awakeness: 50,
    // Sleeping
    cleanliness: 50,
    // Bathing, Flappy Goobert

    bodyType: Math.floor(Math.random() * MAX_BODY_TYPES),
    bodyColor: Math.floor(Math.random() * MAX_COLORS),
    legType: Math.floor(Math.random() * MAX_LEG_TYPES),
    legColor: Math.floor(Math.random() * MAX_COLORS),
    eyeType: Math.floor(Math.random() * MAX_EYE_TYPES),
    mouthType: Math.floor(Math.random() * MAX_MOUTH_TYPES),
    eyeExpression: 0,
    mouthExpression: 0,
    eat: (amt = 10) => this.fullness += amt,
    sleep: () => this.awakeness = 100,
    entertain: quality => this.swagosity += quality,
    bathe: amt => this.cleanliness += amt
  });
}
