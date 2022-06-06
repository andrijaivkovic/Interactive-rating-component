const thanksCard = document.querySelector(".thanks__card");
const ratingCard = document.querySelector(".rating__card");

const optionsContainer = document.querySelector(".options__container");
const userSelection = document.querySelector(".user__selection");
const submitButton = document.querySelector(".button__submit");

optionsContainer.addEventListener("click", function (e) {
  const option = e.target.closest(".option");

  if (!option) return;

  const optionValue = option.dataset.option;

  userSelection.textContent = optionValue;
});

submitButton.addEventListener("click", function () {
  thanksCard.classList.toggle("hidden");
  ratingCard.classList.toggle("hidden");
});
