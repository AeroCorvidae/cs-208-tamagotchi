'use strict';

const MAX_EYE_TYPES = 10;
const MAX_BODY_TYPES = 7;
const MAX_LEG_TYPES = 7;
const MAX_MOUTH_TYPES = 11;
const MAX_COLORS = 7;
const BODY_SPRITE_SHEET = 'assets/goobert-parts/208-tamagotchi-bodies.png';
const LEG_SPRITE_SHEET = 'assets/goobert-parts/208-tamagotchi-legs.png';
const EYES_SPRITE_SHEET = 'assets/goobert-parts/208-tamagotchi-eyes.png';
const MOUTH_SPRITE_SHEET = 'assets/goobert-parts/208-tamagotchi-mouths.png';
class Goobert extends React.Component {
  constructor(props) {
    super(props);
    this.room = this.props.room || rooms.hub;
    this.name = this.props.name;
    this.xLocation = this.props.x; //Where the goobert is
    this.yLocation = this.props.y;

    /* Setting assets to random index based on how many types/colors there currently are*/
    this.bodyType = this.props.bodyType || Math.floor(Math.random() * MAX_BODY_TYPES);
    this.bodyColor = this.props.bodyColor || Math.floor(Math.random() * MAX_COLORS);
    this.legType = this.props.legType || Math.floor(Math.random() * MAX_LEG_TYPES);
    this.legColor = this.props.legColor || Math.floor(Math.random() * MAX_COLORS);
    this.eyeType = this.props.eyeType || Math.floor(Math.random() * MAX_EYE_TYPES);
    this.mouthType = this.props.mouthType || Math.floor(Math.random() * MAX_MOUTH_TYPES);
    this.eyeExpression = this.props.eyeExpression || 0;
    this.mouthExpression = this.props.mouthExpression || 0;
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "goobert-container",
      onClick: () => this.click(this.name),
      style: {
        left: `${this.xLocation}px`,
        top: `${this.yLocation}px`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/goobert-parts/208-tamagotchi-legs.png",
      style: {
        left: `${this.legColor * -64}px`,
        top: `${this.legType * -64}px`
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "assets/goobert-parts/208-tamagotchi-bodies.png",
      style: {
        left: `${this.bodyColor * -64}px`,
        top: `${this.bodyType * -64}px`
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "assets/goobert-parts/208-tamagotchi-mouths.png",
      style: {
        left: `${this.mouthExpression * -64}px`,
        top: `${this.mouthType * -64}px`
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "assets/goobert-parts/208-tamagotchi-eyes.png",
      style: {
        left: `${this.eyeExpression * -64}px`,
        top: `${this.eyeType * -64}px`
      }
    }));
  }
  setBodyType(type) {
    this.bodyType = type;
    this.setState({});
  }
  setBodyColor(type) {
    this.bodyColor = type;
    this.setState({});
  }
  setLegsType(type) {
    this.legType = type;
    this.setState({});
  }
  setLegsColor(type) {
    this.legColor = type;
    this.setState({});
  }
  setEyes(type) {
    this.eyeType = type;
    this.setState({});
  }
  setEyeExpression(type) {
    this.eyeExpression = type;
    this.setState({});
  }
  setMouth(type) {
    this.mouthType = type;
    this.setState({});
  }
  setMouthExpression(type) {
    this.mouthExpression = type;
    this.setState({});
  }

  /* Sets the position of the sprite */
  setPosition(x, y) {
    this.xLocation = x;
    this.yLocation = y;
    this.setState({});
  }

  /* Will trigger only for a particular instance of a goobert when the sprite is clicked */
  click(name) {
    console.log(`${name} says, "I've been poked!"`);
    this.props.onGoobertSelected();
  }
}
