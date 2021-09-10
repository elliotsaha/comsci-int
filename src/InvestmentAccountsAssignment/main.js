// Investment Accounts Assignment Start Code
// HTML Variables
var containerEl = document.getElementById("container");
var outputEl = document.getElementById("output");
var goBtnEl = document.getElementById("go");
var menuEl = document.getElementById("menu");
// Global Variable
var accounts = [];
var maxAmount = 5000; // account values should be b/t 0 and max
// Add Accounts
addAcounts();
// Display Data
drawArray();
function addAcounts() {
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
    var sum = 0;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] >= 2000 && accounts[i] <= 4000) {
            sum++;
        }
    }
    outputEl.innerHTML = "The number of accounts between $2,000 & $4,000 is " + sum;
}
function generousDonor() {
    // A generous donor has decided to give $500 to every investment
    // account that has less than $2000.
    // Modify the investment account array to apply this donation.
    // Output the total amount of money that was donated.
    var sum = 0;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] < 2000) {
            accounts[i] += 500;
            sum += 500;
        }
    }
    outputEl.innerHTML = "the total amount donated is $" + sum
        .toFixed(2)
        .toLocaleString();
}
function hackerAttack() {
    // A hacker steals 5% from every account.
    // Modify the investment account array to apply this theft.
    // Output the total amount that was stolen.
    var sum = 0;
    for (var i = 0; i < accounts.length; i++) {
        accounts[i] *= 0.95;
        sum += accounts[i] * 0.05;
    }
    outputEl.innerHTML = "the total amount stolen by the hacker is $" + sum
        .toFixed(2)
        .toLocaleString();
}
function investmentStats() {
    // Output the minimum account amount, the maximum account amount
    // and the average account amount.
    var max = Math.max.apply(Math, accounts);
    var min = Math.min.apply(Math, accounts);
    var sum = accounts.reduce(function (arr, i) { return arr + i; }, 0);
    var avg = sum / accounts.length;
    outputEl.innerHTML = "min account amount: $" + min
        .toFixed(2)
        .toLocaleString() + ", max account amount: $" + max
        .toFixed(2)
        .toLocaleString() + ", avg account amount: $" + avg
        .toFixed(2)
        .toLocaleString();
}
function addAccount() {
    // Prompt for a new account amount and add this to the invesment account
    // array. Output a confirmation that a new account was added with an
    // opening amount of _______.
    // TODO: LAST
    outputEl.innerHTML = "Add Account";
}
function removeLow() {
    // Remove all accounts that are below $500.
    // Output how many accounts were removed.
    var removeSum = 0;
    for (var i = 0; i < accounts.length; i++) {
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
    var richSum = 0;
    // account count for accounts that have under $1000
    var poorAccSum = 0;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] > 4000) {
            accounts[i] -= 400;
            richSum += 400;
        }
        if (accounts[i] < 1000) {
            poorAccSum++;
        }
    }
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i] < 1000) {
            accounts[i] += richSum / poorAccSum;
        }
    }
    outputEl.innerHTML = poorAccSum + " accounts recieved $" + (richSum / poorAccSum)
        .toFixed(2)
        .toLocaleString() + " each";
}
export {};
