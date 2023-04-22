// Selector main
const formRegister = document.querySelector("#register");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");

const form = [username, email, password, rePassword];

let isEmpty = false;

// Show error input
const showError = (input, messenger) => {
  const parent = input.parentElement;
  const registerMes = parent.querySelector(".register__messenger");

  parent.classList.add("error");
  registerMes.innerText = messenger;
};

// Show success input
const showSuccess = (input) => {
  const parent = input.parentElement;
  const registerMes = parent.querySelector(".register__messenger");

  parent.classList.remove("error");
  registerMes.innerText = "";
};

//Check all empty
const checkEmpty = (form) => {
  form.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmpty = true;
      showError(input, `${input.id} is invaild`);
    } else {
      showSuccess(input);
    }
  });
  return isEmpty;
};

const checkEmail = (input, isEmpty) => {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  input.value = input.value.trim();

  let isEmail = !regexEmail.test(input.value);
  if (isEmail) {
    showError(input, "email is invaild");
  } else {
    showSuccess(input);
  }
  return isEmail;
};

const checkLength = (input, min) => {
  if (input.value.length <= min) {
    showError(input, `need more than ${min} characters`);
    return true;
  }
  showSuccess(input);
  return false;
};

const checkRePassword = (password, rePassword) => {
  if (password.value == rePassword.value) {
    console.log(true);
  } else {
    console.log(false);
  }
};

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();

  checkEmpty(form);
  checkEmail(email);
  checkLength(username, 3);
  checkLength(password, 3);
  checkRePassword(password, rePassword);
});
