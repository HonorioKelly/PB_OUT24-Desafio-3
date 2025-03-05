
/*variavel para acompanhar o slide*/ 
let currentSlide = 0;

function updateSlider() {
  const slider = document.querySelector('.testimonial-slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
/*Avança para o proximo slide*/ 
function nextSlide() {
  const totalSlides = document.querySelectorAll('.testimonial').length;
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlider();
  }
}
/*Retorna para o slide*/
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}
