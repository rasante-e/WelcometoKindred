const burger = document.getElementById("burger-icon");
const menu = document.getElementById("nav-bar");

burger.addEventListener("click", openSesame);

function openSesame () {
  /*  menu.classList.toggle("visible"); */
  /*console.log("This works!"); */

  if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("visible");
  }

  else {
      menu.classList.add("hidden");
  }
    }
