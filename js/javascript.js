let $burguerButton = document.getElementById("burguer-button");
let $menu = document.getElementById("menu");
function toggleMenu() {
  $menu.classList.toggle("active");
}
function showMenu() {
  $menu.classList.add("active");
}
function hideMenu() {
  $menu.classList.remove("active");
}
let consulta = window.matchMedia("(max-width: 375px)");
console.log("mobile")
consulta.addListener(mediaQuery);
function mediaQuery() {
  if (consulta.matches) {
    //si se cumple hagamos esto
    console.log("se cumplio la condicion");
    $burguerButton.addEventListener("touchstart", toggleMenu);
  } else {
    // si no se cumple hagamos esto
    console.log("no se cumplio la condicion");
    $burguerButton.removeEventListener("touchstart", toggleMenu);
  }
}
