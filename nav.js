const navslide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
    
    
    burger.addEventListener("click" , () => {

        // toggle animation
        nav.classList.toggle("nav-active")

        // animate links
        navLinks.forEach((link , index) =>{
            if(link.style.animation) {
                link.style.animation = ""
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + .4}s`
            }
        })

        // burger animation
        burger.classList.toggle("toggle")
    })
}


navslide()

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("navbar-secondary").style.height = "50px";
    document.getElementById("navbar-secondary").style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.3)";
    document.getElementById("navbar-secondary").style.background = "white";
    document.getElementById("navbar-secondary").style.padding = "25px 0px 10px 0px";
    document.querySelector(".navbar-title").style.lineHeight = "20px"
    document.querySelector(".navbar-title").style.fontSize = "25px"
    document.getElementById("home-link").style.color = "black"
    document.getElementById("service-link").style.color = "black"
    document.getElementById("about-link").style.color = "black"
    document.getElementById("contact-link").style.color = "black"
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar-secondary").style.height = "120px";
    document.getElementById("navbar-secondary").style.boxShadow = "none";
    document.getElementById("navbar-title").style.fontSize = "28px"
    document.querySelector(".navbar-title").style.lineHeight = "38px"
     document.getElementById("home-link").style.color = "white"
    document.getElementById("service-link").style.color = "white"
    document.getElementById("about-link").style.color = "white"
    document.getElementById("contact-link").style.color = "white"

    document.getElementById("navbar-secondary").style.background = "transparent";



    // document.getElementById("logo").style.fontSize = "35px";
  }
}
