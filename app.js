const switcher = document.querySelector(".switcher");
const switcherBall = document.querySelector(".switcher-ball");
const container = document.querySelector(".container");

var position = "start";
switcherBall.addEventListener("click", function () {
  position = position === "start" ? "end" : "start";

  switcher.style.justifyContent = position;
  if (position === "start") {
    switcher.style.background = "#E0E0E0";
    switcherBall.classList.remove("switcher-ball-blue");
    switcherBall.classList.add("switcher-ball-red");
    container.style.background = "#FAFAFA";
  } else {
    switcher.style.background = "#424242";
    switcherBall.classList.remove("switcher-ball-red");
    switcherBall.classList.add("switcher-ball-blue");
    container.style.background = "#212121";
  }
});
