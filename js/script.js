link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  login.focus();
});

form.addEventListener("submit", function(event) {
  if (!login.value  || !password.value) {
    event.preventDefault();
    console.log("Нужно ввести логин и пароль");
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-map-show");
  overlay.classList.add("modal-overlay-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
});