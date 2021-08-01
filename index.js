
var dateInside = document.getElementById("date");

let date =  new Date().getFullYear();
// console.log(date);
// here you go mate
dateInside.innerHTML = date;
dateInside.style.color="red"

var button = document.querySelector(".nav");
var barIcon = document.querySelector(".fa-bars");
var navBars = document.querySelector(".bars")
var links = document.querySelector(".allLinks")

barIcon.addEventListener("click", function(){
  // alert("hhh")
  // navBars.classList.add("show-links");
  // navBars.classList.toggle("show-links");

  //  FreeCodeCamp way
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = navBars.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navBars.style.height = `${linksHeight}px`;
  } else {
    navBars.style.height = 0;
  }
})


const navBarPart = document.querySelector(".upper");
const topLink= document.querySelector(".top-link");
// measuring the windo movment(scrolling) LOVE
window.addEventListener("scroll", function(){
  console.log(window.pageYOffset); // lovely> it gives all the Y pixcels
  const movedScrollHeight = window.pageYOffset;
  const heightOfTheNavbar = navBarPart.getBoundingClientRect().height;
  if(movedScrollHeight > heightOfTheNavbar){
    navBarPart.classList.add("fixed-nav");

  } else{
    navBarPart.classList.remove("fixed-nav");
  }

  if(movedScrollHeight > 500){
    topLink.classList.add("show-link");
  }else
  {topLink.classList.remove("show-link");
  }
});


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default ,ovment built by html
    e.preventDefault();
    // navigate to specific spot, here we are looking for attribute of href, but it has a hashtag, so to cut the hashtag we have used slice
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navBarPart.getBoundingClientRect().height;
    const containerHeight = navBars.getBoundingClientRect().height;
    const fixedNav = navBarPart.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    navBars.style.height = 0;
  });
});
