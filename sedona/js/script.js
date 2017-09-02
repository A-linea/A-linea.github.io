var link = document.querySelector(".find-hotel");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("search-form-show");
});
