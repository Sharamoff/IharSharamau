/* main */
$(document).ready(function () {

//tooltips
$('[data-bs-toggle="tooltip"]').tooltip();


//fancybox run
Fancybox.bind('[data-fancybox]', {});


// sidebar
$('#id_menu-main').on('click', function () {
  $('.overlay').addClass('active');
  $('.sidebar').addClass('active');
  $('body').css({overflow: 'hidden'});
  $('html').addClass('html--wmodal');
});
$('.sidebar__close, .overlay, a').on('click', function () {
  $('.sidebar').removeClass('active');
  $('.overlay').removeClass('active');
  $('body').css({overflow: 'inherit'});
  $('html').removeClass('html--wmodal');
});


// main sliders
$('#id_mainslider-index').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 772,
      settings: {
        speed: 100,
        arrows: false
      }
    }
  ]
});

$('#id_mainslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 772,
      settings: {
        speed: 100,
        arrows: false
      }
    }
  ]
});


// apartamentlist slider
$('.apartamentlist__item-pics_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  fade: true,
  speed: 100,
  cssEase: 'linear',
  autoplay: false
});
$('.apartamentlist__item').hover(function () {
  let itemId = '#' + $(this).attr("id");
  $(itemId + ' .hoverbar1').hover(function () {
      $(itemId + ' .apartamentlist__item-pics_slide').slick('slickGoTo', 0);
    }, function () {
    }
  );
  $(itemId + ' .hoverbar2').hover(function () {
      $(itemId + ' .apartamentlist__item-pics_slide').slick('slickGoTo', 1);
    }, function () {
    }
  );
  $(itemId + ' .hoverbar3').hover(function () {
      $(itemId + ' .apartamentlist__item-pics_slide').slick('slickGoTo', 2);
    }, function () {
    }
  );
  $(itemId + ' .hoverbar4').hover(function () {
      $(itemId + ' .apartamentlist__item-pics_slide').slick('slickGoTo', 3);
    }, function () {
    }
  );
});

// servicelist slider
$('#id_servicelist-index').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 772,
      settings: {
        centerMode: true,
        centerPadding: '100px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  ]
});

$window = $(window);
$slick_slider_servicelist = $('#id_servicelist');
settings = {
  slidesToShow: 2,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 100,
  centerMode: true,
  centerPadding: '60px'
};
function listToSlick_servicelist() {
  if ($window.width() > 753) {
    if ($slick_slider_servicelist.hasClass('slick-initialized'))
      $slick_slider_servicelist.slick('unslick');
    return
  }
  if (!$slick_slider_servicelist.hasClass('slick-initialized'))
    return $slick_slider_servicelist.slick(settings);
}
listToSlick_servicelist();
$window.on('resize', function () {
  listToSlick_servicelist();
});

// eventslist slider
$('#id_eventslist-index').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 772,
      settings: {
        centerMode: true,
        centerPadding: '100px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  ]
});

$window = $(window);
$slick_slider_eventlist = $('#id_eventslist');
settings = {
  slidesToShow: 1,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 100,
  centerMode: true,
  centerPadding: '60px'
};
function listToSlick_eventslist() {
  if ($window.width() > 753) {
    if ($slick_slider_eventlist.hasClass('slick-initialized'))
      $slick_slider_eventlist.slick('unslick');
    return
  }
  if (!$slick_slider_eventlist.hasClass('slick-initialized'))
    return $slick_slider_eventlist.slick(settings);
}
listToSlick_eventslist();
$window.on('resize', function () {
  listToSlick_eventslist();
});


// dishelist slider
$('#id_dishlist').slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 772,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        centerPadding: '60px',
        autoplay: false,
        speed: 100
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        autoplay: false,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});


// gallerylist slider
$('#id_gallerylist-index').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  centerPadding: '100px',
  variableWidth: true,
  adaptiveHeight: true,
  dots: true,
  arrows: true,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 772,
      settings: {
        arrows: false,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

// attractionlist slider
$('#id_attractionlist').slick({
  slidesToShow: 6,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        dots: true
      }
    },
    {
      breakpoint: 772,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

// music bar services slider
$('#id_mbservicelist').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: true,
  focusOnSelect: true,
  infinite: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 772,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  ]
});

// halls in tab1 slider
$('#id_halls1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 772,
      settings: {
        speed: 100,
        arrows: false
      }
    }
  ]
});

// halls in tab2 slider
$('#id_halls2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 772,
      settings: {
        speed: 100,
        arrows: false
      }
    }
  ]
});

// sliders in tab reload
$('.halls-tab').on('click', function (e) {
  $('#id_halls1').slick('reinit');
  $('#id_halls2').slick('reinit');
});


// restmenu slider
$('#id_menulist').slick({
  slidesToShow: 5,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 772,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});


// typeventlist slider
$('#id_typeventlist-childholiday').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 772,
      settings: {
        centerMode: true,
        centerPadding: '100px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  ]
});

// typeventlist slider
$('#id_typeventlist-eventsorg').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  focusOnSelect: true,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 772,
      settings: {
        centerMode: true,
        centerPadding: '100px',
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  ]
});


// drag legend into scheme
/*
$window = $(window);
function dragableLegend() {
  if ($window.width() > 753) {
    $('.scheme__legend').draggable({
      containment: ".block-scheme",
      scroll: false
    });
  } else {
    $('.scheme__legend').draggable("disable");
  }
}
dragableLegend();
$window.on('resize', function() {
  dragableLegend();
});
*/

// legend scheme rules
$('.scheme__legendclose').on('click', function () {
  $('.scheme__legend').fadeOut();
  $('.scheme__legendopen').fadeIn();
});
$('.scheme__legendopen').on('click', function () {
  $('.scheme__legend').fadeIn();
  $('.scheme__legendopen').fadeOut();
});


// masonry reviews
$('.block-reviewlist').masonry({
  itemSelector: '.masonry-grid-item',
  percentPosition: true,
  transitionDuration: '0.3s'
});


// main sliders
$('#id_slpics-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
        speed: 1000
      }
    },
    {
      breakpoint: 772,
      settings: {
        arrows: false,
        dots: true,
        speed: 100
      }
    }
  ]
});

// hotel rating
$window = $(window);
$slick_slider_hotelrating = $('#id_hotelrating');
settings = {
  slidesToShow: 1,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  focusOnSelect: true,
  speed: 100,
  infinite: true,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: '60px'
};
function listToSlick_hotelrating() {
  if ($window.width() > 560) {
    if ($slick_slider_hotelrating.hasClass('slick-initialized'))
      $slick_slider_hotelrating.slick('unslick');
    return
  }
  if (!$slick_slider_hotelrating.hasClass('slick-initialized'))
    return $slick_slider_hotelrating.slick(settings);
}
listToSlick_hotelrating();
$window.on('resize', function () {
  listToSlick_hotelrating();
});



// filter logic
$(".b-flt").click(function(){
  if ($(this).index() === 0) {
    $(".b-flt").not(this).prop("checked", false);
  } else {
    $("#b-flt-all").prop("checked", false);
  }
  if ($(".b-flt:not(:first)").length === $(".b-flt:not(:first):checked").length) {
    $("#b-flt-all").prop("checked", true);
    $(".b-flt:not(:first)").prop("checked", false);
  }
  if ($(".b-flt:checked").length === 0) {
    $("#b-flt-all").prop("checked", true);
  }
});

});