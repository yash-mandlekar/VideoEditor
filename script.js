var overlay = document.querySelector(".overlay");
var top = document.querySelector(".top");
var bottom = document.querySelector(".bottom");

let idx;
overlay.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let xPercent = (x / width) * 100;
  let yPercent = (y / height) * 100;
  overlay.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #00000000, #000000ff)`;
});
// top.addEventListener("mouseenter", function (e) {
//   console.log("mouseenter");
//   idx = setInterval(() => window.scrollBy(0, -1), 1);
// });
// top.addEventListener("mouseleave", function (e) {
//   clearInterval(idx);
// });
// bottom.addEventListener("mouseenter", function (e) {
//   console.log("mouseenter");
//   idx = setInterval(() => window.scrollBy(0, 1), 1);
// });
// bottom.addEventListener("mouseleave", function (e) {
//   clearInterval(idx);
// });
