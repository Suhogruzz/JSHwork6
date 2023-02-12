let currentSlide = 0;
let moveTo = 0;
const slides = document.querySelectorAll('.slider__item');
const nextArrow = document.querySelector('.slider__arrow_next');
const prevArrow = document.querySelector('.slider__arrow_prev');
const dots = document.querySelectorAll('.slider__dot');


function changeSlide () {
    nextArrow.onclick = () => {
        moveTo++;
        if (moveTo >= slides.length) {moveTo = 0}
        slides[currentSlide].classList.toggle('slider__item_active');
        slides[moveTo].classList.toggle('slider__item_active');
        currentSlide = moveTo;
    }
    prevArrow.onclick = () => {
        moveTo--;
        if (moveTo < 0) {moveTo = slides.length - 1;}
        slides[currentSlide].classList.toggle('slider__item_active');
        slides[moveTo].classList.toggle('slider__item_active');
        currentSlide = moveTo;
    }
    [...dots].forEach((dot, dotIndex) => {
        dot.onclick = () => {
            if (currentSlide !== dotIndex) {
                console.log(dotIndex)
                slides[currentSlide].classList.toggle('slider__item_active')
                slides[dotIndex].classList.toggle('slider__item_active');
                currentSlide = dotIndex;
                moveTo = dotIndex;
            }
        }
    })
}

changeSlide();