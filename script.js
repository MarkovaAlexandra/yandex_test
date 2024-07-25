'use strict';

//================= слайдер карточек участников ===============

//карточки слайдера, кнопки передистывания и поля ввода номера слайда

const membersList = document.querySelector('.member__list');
const members = Array.from(membersList.querySelectorAll('.member__item'));
const prevButtons = document.querySelectorAll('.previous-slide');
const nextButtons = document.querySelectorAll('.next-slide');
const sliderCounts = document.querySelectorAll('.slider-count');

prevButtons.forEach(button => button.addEventListener('click', showPreviousSlide));
nextButtons.forEach(button => button.addEventListener('click', showNextSlide));

let slideIndex = 0;

// функция для определения номера предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + members.length) % members.length;
    updateSlider();
}

// Функция для определения номера следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % members.length;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {

    //если не маленький экран, то выводим по 3 карточки, индекс + 2 следующих (их определяем в массив, в котором в цикле убираем _hidden, добавляем _appearance), всем остальным убираем класс _appearance, добавляем _hidden
    let windowWidth = window.innerWidth;
    if (windowWidth >= 476) {
        let showed = [];
        members.forEach((member, index) => {

            if (index === slideIndex) {
                members.forEach(slide => slide.classList.add('_hidden'));
                members.forEach(slide => slide.classList.remove('_appearance'));

                showed.push(members[slideIndex]);
                showed.push(members[(slideIndex + 1) % members.length]);
                showed.push(members[(slideIndex + 2) % members.length]);

                showed.forEach(slide => slide.classList.remove('_hidden'));
                showed.forEach(slide => slide.classList.add('_appearance'));
            }
        })
    }
    //на мобилках выводим по одной карточке, ей и меняем классы
    else {
        console.log('слишком маленький экран');
        members.forEach((member, index) => {
            if (index === slideIndex) {
                member.classList.remove('_hidden');
                member.classList.remove('_mobile-hidden'); //сразу убираем класс для скрытия на мобильных устр-ах
                member.classList.add('_appearance');
            }
            else {
                member.classList.remove('_appearance');
                member.classList.add('_hidden');
            }
        })

    }
    // в эошке номера слайда отображаем инфо
    sliderCounts.forEach(text => text.textContent = (slideIndex + 1) + ' / 6');
}
// setInterval(showNextSlide, 4000);

