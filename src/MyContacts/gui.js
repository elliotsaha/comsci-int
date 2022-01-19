// Option Tabs - display proper options on click
document.getElementById("search-tab").addEventListener("click", searchTabClicked);
document.getElementById("all-tab").addEventListener("click", allTabClicked);
document.getElementById("new-tab").addEventListener("click", newTabClicked);
document.getElementById("delete-tab").addEventListener("click", deleteTabClicked);

// Event Functions
function searchTabClicked() {
  hideAllOptions();
  document.getElementById("search-option").style.display = "block";
}

function allTabClicked() {
  hideAllOptions();
}

function newTabClicked() {
  hideAllOptions();
  document.getElementById("new-option").style.display = "block";
}

function deleteTabClicked() {
  hideAllOptions();
  document.getElementById("delete-option").style.display = "block";
}

function hideAllOptions() {
  document.getElementById("search-option").style.display = "none";
  document.getElementById("new-option").style.display = "none";
  document.getElementById("delete-option").style.display = "none";
}