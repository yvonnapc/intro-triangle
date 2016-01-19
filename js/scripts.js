var triangle = function(a,b,c) {

    if ((a === 0) || (b === 0) || (c === 0)) {
      return false;
    }
    else if ((a < 0) || (b < 0) || (c < 0))  {
      return false;
    }
    else if ((a === b) && (b === c) && (a === c)) {
      $(".type").text("equilateral");
      return "equilateral";
    }
    else if (((a === b) && (a + b) > c) || ((a === c) && (a + c) > b) || ((b === c) && (b + c) > a)) {
      $(".type").text("isosceles");
      return "isosceles";
    }
    else if ((a !== b) && (b !== c) && (c !== a)) {
      $(".type").text("scalene");
      return "scalene";
    }

   else {
    return false;
  }
};
//
$(document).ready(function() {
  $("form#triangleInput").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var result = triangle(a,b,c);

    if (!result) {              // same as writing if (result === false)
      $(".not").text("not");
      $(".type").text("");
    }
    else {
      $(".not").text("");
    }

    if (isNaN(a,b,c)) {
      alert("Please Enter a Number");
    }

    $("#result").show();
    event.preventDefault();
  });
    });
