// Investment Accounts Assignment Start Code
// HTML Variables
var containerEl = document.getElementById("container");
var outputEl = document.getElementById("output");
var goBtnEl = document.getElementById("go");
var menuEl = document.getElementById("menu");
var addAccountPrompt = document.getElementById("addAccountPrompt");
var promptOverlay = document.getElementById("promptOverlay");
var addAccountError = document.getElementById("addAccountError");
var addAccountBtn = document.getElementById("addAccountBtn");
var addAccountInput = document.getElementById("addAccountInput");
// Global Variable
var accounts = [];
var maxAmount = 5000; // account values should be b/t 0 and max
// Add Accounts
addInitialAccounts();
// Display Data
drawArray();
function addInitialAccounts() {
    // add 200 accounts into accounts array
    for (var i = 0; i < 200; i++) {
        var randAccount = Math.random() * 5000; // random value between 0 - 5000
        accounts.push(randAccount);
    }
}
function drawArray() {
    var outputStr = "";
    var divHeight;
    for (var i = 0; i < accounts.length; i++) {
        divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
        outputStr += "<div style=\"height:" + divHeight + "px\"></div>";
    }
    containerEl.innerHTML = outputStr;
}
// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);
function mainMenu() {
    // Get value of menu select element
    var selection = menuEl.value;
    // Take action based on menu selection
    if (selection === "count-range") {
        countRange();
    }
    else if (selection === "donor") {
        generousDonor();
    }
    else if (selection === "hacker") {
        hackerAttack();
    }
    else if (selection === "stats") {
        investmentStats();
    }
    else if (selection === "add") {
        addAccount();
    }
    else if (selection === "remove-low") {
        removeLow();
    }
    else if (selection === "robin-hood") {
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
    var count = 0;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] >= 2000 && accounts[i] <= 4000) {
            count++;
        }
    }
    outputEl.innerHTML = "The number of accounts between $2,000 & $4,000 is " + count;
}
function generousDonor() {
    // A generous donor has decided to give $500 to every investment
    // account that has less than $2000.
    // Modify the investment account array to apply this donation.
    // Output the total amount of money that was donated.
    var totalAmount = 0;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] < 2000) {
            accounts[i] += 500;
            totalAmount += 500;
        }
    }
    outputEl.innerHTML = "the total amount donated is $" + totalAmount.toFixed(2);
}
function hackerAttack() {
    // A hacker steals 5% from every account.
    // Modify the investment account array to apply this theft.
    // Output the total amount that was stolen.
    var totalAmount = 0;
    for (var i = 0; i < accounts.length; i++) {
        totalAmount += accounts[i] * 0.05;
        accounts[i] *= 0.95;
    }
    outputEl.innerHTML = "the total amount stolen by the hacker is $" + totalAmount.toFixed(2);
}
function investmentStats() {
    // Output the minimum account amount, the maximum account amount
    // and the average account amount.
    var max = Math.max.apply(Math, accounts);
    var min = Math.min.apply(Math, accounts);
    var sum = 0;
    for (var i = 0; i < accounts.length; i++) {
        sum += accounts[i];
    }
    var avg = sum / accounts.length;
    outputEl.innerHTML = "min account amount: $" + min.toFixed(2) + ", max account amount: $" + max.toFixed(2) + ", avg account amount: $" + avg.toFixed(2);
}
function addAccount() {
    // Prompt for a new account amount and add this to the invesment account
    // array. Output a confirmation that a new account was added with an
    // opening amount of _______.
    var closePrompt = function () {
        addAccountPrompt.style.display = "none";
        promptOverlay.style.display = "none";
    };
    var openPrompt = function () {
        addAccountPrompt.style.display = "block";
        promptOverlay.style.display = "block";
    };
    var openAccount = function (initialMoney) {
        // cap value at maxAmount
        accounts.push(Math.min(maxAmount, initialMoney));
        drawArray();
        var over5000warning = initialMoney > maxAmount
            ? "(Max value for initial account openings are $5,000)"
            : "";
        outputEl.innerHTML = "New Account opened with the opening amount of: $" + Math.min(maxAmount, initialMoney) + "\n     " + over5000warning;
    };
    // initially open prompt
    openPrompt();
    addAccountBtn.addEventListener("click", function () {
        var numInput = parseFloat(addAccountInput.value);
        if (isNaN(numInput)) {
            addAccountError.innerHTML = "Invalid Number";
        }
        else {
            openAccount(numInput);
            closePrompt();
        }
    });
}
function removeLow() {
    // Remove all accounts that are below $500.
    // Output how many accounts were removed.
    var removeSum = 0;
    for (var i = accounts.length - 1; i >= 0; i--) {
        if (accounts[i] < 500) {
            removeSum++;
            accounts.splice(i, 1);
        }
    }
    outputEl.innerHTML = removeSum + " accounts removed";
}
function robinHood() {
    // Steal from the rich and give to the poor.
    // Take $400 from every account that has over $4000.
    // Then evenly distribute the total amount taken between all the
    // accounts that have less than $1000.
    // Output how many accounts received money and
    // how much each account received.
    // amount taken from rich
    var richMoneySum = 0;
    // count for accounts that have under $1000
    var poorAccountSum = 0;
    var min = Math.min.apply(Math, accounts);
    var max = Math.max.apply(Math, accounts);
    // every account has more than or equal to $1,000
    if (min >= 1000) {
        outputEl.innerHTML = "There are no accounts that have less than $1000";
        return;
    }
    // every account has less than or equal to $4,000
    if (max <= 4000) {
        outputEl.innerHTML = "There are no accounts that have more than $4000";
        return;
    }
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] < 1000) {
            poorAccountSum++;
        }
        if (accounts[i] > 4000) {
            accounts[i] -= 400;
            richMoneySum += 400;
        }
    }
    var distrib = richMoneySum / poorAccountSum;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] < 1000) {
            accounts[i] += distrib;
        }
    }
    outputEl.innerHTML = poorAccountSum + " account(s) recieved $" + (richMoneySum / poorAccountSum).toFixed(2);
}
export {};
