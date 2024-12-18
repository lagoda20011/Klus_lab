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
  console.log("database hidden");
}
