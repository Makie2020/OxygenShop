// Responsive NavBar

function buttonClick() {
  let navbar = document.getElementById('nav-bar');
  let responsive_class_name = 'responsive'
  navbar.classList.toggle(responsive_class_name)
}

//  Scroll Percentage Bar 

const updateScrollPercentage = function() { 
  const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight,
    percentage = document.querySelector("[data-scrollPercentage] .percentage")
    percentageVal = document.querySelector("#percentage-value")

  if(bodyHeight - contentScrolled <= heightOfWindow) {
    percentage.style.width = "100%"
  }
  else {
    const total = bodyHeight - heightOfWindow,
      got = contentScrolled,
      percent = parseInt((got/total) * 100)
    percentage.style.width = percent + "%"
  }
}

window.addEventListener('scroll', updateScrollPercentage)

// Button to the Top
const backToTopButton = document.querySelector(".btn__top")

backToTopButton.addEventListener('click', function () {
  setTimeout(function() {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  }, 200)
});