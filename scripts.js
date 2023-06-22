// SLIDER

let slides = document.getElementsByClassName("slide-container")
let currentSlide = 0;

function slideShow(){
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    currentSlide++

    if (currentSlide >= slides.length){
        currentSlide = 0;
    }
    slides[currentSlide].style.display = 'Block'
}
setInterval(slideShow, 2000);




// function untuk map//

function show1() {
    document.getElementById("mapouter-1").style.display = "flex";
    document.getElementById("mapouter-2").style.display = "none";
    document.getElementById("mapouter-3").style.display = "none";
    document.getElementById("mapouter-4").style.display = "none";
    document.getElementById("mapouter-5").style.display = "none";
    document.getElementById("mapouter-6").style.display = "none";
  }

  function show2() {
    document.getElementById("mapouter-1").style.display = "none";
    document.getElementById("mapouter-2").style.display = "flex";
    document.getElementById("mapouter-3").style.display = "none";
    document.getElementById("mapouter-4").style.display = "none";
    document.getElementById("mapouter-5").style.display = "none";
    document.getElementById("mapouter-6").style.display = "none";
  }
  function show3() {
    document.getElementById("mapouter-1").style.display = "none";
    document.getElementById("mapouter-2").style.display = "none";
    document.getElementById("mapouter-3").style.display = "flex";
    document.getElementById("mapouter-4").style.display = "none";
    document.getElementById("mapouter-5").style.display = "none";
    document.getElementById("mapouter-6").style.display = "none";
  }
  function show4() {
    document.getElementById("mapouter-1").style.display = "none";
    document.getElementById("mapouter-2").style.display = "none";
    document.getElementById("mapouter-3").style.display = "none";
    document.getElementById("mapouter-4").style.display = "flex";
    document.getElementById("mapouter-5").style.display = "none";
    document.getElementById("mapouter-6").style.display = "none";
  }
  function show5() {
    document.getElementById("mapouter-1").style.display = "none";
    document.getElementById("mapouter-2").style.display = "none";
    document.getElementById("mapouter-3").style.display = "none";
    document.getElementById("mapouter-4").style.display = "none";
    document.getElementById("mapouter-5").style.display = "flex";
    document.getElementById("mapouter-6").style.display = "none";
  }
  function show6() {
    document.getElementById("mapouter-1").style.display = "none";
    document.getElementById("mapouter-2").style.display = "none";
    document.getElementById("mapouter-3").style.display = "none";
    document.getElementById("mapouter-4").style.display = "none";
    document.getElementById("mapouter-5").style.display = "none";
    document.getElementById("mapouter-6").style.display = "flex";
  }