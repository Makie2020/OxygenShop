// Responsive NavBar

function buttonClick() {
  let navbar = document.getElementById('nav-bar');
  let responsive_class_name = 'responsive'
  navbar.classList.toggle(responsive_class_name)
}


// Button to the Top
const backToTopButton = document.querySelector(".btn__top")

backToTopButton.addEventListener('click', function () {
  setTimeout(function() {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  }, 200)
});
