
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    const key = this.getAttribute("data-key").toLowerCase();
    playSound(key);
    animateButton(key);
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  playSound(key);
  animateButton(key);
});

function playSound(key) {
  switch (key) {
    case "a":
      new Audio("sounds/crash.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom1.mp3").play();
      break;
    case "d":
      new Audio("sounds/snare.mp3").play();
      break;
    case "g":
      new Audio("sounds/kickbass.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom3.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom2.mp3").play();
      break;
    case "l":
      new Audio("sounds/crash.mp3").play();
      break;
    default:
      console.log("Tecla não mapeada: " + key);
  }
}

function animateButton(key) {
  const button = document.querySelector(`.drum[data-key="${key}"]`);
  if (button) {
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  }
}
