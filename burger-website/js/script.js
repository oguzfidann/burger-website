let burgers = document.querySelectorAll(".burgers");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

i = 0;

function ActiveBurger(n) {
  for (burger of burgers) burger.classList.remove("active");
  burgers[n].classList.add("active");
}

next.addEventListener("click", function () {
  if (i == burgers.length - 1) {
    i = 0;
    ActiveBurger(i);
  } else {
    i++;
    ActiveBurger(i);
  }
});

prev.addEventListener("click", function () {
  if (i == 0) {
    i = burgers.length - 1;
    ActiveBurger(i);
  } else {
    i--;
    ActiveBurger(i);
  }
});
