{/* <script> */}
      const prevIcon = '<img src = "images/arrow-left.svg" alt:"left" class="owl_nav"> ';
      const nextIcon = '<img src = "images/arrow-right.svg" alt:"right" class="owl_nav">  ';
      

      $('.grid_slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots: true,

        navText: [
          prevIcon,
          nextIcon
        ],

        responsive:{ 0: { items: 1, }, 400: { items: 1, }, 740: { items: 2, }, 992: { items: 2, }, 1025: { items: 3, }, 1280: {items: 3,} },

        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,

        });

      $('.portfolio_slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: false,

        navText: [
          prevIcon,
          nextIcon
        ],

        responsive:{ 0: { items: 1, }, 400: { items: 1, }, 740: { items: 2, }, 992: { items: 3, }, 1025: { items: 2, }, 1280: {items: 2,} },

        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,

        });

      $('.awards_slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots: false,

        navText: [
          prevIcon,
          nextIcon
        ],

        responsive:{ 0: { items: 1, }, 400: { items: 2, }, 740: { items: 3, }, 992: { items: 3, }, 1025: { items: 4, }, 1280: {items: 5,} },

        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,

        });

        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })


      $('.about_awards_slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots: true,

        navText: [
          prevIcon,
          nextIcon
        ],

        responsive:{ 0: { items: 1, }, 400: { items: 1, }, 740: { items: 1, }, 992: { items: 1, }, 1025: { items: 1, }, 1280: {items: 1,} },

        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,

        });

        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })

    // </script>
     
    // <!-- Collapse JS  -->
    //  <script>
      $('#collapseExample').on('show.bs.collapse', function () {
          $('.footer_collapse i').removeClass('fa-plus').addClass('fa-minus');
      });

      $('#collapseExample').on('hide.bs.collapse', function () {
          $('.footer_collapse i').removeClass('fa-minus').addClass('fa-plus');
      });

    //  </script>
    // <!-- Collapse JS  -->

    // <script>
      $('.nav_toggler').click(function() {
      $(this).toggleClass('active');
      $('.nav_toggler_overlay').toggleClass('open');
      
      // Prevent or enable page scrolling
      if ($('.nav_toggler_overlay').hasClass('open')) {
          $('body').addClass('no-scroll');
      } else {
          $('body').removeClass('no-scroll');
      }
      });
    //   </script>
    
    // <!-- anuradha js -->
    
    // <script>
      $(".custom-carousel").owlCarousel({
        autoWidth: true,
        loop: true
      });
      $(document).ready(function () {
        $(".custom-carousel .item").click(function () {
          $(".custom-carousel .item").not($(this)).removeClass("active");
          $(this).toggleClass("active");
        });
      });
    // </script>