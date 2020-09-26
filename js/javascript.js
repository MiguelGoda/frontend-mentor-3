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

// const button = document.querySelector(".shorten-it");
// const copy = document.querySelector(".copy");
// let orignal = document.querySelector(".long-link");
// let short = document.querySelector(".short-link");

// button.addEventListener("click", getLink);
// copy.addEventListener("click", copyClipboard);
// window.addEventListener("load", checkStorage);

// function getLink() {
//     let link = document.querySelector(".shorten").value;
//     let input = document.querySelector(".shorten");

//     if (link !== "") {
//         input.classList.remove("empty");
//         document.querySelector(".empty-text").style.visibility = "hidden";

//         fetch('https://rel.ink/api/links/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "url": link
//             })
//         }).then(res => {
//             return res.json()
//         })
//             .then(data => localStorage.sLink = short.innerHTML = "https://rel.ink/" + data.hashid)
//             .catch(err => console.log(err))

//         localStorage.setItem("oLink", trimLink(link, 40))
//         orignal.innerHTML = trimLink(link, 40);

//         document.querySelector(".shorten").value = null;
//         document.querySelector(".link-container").style.visibility = "visible";

//     } else {
//         input.classList.add("empty");
//         document.querySelector(".empty-text").style.visibility = "visible";
//     }

//     function trimLink(link, length) {
//         return link.length > length ?
//             link.substring(0, length) + '...' :
//             link;
//     };

// }

// function checkStorage() {

//     if (localStorage.length == 3) {
//         short.innerHTML = localStorage.sLink;
//         orignal.innerHTML = localStorage.oLink
//         document.querySelector(".link-container").style.visibility = "visible";
//     }
// }

// function copyClipboard() {
//     let c = localStorage.sLink;
//     navigator.clipboard.writeText(c)
// }
