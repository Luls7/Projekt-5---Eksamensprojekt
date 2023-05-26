let slideIndex = 0;
let timerId = null;
carousel();

function carousel() {
  let i;
  let slideImages = document.getElementsByClassName("slideimages");
  for (i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slideImages.length) {
    slideIndex = 1;
  }
  slideImages[slideIndex - 1].style.display = "block";
  
  for (i = 0; i < slideImages.length; i++) {
    slideImages[i].onclick = function() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      } else {
        timerId = setTimeout(carousel, 1000);
      }
    }
  }
  
  timerId = setTimeout(carousel, 1000); 
}