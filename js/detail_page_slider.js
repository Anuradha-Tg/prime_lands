$(function () {
  var galleryTop, galleryThumbs;

  function initSwiper() {
    // Destroy existing Swiper instances if they exist
    if (galleryTop) {
      galleryTop.destroy(true, true);
    }
    if (galleryThumbs) {
      galleryThumbs.destroy(true, true);
    }

    if ($(window).width() > 768) {
      // Initialize Swiper for mobile
      galleryTop = new Swiper(".mySwiperDesktop", {
        spaceBetween: 10,
        slidesPerView: 2,
        direction:'vertical',// Default slides per view for mobile
        freeMode: false,
        watchSlidesProgress: true,
        breakpoints: {
          768: {
            slidesPerView: 3, // Change to 2 slides per view at 768px or wider
          },
          530: {
            slidesPerView: 3, // Change to 2 slides per view at 768px or wider
          },
          300: {
            slidesPerView: 2, // Change to 2 slides per view at 768px or wider
          },
        }
      });
      galleryThumbs = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        a11y: {
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        },
        thumbs: {
          swiper: galleryTop,
        },
      });
    } else {
      // Initialize Swiper for desktop
      galleryTop = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: false,
        watchSlidesProgress: true,
      });
      galleryThumbs = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        a11y: {
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        },
        thumbs: {
          swiper: galleryTop,
        },
      });
    }

    // Sync the slide change between galleryTop and galleryThumbs
    galleryTop.on("slideChangeTransitionStart", function () {
      galleryThumbs.slideTo(galleryTop.activeIndex);
    });
    galleryThumbs.on("transitionStart", function () {
      galleryTop.slideTo(galleryThumbs.activeIndex);
    });
  }

  initSwiper();

  // Reinitialize Swiper on window resize
  $(window).resize(function () {
    initSwiper();
  });
});