"use strict";
document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  let form = document.querySelector("form"); // Select the form

  let firstName = document.querySelector(".firstName").value.trim();
  let lastName = document.querySelector(".lastName").value.trim();
  let email = document.querySelector(".email").value.trim();
  let password = document.querySelector(".password").value.trim();

  let firstMessage = document.querySelector(".firstMessage");
  let secondMessage = document.querySelector(".secondMessage");
  let emailMessage = document.querySelector(".emailMessage");
  let passMessage = document.querySelector(".passMessage");

  let firstInput = document.querySelector(".firstName");
  let lastInput = document.querySelector(".lastName");
  let emailInput = document.querySelector(".email");
  let passInput = document.querySelector(".password");

  let isvalid = true;

  if (!firstName) {
    firstMessage.classList.remove("hidden");
    firstMessage.innerHTML = "First Name cannot be empty";
    firstInput.style.border = "2px solid #ff7a7a";
    firstInput.classList.add("invalid");
    firstInput.placeholder = "";
    isvalid = false;
  } else {
    firstMessage.classList.add("hidden");
    firstInput.style.borderColor = " #38cc8c";
    firstInput.classList.remove("invalid");
    firstInput.style.backgroundImage = "";
  }

  if (!lastName) {
    secondMessage.classList.remove("hidden");
    secondMessage.innerHTML = "Last Name cannot be empty";
    lastInput.style.border = "2px solid #ff7a7a";
    lastInput.classList.add("invalid");
    lastInput.placeholder = "";
    isvalid = false;
  } else {
    lastInput.style.border = "2px solid #38cc8c";
    secondMessage.classList.add("hidden");
    lastInput.classList.remove("invalid");
  }

  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    emailMessage.innerHTML = "Email cannot be empty";
  }
  !email
    ? ((emailMessage.innerHTML = "Email cannot be empty"),
      (emailInput.style.border = "2px solid #ff7a7a"),
      emailMessage.classList.remove("hidden"),
      (emailInput.placeholder = ""),
      (isvalid = false),
      emailInput.classList.add("invalid"))
    : !pattern.test(email)
    ? ((emailMessage.innerHTML = "Invalid Email Format"),
      (emailInput.style.border = "2px solid #ff7a7a"))
    : ((emailMessage.innerHTML = ""),
      (emailInput.style.border = "2px solid #28a745"),
      emailInput.classList.remove("invalid"));

  if (!password) {
    passMessage.classList.remove("hidden");
    passMessage.innerHTML = "Password Input cannot be empty";
    passInput.style.border = "2px solid #ff7a7a";
    passInput.placeholder = "";
    passInput.classList.add("invalid");
    isvalid = false;
  } else {
    passInput.style.border = "2px solid #38cc8c";
    passMessage.classList.add("hidden");
    passInput.classList.remove("invalid");
  }
  if (isvalid) {
    form.submit;
  }
});
