  /* For form validation */


  
  

  function validateForm () {
    const years = document.getElementById("years-response").value;

if (isNaN(years) || (years == "")) {
 /* alert("Please enter a valid number"); */
 document.getElementById("congrats").innerHTML="Please enter a valid number";
}
else {
  document.getElementById("congrats").innerHTML="Thank you for being a part of our community for " + years +
  " years! We will reach out regarding your initiation into our coven soon.";
}
/*   
if (years != 10) {
  alert("Hooray!");
}

else {
  alert("Correct!");
}
*/

/* alert(email); */
  /*
    const email = document.getElementById("years-response").value;
    console.log(email);
    */
  }


  /* 1. Store Form entry as a variable */

