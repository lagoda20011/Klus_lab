// Function to hide and show elements based on the given element IDs
function hideElement(firstElement, secondElement) {
  var elementToHide = document.getElementById(firstElement);
  var elementToShow = document.getElementById(secondElement);
  elementToHide.style.display = "none";
  elementToShow.style.display = "flex";
}

function hideElements(firstElement, secondElement, thirdElement) {
  var firstElementToHide = document.getElementById(firstElement);
  var secondElementToHide = document.getElementById(secondElement);
  var elementToShow = document.getElementById(thirdElement);

  firstElementToHide.style.display = "none";
  secondElementToHide.style.display = "none";
  elementToShow.style.display = "flex";
}

function showElements(firstElement, secondElement, thirdElement) {
  var elementToHide = document.getElementById(firstElement);
  var firstElementToShow = document.getElementById(secondElement);
  var secondElementToShow = document.getElementById(thirdElement);

  elementToHide.style.display = "none";
  firstElementToShow.style.display = "flex";
  secondElementToShow.style.display = "flex";
}

// Sample data for equipment and materials
// Function to load both JSON files and process the data
let inventarsData = [];
let vielasData = [];

function loadData() {
  // Load inventars.json (inventory)
  Promise.all([
    fetch("assets/json/inventars.json").then((response) => response.json()), // Load inventars data
    fetch("assets/json/vielas.json").then((response) => response.json()), // Load vielas data
  ])
    .then(([inventars, vielas]) => {
      // Store the data in global variables
      inventarsData = inventars;
      vielasData = vielas;

      // Process and populate the table with all data initially
      populateTable(inventarsData, vielasData);
    })
    .catch((error) => {
      console.error("Error loading the JSON files:", error);
    });
}

// Function to populate the table with filtered data
function populateTable(inventars, vielas) {
  // Get the table body element where you want to display the data
  const tableBody = document
    .getElementById("inventoryTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing table rows

  // Combine both inventars and vielas data
  const combinedData = [...inventars, ...vielas]; // Combine arrays

  combinedData.forEach((item) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.nosaukums}</td>
          <td>${item.apakstips}</td>
          <td>${item.tips}</td>
          <td>${item.skaits}</td>
          <td>${item.daudzums || ""}</td>
          <td>${item.komentari}</td>
      `;
  });
}

// Load data when the page is ready
window.onload = loadData;

// Function to display data based on category
function filterData(category) {
  const tableBody = document
    .getElementById("inventoryTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear the existing rows

  let filteredInventars = [];
  let filteredVielas = [];

  // Filter data based on category
  if (category === "svari") {
    filteredInventars = inventarsData.filter((item) => item.tips === "svari");
  } else if (category === "reaģents") {
    filteredVielas = vielasData.filter((item) => item.tips === "reaģents");
  } else if (category === "equipment") {
    filteredInventars = inventarsData;
  } else if (category === "material") {
    filteredVielas = vielasData;
  } else {
    filteredInventars = inventarsData; // Show all if 'all' category
    filteredVielas = vielasData;
  }

  // Populate the table with the filtered data
  populateTable(filteredInventars, filteredVielas);
}

document
  .getElementById("filterEquipment")
  .addEventListener("click", () => filterData("equipment"));
document
  .getElementById("filterMaterial")
  .addEventListener("click", () => filterData("material"));
document
  .getElementById("filterAll")
  .addEventListener("click", () => filterData("all"));
