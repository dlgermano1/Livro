function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.overflowY = "auto";
    }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("mySidebar").style.overflowY = "hidden";
  }
  
  //function branco()
  //{
  //  document.getElementById("prin").style.background = "#ffffff"
  //}
  var dropdown = document.getElementsByClassName("dropdownsummary");
  var i
  
  for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
  }
  
  
  
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("meuSlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }