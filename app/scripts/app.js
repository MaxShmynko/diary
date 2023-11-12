import $ from 'jquery';
import slick from "slick-carousel";
import WOW from "wowjs";

$(() => {

  const wow = new WOW.WOW({
		live: false,
		boxClass: "wow",
	});

	wow.init();

  $('.sliders__wrap__list').slick({
    infinite: true, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    vertical: false,
    variableWidth: true,
    speed: 200,
    centerMode: true,
    swipe: true,
    swipeToSlide: 1,
    prevArrow: $('.sliders__wrap__button-prev'),
    nextArrow: $('.sliders__wrap__button-next'),
  });

  $('.sliders__wrap__list').on('swipe', function(event, slick, direction){
    console.log(direction);
    // left
  });

  $('.sliders__slider').on('afterChange', function(event, slick, currentSlide){
    let currentSlideIndex = currentSlide + 1;
    let totalSlides = slick.slideCount;
    let counterText = currentSlideIndex + '/' + totalSlides;
    $('.sliders__slider__counter-number').text(counterText);
  });
    
  function initSlider() {
    const sliderContent = $('.content__wrap__slider-content');
    if (!sliderContent.hasClass('slick-initialized')) {
      sliderContent.slick({
        infinite: true, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        vertical: false,
        variableWidth: true,
        speed: 200,
        centerMode: true,
        prevArrow: $('.content__wrap__button-prev'),
        nextArrow: $('.content__wrap__button-next'),
      });
    }
  }

  function destroySlider() {
    if ($('.content__wrap__slider-content').hasClass('slick-initialized')) {
      $('.content__wrap__slider-content').slick('unslick');
    }
  }

  function handleSliderBasedOnResolution() {
    if (window.innerWidth <= 768) {
      initSlider();
    } else {
      destroySlider();
    }
  }


  handleSliderBasedOnResolution();

  $(window).on('resize', function () {
    handleSliderBasedOnResolution();
  });
});
