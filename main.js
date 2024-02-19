

function themeChange() {
  let lightEl = document.querySelector("#light");
  let bodyEl = document.querySelector("body");
  let boxEl = document.querySelectorAll(".them-change");

  lightEl.addEventListener("change", function () {
    bodyEl.classList.toggle("bodyColorChange");

    for (i = 0; i < boxEl.length; i++) {
      boxEl[i].classList.toggle("boxColorChange");
    }
  });
}
themeChange();


