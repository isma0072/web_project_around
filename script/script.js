const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__about");

const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;

const profileEditButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector(".popup");

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const aboutInput = document.querySelector(".popup__input_about");
const closeButtonPopup = document.querySelector(".popup__close-button");
const saveButton = document.querySelector(".popup__save-button");

let initialProfileName = "";
let initialProfileAbout = "";

function setPopupInput() {
  nameInput.value = "";
  aboutInput.value = "";
  validateInputs();
}

function validateInputs() {
  if (nameInput.value.trim() !== "" && aboutInput.value.trim() !== "") {
    saveButton.removeAttribute("disabled");
    saveButton.classList.remove('popup__save-button-disabled');

  } else {
    saveButton.setAttribute("disabled", true);
    saveButton.classList.add('popup__save-button-disabled');
  }
}

function openPopup() {
  editPopupElement.classList.add("popup_opened");
}

function handlePopupClick(event) {
  setPopupInput();
  openPopup();
}

function closePopup() {
  editPopupElement.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = aboutInput.value;
  initialProfileName = nameInput.value;
  initialProfileAbout = aboutInput.value;
  closePopup();
}

console.log(saveButton.disabled);
nameInput.addEventListener("input", validateInputs);
aboutInput.addEventListener("input", validateInputs);
profileEditButton.addEventListener("click", handlePopupClick);
closeButtonPopup.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);