import $ from 'jquery';
import slick from "slick-carousel";

$(() => {
    $(document).ready(function(){
      $('.promo__wrap__list').slick({
        infinite: true, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        vertical: false,
        variableWidth: true,
        speed: 700,
        centerMode: true,
        prevArrow: $('.promo__wrap__button-prev'),
        nextArrow: $('.promo__wrap__button-next'),
      });

      $('.promo__slider').on('afterChange', function(event, slick, currentSlide){
        let currentSlideIndex = currentSlide + 1;
        let totalSlides = slick.slideCount;
        let counterText = currentSlideIndex + '/' + totalSlides;
        $('.promo__slider__counter-number').text(counterText);
      });
    });
    $('.content').addClass('disabled');

    $('.promo__list__card-link').click(function(){
      $('.promo').addClass('disabled');
      $('.content').removeClass('disabled');
    });

    $('.content__wrap__header-link').click(function(){
      $('.content').addClass('disabled');
      $('.promo').removeClass('disabled');
    });
});
