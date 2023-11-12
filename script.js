function emailIsValid(email) {
  const validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return validEmail.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  const hiderButton = document.querySelector("button[type=submit]");
  const successDiv = document.querySelector(".success-div");
  const mainContent = document.querySelector(".content");
  const emailInput = document.querySelector(".content-email input");
  const invalidInput = document.querySelector(".span2");
  const dismissbutton = document.getElementById("hide");

  hiderButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (emailIsValid(emailInput.value)) {
      successDiv.style.display = "block";
      mainContent.style.display = "none";
    } else {
      emailInput.classList.add("error");
      invalidInput.style.display = "block";
    }
  });

  dismissbutton.addEventListener("click", () => {
    successDiv.style.display = "none";
    mainContent.style.display = "block";
    emailInput.value = "";
  });
});
