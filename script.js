 
 //Собственное производство слайдер
 
 $('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  asNavFor: '.slider-for'
});
 $('.slider-for').slick({
  slidesToShow: 1,
  arrows : false,
  slidesToScroll: 1,
  asNavFor: '.slider-nav'
});

function l_image (a) {
    document.example_img.src = a;
}

