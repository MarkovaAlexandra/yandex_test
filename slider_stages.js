'use strict';
console.log('slider stages');
//слайды
const slides = Array.from(document.querySelectorAll('[data-slider=yes]'));
console.log(slides);
//кружки в слайдере
const circles_slide = Array.from(document.querySelectorAll('.slider-circle'));
console.log(circles_slide);
//кнопки переключения
const btn_next = document.querySelector('.stages-next');
const btn_prev = document.querySelector('.stages-back');
console.log(btn_next);
btn_next.addEventListener('click', nextSlide);
btn_prev.addEventListener('click', prevSlide);


let slideNumber = 0;

function nextSlide() {
    console.log('я тут');
    slideNumber = (slideNumber + 1) % slides.length;
    console.log(slideNumber);
    btn_prev.disabled = false;
    if (slideNumber === 4) {
        btn_next.disabled = true;
    }

    showSlide();
}

function prevSlide() {
    slideNumber = (slideNumber - 1);
    btn_next.disabled = false;
    if (slideNumber === 0) {
        btn_prev.disabled = true;
    }
    console.log(slideNumber);
    showSlide();
}

function showSlide() {
    slides.forEach((slide, index) => {
        if (slideNumber === index) {
            slide.classList.remove('slider-hidden');
            slide.classList.add('slider-active');
        }
        else {
            slide.classList.remove('slider-active');
            slide.classList.add('slider-hidden');
        }
    });
    circles_slide.forEach((circle, index) => {
        if (slideNumber === index) {
            circle.classList.add('_choosen');
        }
        else {
            circle.classList.remove('_choosen');
        }
    })

}