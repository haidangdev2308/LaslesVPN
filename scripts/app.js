$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="/assets/img/arrow-back.png"></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="/assets/img/arrow-next.png"></button>`,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });