var overlay = document.querySelector(".overlay");
var bottom = document.querySelector(".bottom");

overlay.addEventListener("mousemove", function (e) {
  //   console.log(e.pageX, e.pageY);
  if (e.target.className === "top") {
    window.scrollTo(0, 0);
  }
//   if (e.target.className === "bottom") {
//     scrollDown();
//   }
});
bottom.addEventListener("mouseenter", function (e) {
    window.scrollTo(0, window.innerHeight);
    // const interval = setInterval(scrollDown, .1);
    // bottom.addEventListener("mouseleave", function (e) {
    //     clearInterval(interval);
    // })
});
// var scroller = 0;
// function scrollDown() {
//   scroller += 1;
//   window.scrollTo(0, scroller);
// }
