//check for a valid email

//input value refrence

//on btn click {

//check it meets email requirement }

//if true UI reflects it (toggle style class  ::after)

//else false UI reflects it
//===========================================================

// refrence variables
const emailInput = document.getElementById("emailInput");
const emailAlert = document.getElementById("emailAlert");
const checkEmailBtn = document.getElementById("checkBtn");
const errorMark = document.getElementById("errorMark");
const inputBox = document.getElementById("inputBox");

const emailFormat =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

checkEmailBtn.addEventListener("click", function () {
  console.log("firing");
  if (emailInput.value.match(emailFormat)) {
    console.log(emailInput.value);
    emailAlert.classList.remove("show");
    inputBox.style.border = "2px solid green";
    // inputBox.style.borderColor = "";
    errorMark.style.visibility = "hidden";
  } else {
    emailAlert.classList.add("show");
    inputBox.style.border = "2px solid var(--primary-soft-red)";
    errorMark.style.visibility = "visible";
  }

  //   check its empty or filled with no values just spacing
  // meets email criteria
});
