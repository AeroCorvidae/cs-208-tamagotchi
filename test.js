/* Basic asset index selectors. */
let bodyType = 0;
let bodyColor = 0;
let legType = 0;
let legColor = 0;
let eyeType = 0;
let mouthType = 0;

/* Controls for the test goobert */
const randomizeFeatures = () => {
    bodyType = Math.floor(Math.random() * 7);
    bodyColor = Math.floor(Math.random() * 7);
    legType = Math.floor(Math.random() * 7);
    legColor = Math.floor(Math.random() * 7);
    eyeType = Math.floor(Math.random() * 7);
    mouthType = Math.floor(Math.random() * 7);
    setBodyType(bodyType);
    setBodyColor(bodyColor);
    setLegsType(legType);
    setLegsColor(legColor);
    setEyes(eyeType);
    setMouth(mouthType);
    console.log("Features randomized.")
}

const changeBodyType = function() {
    console.log("I changed the body type.")
    
    if (bodyType == 6) {
        bodyType = 0;
        console.log("Body type reset to zero.")
    } else {
        bodyType += 1;
    }
    setBodyType(bodyType);
}

const changeBodyColor = function() {
    console.log("I changed the body color.")
    if (bodyColor == 6) {
        bodyColor = 0;
        console.log("Body color reset to zero.")
    } else {
        bodyColor += 1;
    }
    setBodyColor(bodyColor)
}

const changeLegType = function() {
    console.log("I changed the leg type.")
    if (legType == 6) {
        legType = 0;
        console.log("Leg type reset to zero.")
    } else {
        legType += 1;
    }
    setLegsType(legType);
}

const changeLegColor = function() {
    console.log("I changed the leg color.")
    if (legColor == 6) {
        legColor = 0;
        console.log("Leg color reset to zero.")
    } else {
        legColor += 1;
    }
    setLegsColor(legColor);
}

const changeEyes = function() {
    console.log("I changed the eyes.")
    if (eyeType == 6) {
        eyeType = 0;
        console.log("Eye type reset to zero.")
    } else {
        eyeType += 1;
    }
    setEyes(eyeType);
}

const changeMouth = function() {
    console.log("I changed the mouth.")
    if (mouthType == 6) {
        mouthType = 0;
        console.log("Mouth type reset to zero.")
    } else {
        mouthType += 1;
    }
    setMouth(mouthType);
}
/* The following functions set the features of the test goobert. */
const setBodyType = (assetIndex) => {
    const element = document.getElementById('goobert-body');
    element.style.backgroundPositionY = (bodyType*(-64)) + 'px';
    console.log("Body type set.")
}

const setBodyColor = (assetIndex) => {
    const element = document.getElementById('goobert-body');
    element.style.backgroundPositionX = (assetIndex*(-64)) + 'px';
    console.log("Body color set.")
}

const setLegsType = (assetIndex) => {
    const element = document.getElementById('goobert-legs');
    element.style.backgroundPositionY = (assetIndex*(-64)) + 'px';
    console.log("Leg type set.");
}

const setLegsColor = (assetIndex) => {
    const element = document.getElementById('goobert-legs');
    element.style.backgroundPositionX = (assetIndex*(-64)) + 'px';
    console.log("Leg color set.");
}

const setEyes = (assetIndex) => {
    const element = document.getElementById('goobert-eyes');
    element.style.backgroundPositionY = (assetIndex*(-64)) + 'px';
    console.log("Eye type set.");
}

const setMouth = (assetIndex) => {
    const element = document.getElementById('goobert-mouth');
    element.style.backgroundPositionY = (assetIndex*(-64)) + 'px';
    console.log("Mouth type set.");
}