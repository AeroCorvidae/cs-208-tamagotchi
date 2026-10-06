"use strict";

const oldGooberts = ["david0", "emily1", "grubert2"];

oldGooberts.forEach(function(goobertId) {
    document.getElementById(goobertId)?.remove();
    document.getElementById(goobertId + "body")?.remove();
    document.getElementById(goobertId + "legs")?.remove();
    document.getElementById(goobertId + "eyes")?.remove();
    document.getElementById(goobertId + "mouth")?.remove();
});

// CHANGING THE GOOBERTS EYES
let eyesArea = document.getElementById("tree-eyes-area");
eyesArea.onclick = function() {
    changeEyes();
};

// CHANGING GOOBERT BODY
let bodyArea = document.getElementById("tree-body-area");
bodyArea.onclick = function() {
    changeBodyType();
};

// CHANGING GOOBERT LEGS
let legArea = document.getElementById("tree-legs-area");
legArea.onclick = function() {
    changeLegType();
}

// CHANGING GOOBERT MOUTH
let mouthArea = document.getElementById("tree-mouth-area");
mouthArea.onclick = function() {
    changeMouth();
}

// CHANGING GOOBERT BODY COLOR
let bodyAreaColor = document.getElementById("tree-body-color"); 
bodyAreaColor.onclick = function() {
    changeBodyColor();
}

//CHANGING GOOBERT LEG COLOR
let legAreaColor = document.getElementById("tree-legs-color");
legAreaColor.onclick = function() {
    changeLegColor();
}
