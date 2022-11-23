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
    percentageVal.textContent = percentage.style.width = "100%"
  }
  else {
    const total = bodyHeight - heightOfWindow,
      got = contentScrolled,
      percent = parseInt((got/total) * 100)
    percentageVal.textContent = percentage.style.width = percent + "%"
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

// change currency

function selected () {
  let selectedCurrency = document.getElementById("currency").value;
 
  switch (selectedCurrency) {
    case "1":
      answer = number * 0.625 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "miles";
      inputLength.innerHTML = "km";
      break;
    case "2":
      answer = number * 1.609344 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "km"
      inputLength.innerHTML = "miles";
      break;
    case "3":
      answer = number * 0.3048 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "meter"
      inputLength.innerHTML = "foot";
      break;
  }
}