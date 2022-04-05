let photoIndex = 1;
gallerySlides(photoIndex);

function gallerySlides(n) {
  showSlides(photoIndex += n);
}

function currentSlide(n) {
  showSlides(photoIndex = n);
}

function showSlides(n) {
  let i;
  let photo = document.getElementsByClassName("gallerySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > photo.length) {photoIndex = 1}    
  if (n < 1) {photoIndex = photo.length}
  for (i = 0; i < photo.length; i++) {
    photo[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  photo[photoIndex-1].style.display = "block";  
  dots[photoIndex-1].className += " active";
}