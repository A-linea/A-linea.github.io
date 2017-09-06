var btn = document.querySelector(".main-nav__toggle");
var wrapper = document.querySelector(".main-nav__wrapper");
var menu = document.querySelector(".main-nav__list");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    btn.classList.toggle("main-nav__toggle--opened");
    wrapper.classList.toggle("main-nav__wrapper--opened");
    menu.classList.toggle("main-nav__list--opened");
});
