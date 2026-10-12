'use strict';

let numOfGooberts = 0;
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
    this.name = this.props.name, this.antihunger = 0,
    // Eating, catch the food game
    this.swagosity = 50,
    // Boredom, Snake
    this.snooziness = 50,
    // Sleeping
    this.cleanliness = 50,
    // Bathing, Flappy Goobert
    this.xLocation = this.props.x,
    //Where the goobert is
    this.yLocation = this.props.y, /* Sprite builder properties */
    this.goobertId = this.name + numOfGooberts, this.bodyId = this.goobertId + "body", this.legId = this.goobertId + "legs", this.eyeId = this.goobertId + "eyes", this.mouthId = this.goobertId + "mouth", /* Setting assets to random index based on how many types/colors there currently are*/
    this.bodyType = Math.floor(Math.random() * MAX_BODY_TYPES), this.bodyColor = Math.floor(Math.random() * MAX_COLORS), this.legType = Math.floor(Math.random() * MAX_LEG_TYPES), this.legColor = Math.floor(Math.random() * MAX_COLORS), this.eyeType = Math.floor(Math.random() * MAX_EYE_TYPES), this.mouthType = Math.floor(Math.random() * MAX_MOUTH_TYPES);
    this.eyeExpression = 0;
    this.mouthExpression = 0;
    numOfGooberts++;
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "goobert-container",
      style: {
        left: `${this.xLocation}px`,
        top: `${this.yLocation}px`
      }
    }, /*#__PURE__*/React.createElement("img", {
      id: this.legId,
      src: "assets/goobert-parts/208-tamagotchi-legs.png",
      style: {
        left: `${this.legColor * -64}px`,
        top: `${this.legType * -64}px`
      }
    }), /*#__PURE__*/React.createElement("img", {
      id: this.bodyId,
      src: "assets/goobert-parts/208-tamagotchi-bodies.png",
      style: {
        left: `${this.bodyColor * -64}px`,
        top: `${this.bodyType * -64}px`
      }
    }), /*#__PURE__*/React.createElement("img", {
      id: this.mouthId,
      src: "assets/goobert-parts/208-tamagotchi-mouths.png",
      style: {
        left: `${this.mouthExpression * -64}px`,
        top: `${this.mouthType * -64}px`
      }
    }), /*#__PURE__*/React.createElement("img", {
      id: this.eyeId,
      src: "assets/goobert-parts/208-tamagotchi-eyes.png",
      style: {
        left: `${this.eyeExpression * -64}px`,
        top: `${this.eyeType * -64}px`
      }
    }));
  }
  sleep() {
    this.snooziness = 100;
    console.log(this);
  }
  eat(amt = 10) {
    this.antihunger >= 100 ? 100 : this.antihunger += amt;
    console.log(this);
  }
  bathe(amt = 1) {
    this.cleanliness += amt;
  }
  setBodyType(type) {
    this.bodyType = type;
    this.setState({});
    const element = document.getElementById(this.bodyId);
    element.style.backgroundPositionY = this.bodyType * -64 + 'px';
    console.log(this.name + "'s body type set.");
  }
  setBodyColor() {
    const element = document.getElementById(this.bodyId);
    element.style.backgroundPositionX = this.bodyColor * -64 + 'px';
    console.log(this.name + "'s body color set.");
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
  onClick() {
    console.log(`${this.name} says, "I've been poked!"`);
  }
}
