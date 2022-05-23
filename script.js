let inputValidation = document.getElementById("email");
let emailError = document.querySelector(".email-error");
let submit = document.getElementById("submit");

function validateEmail() {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputValidation.value.match(mailformat)) {
    inputValidation.style.borderColor = "green";
    emailError.innerHTML = "Valid email address";
    emailError.classList.add("email-sucess");
    setTimeout(() => {
      inputValidation.style.borderColor = "hsl(223, 100%, 88%)";
      emailError.classList.remove("email-sucess");
      emailError.innerHTML = "";
      return true;
    }, "2000");
  } else {
    inputValidation.style.borderColor = "hsl(354, 100%, 66%)";
    emailError.innerHTML = "Please enter a Valid email address";
    setTimeout(() => {
      inputValidation.style.borderColor = "hsl(223, 100%, 88%)";
      emailError.innerHTML = "";
      return false;
    }, "4000");
  }
}

submit.addEventListener("click", function () {
  validateEmail();
});
