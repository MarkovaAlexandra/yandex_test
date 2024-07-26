'use strict';

//слайды
const slides = Array.from(document.querySelectorAll('[data-slider=yes]'));

//кружки в слайдере
const circles_slide = Array.from(document.querySelectorAll('.slider-circle'));

//кнопки переключения
const btn_next = document.querySelector('.stages-next');
const btn_prev = document.querySelector('.stages-back');

btn_next.addEventListener('click', nextSlide);
btn_prev.addEventListener('click', prevSlide);


let slideNumber = 0;

function nextSlide() {
    slideNumber = (slideNumber + 1) % slides.length;
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