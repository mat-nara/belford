$('.top-slider').slick({
  initialSlide:1,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: true,
  arrows: false,
   responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
});

$('.done-slider').slick({
  /*initialSlide:2,*/
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  prevArrow: $('.icon-next-arrow'),
  nextArrow: $('.icon-prev-arrow'),
  responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
});

