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
    // split name string into [firstName, lastName]
    var inputValArr = nameInput.value.split(" ");
    // get random index position in allNicknames array
    var randIdx = Math.round(Math.random() * (allNicknames.length - 1));
    /* add nickname to the middle of the array
     * (e.g. [firstName, lastName] -> [firstName, nick, lastName])
     * */
    inputValArr.splice(1, 0, allNicknames[randIdx]);
    // join array back into string with spaces in between each word
    responseSection.innerHTML = "".concat(inputValArr.join(" "));
};
var getAllNicks = function () {
    // split name string into [firstName, lastName]
    var inputValArr = nameInput.value.split(" ");
    // innerHTML of responseSection
    var htmlStr = "";
    // iterate through all nicknames and add to responseStr
    for (var i = 0; i < allNicknames.length; i++) {
        htmlStr += "<div>".concat(inputValArr[0], " ").concat(allNicknames[i], " ").concat(inputValArr[1], "</div>");
    }
    responseSection.innerHTML = htmlStr;
};
randomNickBtn.addEventListener("click", getRandomNick);
allNickBtn.addEventListener("click", getAllNicks);
