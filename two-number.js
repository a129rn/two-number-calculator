function writeSum() {
  var addendOne = parseInt(document.getElementById("addendOne").value); 
  var addendTwo = parseInt(document.getElementById("addendTwo").value);  
  document.getElementById("sum").innerHTML = addendOne + addendTwo;
  if(isNaN(parseInt(document.getElementById("addendOne").value))) {
    document.getElementById("sum").innerHTML = "Please put numbers in the blanks."
  }
  if(isNaN(parseInt(document.getElementById("addendTwo").value))) {
    document.getElementById("sum").innerHTML = "Please put numbers in the blanks."
  }
}
  
function writeDifference() {
  var minuend = parseInt(document.getElementById("minuend").value); 
  var subtrahend = parseInt(document.getElementById("subtrahend").value);  
  document.getElementById("difference").innerHTML = minuend - subtrahend;
  if(isNaN(parseInt(document.getElementById("minuend").value))) {
    document.getElementById("difference").innerHTML = "Please put numbers in the blanks."
  }
  if(isNaN(parseInt(document.getElementById("subtrahend").value))) {
    document.getElementById("difference").innerHTML = "Please put numbers in the blanks."
  }
}
  
function writeProduct() {
  var multiplicand = parseInt(document.getElementById("multiplicand").value); 
  var multiplier = parseInt(document.getElementById("multiplier").value);  
  document.getElementById("product").innerHTML = multiplicand * multiplier;
  if(isNaN(parseInt(document.getElementById("multiplicand").value))) {
    document.getElementById("product").innerHTML = "Please put numbers in the blanks."
  }
  if(isNaN(parseInt(document.getElementById("multiplier").value))) {
    document.getElementById("product").innerHTML = "Please put numbers in the blanks."
  }
}
  
function writeQuotient() {
  var dividend = parseInt(document.getElementById("dividend").value); 
  var divisor = parseInt(document.getElementById("divisor").value);  
  document.getElementById("quotient").innerHTML = dividend / divisor;
  if(isNaN(parseInt(document.getElementById("dividend").value))) {
    document.getElementById("quotient").innerHTML = "Please put numbers in the blanks."
  }
  if(isNaN(parseInt(document.getElementById("divisor").value))) {
    document.getElementById("quotient").innerHTML = "Please put numbers in the blanks."
  }
}
