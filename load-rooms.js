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
    this.room = rooms.hub;
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SharedAudioManager, null), this.room, this.gooberts.filter((goobert, i) => {
      return goobert.location == this.room;
    }).map((goobert, i) => /*#__PURE__*/React.createElement(Goobert, _extends({
      key: goobert.id
    }, goobert))));
  }
  load(component) {
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
let topElement;
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
function createGoobert(name, x, y, location = rooms.hub) {
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
