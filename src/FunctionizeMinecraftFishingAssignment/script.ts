// Minecraft Fishing Simulator by Mr. V

// HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let resultImgEl = document.getElementById("result-img") as HTMLImageElement;
let codSpanEl = document.getElementById("cod-span");
let salmonSpanEl = document.getElementById("salmon-span");
let tropicalSpanEl = document.getElementById("tropical-span");
let pufferSpanEl = document.getElementById("puffer-span");

// Global Variables
let character = "steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Event
fishBtnEl.addEventListener("click", catchFish);

const simulateCatch = (
  codChance: number,
  salmonChance: number,
  tropicalChance: number,
  pufferChance: number
) => {
  const randNum = Math.random();
  const chanceArr = [codChance, salmonChance, tropicalChance, pufferChance];
  let sum = 0;

  // functions for each possibility in chanceArr
  let functionList = [
    () => {
      numCod++;
      codSpanEl.innerHTML = numCod.toString();
      resultImgEl.src = "img/Raw-Cod.png";
    },
    () => {
      numSalmon++;
      salmonSpanEl.innerHTML = numSalmon.toString();
      resultImgEl.src = "img/Raw-Salmon.png";
    },
    () => {
      numTropical++;
      tropicalSpanEl.innerHTML = numTropical.toString();
      resultImgEl.src = "img/Tropical-Fish.png";
    },
    () => {
      numPuffer++;
      pufferSpanEl.innerHTML = numPuffer.toString();
      resultImgEl.src = "img/Pufferfish.png";
    },
  ];

  for (let i = 0; i < chanceArr.length; i++) {
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
  } else if (character === "alex") {
    simulateCatch(10, 10, 30, 50);
  } else {
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
