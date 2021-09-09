"use strict";
// Minecraft Fishing Simulator by Mr. V
// HTML Elements
var steveImgEl = document.getElementById("steve-img");
var alexImgEl = document.getElementById("alex-img");
var villagerImgEl = document.getElementById("villager-img");
var fishBtnEl = document.getElementById("fish-btn");
var resultImgEl = document.getElementById("result-img");
var codSpanEl = document.getElementById("cod-span");
var salmonSpanEl = document.getElementById("salmon-span");
var tropicalSpanEl = document.getElementById("tropical-span");
var pufferSpanEl = document.getElementById("puffer-span");
// Global Variables
var character = "steve";
var numCod = 0;
var numSalmon = 0;
var numTropical = 0;
var numPuffer = 0;
// Fish Event
fishBtnEl.addEventListener("click", catchFish);
var simulateCatch = function (codChance, salmonChance, tropicalChance, pufferChance) {
    var randNum = Math.random();
    var chanceArr = [codChance, salmonChance, tropicalChance, pufferChance];
    var sum = 0;
    // functions for each possibility in chanceArr
    var functionList = [
        function () {
            numCod++;
            codSpanEl.innerHTML = numCod.toString();
            resultImgEl.src = "img/Raw-Cod.png";
        },
        function () {
            numSalmon++;
            salmonSpanEl.innerHTML = numSalmon.toString();
            resultImgEl.src = "img/Raw-Salmon.png";
        },
        function () {
            numTropical++;
            tropicalSpanEl.innerHTML = numTropical.toString();
            resultImgEl.src = "img/Tropical-Fish.png";
        },
        function () {
            numPuffer++;
            pufferSpanEl.innerHTML = numPuffer.toString();
            resultImgEl.src = "img/Pufferfish.png";
        },
    ];
    for (var i = 0; i < chanceArr.length; i++) {
        sum += chanceArr[i] / 100;
        if (randNum < sum) {
            functionList[i]();
            return;
        }
    }
};
function catchFish() {
    // STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)
    // ALEX PROBABILITIES: cod (10%), salmon (10%), tropical (30%), puffer (50%)
    // VILLAGER PROBABILITIES: cod (25%), salmon (25%), tropical (25%), puffer (25%)
    if (character === "steve") {
        simulateCatch(70, 20, 5, 5);
    }
    else if (character === "alex") {
        simulateCatch(10, 10, 30, 50);
    }
    else {
        simulateCatch(25, 25, 25, 25);
    }
}
// Character Select
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);
function selectSteve() {
    character = "steve";
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.remove("active");
}
function selectAlex() {
    character = "alex";
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");
    villagerImgEl.classList.remove("active");
}
function selectVillager() {
    character = "villager";
    steveImgEl.classList.remove("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.add("active");
}
