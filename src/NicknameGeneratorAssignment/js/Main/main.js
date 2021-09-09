"use strict";
var nameInput = document.getElementById("nameInput");
var randomNickBtn = document.getElementById("randomNickBtn");
var allNickBtn = document.getElementById("allNickBtn");
var responseSection = document.getElementById("responseSection");
// all possible nicknames that can be shown
var allNicknames = [
    "\"Crusher\"",
    "\"The Scientist\"",
    "\"The Madman\"",
    "\"The Coder\"",
    "\"The Jester\"",
    "\"The Sloth\"",
    "\"Quick-Silver\"",
    "\"Retro\"",
];
var getRandomNick = function () {
    // convert input string into array
    var inputValArr = nameInput.value.split(" ");
    // get random index position in allNicknames array
    var randIdx = Math.round(Math.random() * (allNicknames.length - 1));
    /* add nickname to the middle of the array
     * (e.g. [firstName, lastName] -> [firstName, nick, lastName])
     * */
    inputValArr.splice(1, 0, allNicknames[randIdx]);
    // join array back into string with spaces in between each word
    responseSection.innerHTML = "" + inputValArr.join(" ");
};
var getAllNicks = function () {
    // convert input string into array
    var inputValArr = nameInput.value.split(" ");
    var responseStr = "";
    // iterate through all nicknames and add to responseStr
    for (var i = 0; i < allNicknames.length; i++) {
        responseStr += "<div>" + inputValArr[0] + " " + allNicknames[i] + " " + inputValArr[1] + "</div>";
    }
    responseSection.innerHTML = responseStr;
};
randomNickBtn.addEventListener("click", getRandomNick);
allNickBtn.addEventListener("click", getAllNicks);
