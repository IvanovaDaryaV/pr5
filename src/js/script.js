import bootstrap from 'bootstrap'
import Popper from "popper.js"
import $ from "jquery";


// Пункт 5. Всплывающее окно
var modalBtn = $("#open-modal");
var modal = $("#modal")[0]; 
var closeBtn = $(".close-modal");

modalBtn.click(function () {
    modal.style.display = "block";
});

closeBtn.click(function () {

    modal.style.display = "none";
});

$(window).click(function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Пункт 6. Слайдер
const slider = $(".slider");
const prevBtn = $(".prev-btn");
const nextBtn = $(".next-btn");
var length = $(".slider").find(".slide").width();
var numSlides = $(".slider").find(".slide").length;
let currentSlide = 0;

function updateSlider() {
    slider.css("transform", "translateX(" + (-(currentSlide) * length) + "px)");
    if (currentSlide === 0) {
        prevBtn.prop("disabled", true);
    } else {
        prevBtn.prop("disabled", false);
    }

    if (currentSlide === numSlides - 1) {
        nextBtn.prop("disabled", true);
    } else {
        nextBtn.prop("disabled", false);
    }
}

prevBtn[0].addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextBtn[0].addEventListener("click", () => {
  if (currentSlide < numSlides - 1) {
    currentSlide++;
    updateSlider();
  }
});