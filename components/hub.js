"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestGoobert = (function (_React$Component) {
    _inherits(TestGoobert, _React$Component);

    function TestGoobert(props) {
        _classCallCheck(this, TestGoobert);

        _get(Object.getPrototypeOf(TestGoobert.prototype), "constructor", this).call(this, props);
    }

    _createClass(TestGoobert, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "goobert-container", style: { scale: "3 3", left: "17em", top: "36em" } },
                React.createElement("img", { id: "goobert-legs", src: "assets/goobert-parts/Transparent-BG.png" }),
                React.createElement("img", { id: "goobert-body", src: "assets/goobert-parts/Transparent-BG.png" }),
                React.createElement("img", { id: "goobert-mouth", src: "assets/goobert-parts/Transparent-BG.png" }),
                React.createElement("img", { id: "goobert-eyes", src: "assets/goobert-parts/Transparent-BG.png" })
            );
        }
    }, {
        key: "setBodyType",
        value: function setBodyType(type) {
            this.bodyType = type;
            this.setState({});

            var element = document.getElementById(this.bodyId);
            element.style.backgroundPositionY = this.bodyType * -64 + 'px';
            console.log(this.name + "'s body type set.");
        }
    }, {
        key: "setBodyColor",
        value: function setBodyColor() {
            var element = document.getElementById(this.bodyId);
            element.style.backgroundPositionX = this.bodyColor * -64 + 'px';
            console.log(this.name + "'s body color set.");
        }
    }, {
        key: "setLegsType",
        value: function setLegsType() {
            var element = document.getElementById(this.legId);
            element.style.backgroundPositionY = this.legType * -64 + 'px';
            console.log(this.name + "'s leg type set.");
        }
    }, {
        key: "setLegsColor",
        value: function setLegsColor() {
            var element = document.getElementById(this.legId);
            element.style.backgroundPositionX = this.legColor * -64 + 'px';
            console.log(this.name + "'s leg color set.");
        }
    }, {
        key: "setEyes",
        value: function setEyes() {
            var element = document.getElementById(this.eyeId);
            element.style.backgroundPositionY = this.eyeType * -64 + 'px';
            console.log(this.name + "'s eye type set.");
        }
    }, {
        key: "setEyeExpression",
        value: function setEyeExpression() {
            var element = document.getElementById(this.eyeId);
            element.style.backgroundPositionX = this.eyeExpression * -64 + 'px';
            console.log(this.name + "'s eye expression set.");
        }
    }, {
        key: "setMouth",
        value: function setMouth() {
            var element = document.getElementById(this.mouthId);
            element.style.backgroundPositionY = this.mouthType * -64 + 'px';
            console.log(this.name + "'s mouth type set.");
        }
    }, {
        key: "setMouthExpression",
        value: function setMouthExpression() {
            var element = document.getElementById(this.mouthId);
            element.style.backgroundPositionX = this.mouthExpression * -64 + 'px';
            console.log(this.name + "'s mouth expression set.");

            this.setState({});
        }
    }]);

    return TestGoobert;
})(React.Component);

var Hub = (function (_React$Component2) {
    _inherits(Hub, _React$Component2);

    function Hub(props) {
        _classCallCheck(this, Hub);

        _get(Object.getPrototypeOf(Hub.prototype), "constructor", this).call(this, props);
    }

    /* Basic asset index selectors. */

    _createClass(Hub, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                { id: "main", className: "hub" },
                React.createElement(
                    "div",
                    { className: "tree-container" },
                    React.createElement("img", { src: "hub-images/gooberts_tree.png",
                        alt: "GOOBERTS HUB",
                        className: "pixelated-tree",
                        id: "goobert-tree" }),
                    React.createElement("div", { id: "tree-body-area", onClick: changeBodyType }),
                    React.createElement("div", { id: "tree-legs-area", onClick: changeLegType }),
                    React.createElement("div", { id: "tree-mouth-area", onClick: changeMouth }),
                    React.createElement("div", { id: "tree-eyes-area", onClick: changeEyes }),
                    React.createElement("div", { id: "tree-body-color", onClick: changeBodyColor }),
                    React.createElement("div", { id: "tree-legs-color", onClick: changeLegColor }),
                    React.createElement(TestGoobert, null)
                ),
                React.createElement(
                    "div",
                    { className: "sleep-door-container" },
                    React.createElement("img", { src: "index-images/DreamDoor.webp", alt: "BEDROOM", id: "sleep-door", onClick: function () {
                            load("bedroom");
                        } })
                ),
                React.createElement(
                    "div",
                    { className: "game-door-container" },
                    React.createElement("img", { src: "hub-images/game-door.png", alt: "GAME", id: "game-door", onClick: function () {
                            load("gameRoom");
                        } })
                ),
                React.createElement(
                    "div",
                    { className: "shop-door-container" },
                    React.createElement("img", { src: "hub-images/shop-door.png", alt: "SHOP", id: "shop-door", onClick: function () {
                            load("shop");
                        } })
                ),
                React.createElement(
                    "div",
                    { className: "leave-door-container" },
                    React.createElement("img", { src: "hub-images/leave-door.png", alt: "LEAVE", id: "leave-door", onClick: function () {
                            window.location.href = "index.html";
                        } })
                ),
                React.createElement(
                    "div",
                    { className: "dungeon-door-container" },
                    React.createElement("img", { src: "assets/doors/DungeonDoor.webp", alt: "THE DUNGEON", id: "dungeon-door", onClick: function () {
                            load("dungeon");
                        } })
                ),
                React.createElement(SettingsPanel, {
                    buttonClassName: "game-room-settings-button",
                    panelClassName: "game-room-settings-panel"
                })
            );
        }
    }]);

    return Hub;
})(React.Component);

