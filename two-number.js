// Addition Function
document.getElementById("addition-button").addEventListener("click", function writeSum() {
  var addendOne = parseInt(document.getElementById("addendOne").value); 
  var addendTwo = parseInt(document.getElementById("addendTwo").value);  
  document.getElementById("sum").innerHTML = addendOne + addendTwo;
  document.getElementById("sum").style.fontWeight = 700;
  if(isNaN(parseInt(document.getElementById("addendOne").value))) {
    document.getElementById("sum").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
  if(isNaN(parseInt(document.getElementById("addendTwo").value))) {
    document.getElementById("sum").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
});

// Subtraction Function
document.getElementById("subtraction-button").addEventListener("click", function writeDifference() {
  var minuend = parseInt(document.getElementById("minuend").value); 
  var subtrahend = parseInt(document.getElementById("subtrahend").value);  
  document.getElementById("difference").innerHTML = minuend - subtrahend;
  document.getElementById("difference").style.fontWeight = 700;
  if(isNaN(parseInt(document.getElementById("minuend").value))) {
    document.getElementById("difference").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
  if(isNaN(parseInt(document.getElementById("subtrahend").value))) {
    document.getElementById("difference").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
});

// Multiplication Function
document.getElementById("multiplication-button").addEventListener("click", function writeProduct() {
  var multiplicand = parseInt(document.getElementById("multiplicand").value); 
  var multiplier = parseInt(document.getElementById("multiplier").value);  
  document.getElementById("product").innerHTML = multiplicand * multiplier;
  document.getElementById("product").style.fontWeight = 700;
  if(isNaN(parseInt(document.getElementById("multiplicand").value))) {
    document.getElementById("product").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
  if(isNaN(parseInt(document.getElementById("multiplier").value))) {
    document.getElementById("product").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
});

// Division Function
document.getElementById("division-button").addEventListener("click", function writeQuotient() {
  var dividend = parseInt(document.getElementById("dividend").value); 
  var divisor = parseInt(document.getElementById("divisor").value);  
  document.getElementById("quotient").innerHTML = dividend / divisor;
  document.getElementById("quotient").style.fontWeight = 700;
  if(isNaN(parseInt(document.getElementById("dividend").value))) {
    document.getElementById("quotient").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
  if(isNaN(parseInt(document.getElementById("divisor").value))) {
    document.getElementById("quotient").innerHTML = "<strong>Please put numbers in the blanks.</strong>";
  }
});

// Dark Mode Function
document.addEventListener("DOMContentLoaded", function changeMode() {
  var checkbox = document.getElementById("checkbox");
  var original = document.getElementById("body");
  checkbox.addEventListener("change", function switchOn() {
    if (checkbox.checked == true){
      original.style.backgroundColor = "#24292E";
      original.style.color = "white";
      document.getElementById("addition-button").className = "dark-buttons";
      document.getElementById("subtraction-button").className = "dark-buttons";
      document.getElementById("multiplication-button").className = "dark-buttons";
      document.getElementById("division-button").className = "dark-buttons";
      document.getElementById("github").src = "https://i.imgur.com/Fe7Eybo.png";
    }
    if (checkbox.checked == false){
      original.style.backgroundColor = "#C4EDFF";
      original.style.color = "black";
      document.getElementById("addition-button").className = "light-buttons";
      document.getElementById("subtraction-button").className = "light-buttons";
      document.getElementById("multiplication-button").className = "light-buttons";
      document.getElementById("division-button").className = "light-buttons";
      document.getElementById("github").src = "https://i.imgur.com/hGhvyXU.png";
    }
  });
});
