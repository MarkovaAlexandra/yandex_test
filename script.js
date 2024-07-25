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
let count = 0; //  переменная для отображения счета в слайдере , если выбрана функция отображения сразу по три картинки

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
        // в этом варианте добавляем и уьираем по одной карточке
        /*
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
*/
        //или простой вариант со смной сразу трех картинок

        members.forEach(slide => slide.classList.toggle('_hidden'));
        members.forEach(slide => slide.classList.toggle('_appearance'));
        console.log(slideIndex);
        if ((slideIndex % 2) === 0) {
            count = 6;
        }
        else {
            count = 3;
        }
        sliderCounts.forEach(text => text.textContent = count + ' / 6');
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
        sliderCounts.forEach(text => text.textContent = (slideIndex + 1) + ' / 6');
    }
    // в этом окошке номера слайда отображаем инфо (строку разблокировать, если выбираем вариант для десктопа с добавлением карточек по одной)
    // sliderCounts.forEach(text => text.textContent = (slideIndex + 1) + ' / 6');
}
// setInterval(showNextSlide, 4000);