var hubAssets = {
    bodyType: 0,
    bodyColor: 0,
    legType: 0,
    legColor: 0,
    eyeType: 0,
    eyeExpression: 0,
    mouthType: 0,
    mouthExpression: 0
};

/* Controls for the test goobert */
var randomizeFeatures = function randomizeFeatures() {
    hubAssets.bodyType = Math.floor(Math.random() * 7);
    hubAssets.bodyColor = Math.floor(Math.random() * 7);
    hubAssets.legType = Math.floor(Math.random() * 7);
    hubAssets.legColor = Math.floor(Math.random() * 7);
    hubAssets.eyeType = Math.floor(Math.random() * 10);
    hubAssets.mouthType = Math.floor(Math.random() * 11);
    setBodyType(hubAssets.bodyType);
    setBodyColor(hubAssets.bodyColor);
    setLegsType(hubAssets.legType);
    setLegsColor(hubAssets.legColor);
    setEyes(hubAssets.eyeType);
    setMouth(hubAssets.mouthType);
    console.log("Features randomized.");
};

var changeBodyType = function changeBodyType() {
    hubAssets.bodyType = hubAssets.bodyType == 6 ? 0 : hubAssets.bodyType + 1;
    setBodyType(hubAssets.bodyType);
};

var changeBodyColor = function changeBodyColor() {
    hubAssets.bodyColor = hubAssets.bodyColor == 6 ? 0 : hubAssets.bodyColor + 1;
    setBodyColor(hubAssets.bodyColor);
};

var changeLegType = function changeLegType() {
    hubAssets.legType = hubAssets.legType == 6 ? 0 : hubAssets.legType + 1;
    setLegsType(hubAssets.legType);
};

var changeLegColor = function changeLegColor() {
    hubAssets.legColor = hubAssets.legColor == 6 ? 0 : hubAssets.legColor + 1;
    setLegsColor(hubAssets.legColor);
};

var changeEyes = function changeEyes() {
    hubAssets.eyeType = hubAssets.eyeType == 9 ? 0 : hubAssets.eyeType + 1;
    setEyes(hubAssets.eyeType);
};

var changeEyesExpression = function changeEyesExpression() {
    hubAssets.eyeExpression = hubAssets.eyeExpression == 6 ? 0 : hubAssets.eyeExpression + 1;
    setEyeExpression(hubAssets.eyeExpression);
};

var changeMouth = function changeMouth() {
    hubAssets.mouthType = hubAssets.mouthType == 10 ? 0 : hubAssets.mouthType + 1;
    setMouth(hubAssets.mouthType);
};

var changeMouthExpression = function changeMouthExpression() {
    hubAssets.mouthExpression = hubAssets.mouthExpression == 5 ? 0 : hubAssets.mouthExpression + 1;
    setMouthExpression(hubAssets.mouthExpression);
};

/* The following functions set the features of the test goobert. */
var setBodyType = function setBodyType(assetIndex) {
    var element = document.getElementById('goobert-body');
    element.style.backgroundPositionY = hubAssets.bodyType * -64 + 'px';
    console.log("Body type set.");
};

var setBodyColor = function setBodyColor(assetIndex) {
    var element = document.getElementById('goobert-body');
    element.style.backgroundPositionX = assetIndex * -64 + 'px';
    console.log("Body color set.");
};

var setLegsType = function setLegsType(assetIndex) {
    var element = document.getElementById('goobert-legs');
    element.style.backgroundPositionY = assetIndex * -64 + 'px';
    console.log("Leg type set.");
};

var setLegsColor = function setLegsColor(assetIndex) {
    var element = document.getElementById('goobert-legs');
    element.style.backgroundPositionX = assetIndex * -64 + 'px';
    console.log("Leg color set.");
};

var setEyes = function setEyes(assetIndex) {
    var element = document.getElementById('goobert-eyes');
    element.style.backgroundPositionY = assetIndex * -64 + 'px';
    console.log("Eye type set.");
};
var setEyeExpression = function setEyeExpression(assetIndex) {
    var element = document.getElementById('goobert-eyes');
    element.style.backgroundPositionX = assetIndex * -64 + 'px';
    console.log("Eye expression set.");
};

var setMouth = function setMouth(assetIndex) {
    var element = document.getElementById('goobert-mouth');
    element.style.backgroundPositionY = assetIndex * -64 + 'px';
    console.log("Mouth type set.");
};
var setMouthExpression = function setMouthExpression(assetIndex) {
    var element = document.getElementById('goobert-mouth');
    element.style.backgroundPositionX = assetIndex * -64 + 'px';
    console.log("Mouth expression set.");
};
/* <!--CLickable Areas--> */ /* Goobert Container */
