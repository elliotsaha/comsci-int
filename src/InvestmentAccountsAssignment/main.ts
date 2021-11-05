// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu") as HTMLInputElement;
let addAccountPrompt = document.getElementById("addAccountPrompt");
let promptOverlay = document.getElementById("promptOverlay");
let addAccountError = document.getElementById("addAccountError");
let addAccountBtn = document.getElementById("addAccountBtn");
let addAccountInput = document.getElementById(
  "addAccountInput"
) as HTMLInputElement;

// Global Variable
let accounts: Array<number> = [];
let maxAmount = 5000; // account values should be b/t 0 and max

// Add Accounts
addInitialAccounts();
// Display Data
drawArray();

function addInitialAccounts() {
  // add 200 accounts into accounts array
  for (let i = 0; i < 200; i++) {
    const randAccount = Math.random() * 5000; // random value between 0 - 5000
    accounts.push(randAccount);
  }
}

function drawArray() {
  let outputStr = "";
  let divHeight;

  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);
function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] >= 2000 && accounts[i] <= 4000) {
      count++;
    }
  }
  outputEl.innerHTML = `The number of accounts between $2,000 & $4,000 is ${count}`;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000.
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.
  let totalAmount = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
      totalAmount += 500;
    }
  }
  outputEl.innerHTML = `the total amount donated is $${totalAmount.toFixed(2)}`;
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.
  let totalAmount = 0;
  for (let i = 0; i < accounts.length; i++) {
    totalAmount += accounts[i] * 0.05;
    accounts[i] *= 0.95;
  }
  outputEl.innerHTML = `the total amount stolen by the hacker is $${totalAmount.toFixed(
    2
  )}`;
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.
  const max = Math.max(...accounts);
  const min = Math.min(...accounts);
  let sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    sum += accounts[i];
  }
  const avg = sum / accounts.length;
  outputEl.innerHTML = `min account amount: $${min.toFixed(
    2
  )}, max account amount: $${max.toFixed(
    2
  )}, avg account amount: $${avg.toFixed(2)}`;
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.

  const closePrompt = () => {
    addAccountPrompt.style.display = "none";
    promptOverlay.style.display = "none";
  };

  const openPrompt = () => {
    addAccountPrompt.style.display = "block";
    promptOverlay.style.display = "block";
  };

  const openAccount = (initialMoney: number) => {
    // cap value at maxAmount
    accounts.push(Math.min(maxAmount, initialMoney));
    drawArray();

    const over5000warning =
      initialMoney > maxAmount
        ? "(Max value for initial account openings are $5,000)"
        : "";

    outputEl.innerHTML = `New Account opened with the opening amount of: $${Math.min(
      maxAmount,
      initialMoney
    )}
     ${over5000warning}`;
  };

  // initially open prompt
  openPrompt();

  addAccountBtn.addEventListener("click", () => {
    const numInput = parseFloat(addAccountInput.value);
    if (isNaN(numInput)) {
      addAccountError.innerHTML = "Invalid Number";
    } else {
      openAccount(numInput);
      closePrompt();
    }
  });
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.

  let removeSum = 0;
  for (let i = accounts.length - 1; i >= 0; i--) {
    if (accounts[i] < 500) {
      removeSum++;
      accounts.splice(i, 1);
    }
  }
  outputEl.innerHTML = `${removeSum} accounts removed`;
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and
  // how much each account received.

  // amount taken from rich
  let richMoneySum = 0;

  // count for accounts that have under $1000
  let poorAccountSum = 0;

  const min = Math.min(...accounts);
  const max = Math.max(...accounts);

  // every account has more than or equal to $1,000
  if (min >= 1000) {
    outputEl.innerHTML = `There are no accounts that have less than $1000`;
    return;
  }

  // every account has less than or equal to $4,000
  if (max <= 4000) {
    outputEl.innerHTML = `There are no accounts that have more than $4000`;
    return;
  }

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 1000) {
      poorAccountSum++;
    }
    if (accounts[i] > 4000) {
      accounts[i] -= 400;
      richMoneySum += 400;
    }
  }

  const distrib = richMoneySum / poorAccountSum;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 1000) {
      accounts[i] += distrib;
    }
  }

  outputEl.innerHTML = `${poorAccountSum} account(s) recieved $${(
    richMoneySum / poorAccountSum
  ).toFixed(2)}`;
}

export {};
