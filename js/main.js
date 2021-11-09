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

const specials = document.getElementById("specials");    
specials.addEventListener("click", abraCadabra);



  function abraCadabra () {
  /*  menu.classList.toggle("visible"); */
 /* console.log("This works!"); */

  
  
  if (specials.classList.contains("visible")) {
      specials.classList.remove("visible");
      specials.classList.add("hidden");
  }

  
  else {
      specials.classList.add("visible");
  }
 

}