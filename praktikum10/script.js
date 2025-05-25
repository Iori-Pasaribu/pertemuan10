document.querySelector(".signup-btn").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});
document.querySelector(".login-btn").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});
const taglineElement = document.querySelector(".text.kedua-text");
const film = ["Horror", "Action", "Romance", "Comedy"];
let currentIndex = 0;
function changeTagline() {
  taglineElement.textContent = film[currentIndex];
  currentIndex = (currentIndex + 1) % film.length;
}
setInterval(changeTagline, 4000);
changeTagline();
