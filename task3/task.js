const slides = document.querySelectorAll('.slider__item');
const nextArrow = document.querySelector('.slider__arrow_next');
const prevArrow = document.querySelector('.slider__arrow_prev');
const dots = document.querySelectorAll('.slider__dot');
const getIndex = (slide) => slide.classList.contains('slider__item_active')


nextArrow.addEventListener('click', () => {
    changeSlide([...slides].findIndex(getIndex) + 1)
}); 
prevArrow.addEventListener('click', () => {
    changeSlide([...slides].findIndex(getIndex) - 1)
});
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {changeSlide(dotIndex)})
});

function addActiveDot() {
    let getDotIndex = [...slides].findIndex(getIndex);
    dots[getDotIndex].classList.add('slider__dot_active')
}

function changeSlide(nextSlide) {
    let removeActive =  [...slides].findIndex(getIndex);

    slides[removeActive].classList.toggle('slider__item_active');
    dots[removeActive].classList.remove('slider__dot_active');

    if (nextSlide >= slides.length) {
        nextSlide = 0;
    }
    if (nextSlide < 0) {
        nextSlide = slides.length - 1;
    }
    
    slides[nextSlide].classList.toggle('slider__item_active');
    addActiveDot();
}

addActiveDot();
