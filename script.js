var top = document.querySelector(".top");
var bottom = document.querySelector(".bottom");

let idx;
top.addEventListener("mouseenter", function (e) {
  console.log("mouseenter");
  // idx = setInterval(() => window.scrollBy(0, -1), 1);
});
top.addEventListener("mouseleave", function (e) {
  clearInterval(idx);
});
bottom.addEventListener("mouseenter", function (e) {
  console.log("mouseenter");
  idx = setInterval(() => window.scrollBy(0, 1), 1);
});
bottom.addEventListener("mouseleave", function (e) {
  clearInterval(idx);
});
