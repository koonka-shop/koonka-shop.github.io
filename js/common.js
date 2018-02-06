$(function() {
  $.Admin.app.activate();

  $.Admin.mobileMmenu.activate();
  $.Admin.HeaderSearchModile.activate();

});
jQuery(document).ready(function($) {


  $.Admin.heightSliderHome.activate();

  $("#sliderHome").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    autoHeight: true,
    autoHeightClass: 'owl-height',
    items: 1,
    dots: true,
    mouseDrag: true,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 700,
    autoplayTimeout: 100000, //Время смены слайда
  });

  $(".parallax").myParallax({
    "speed": "15"
  });

});


$.Admin = {};


/*
 * Конфиги необходимые для сайта
 */
$.Admin.options = {
  test: {
    testVal: '123',
  }
}

$.Admin.app = {
  activate: function() {

    $(window).resize(function() {
      $.Admin.heightSliderHome.activate();
    });
  },
  overlay: function() {
    $('<div>', {
      class: 'overlay',
      on: {
        click: function(event) {
          $(this).fadeOut(function() { $(this).remove() });
        }
      }
    }).appendTo('body').fadeIn();
  }

}

$.Admin.mobileMmenu = {
  activate: function() {
    $("#menu").mmenu({
      extensions: ["position-front", "pagedim-black", "position-right", "theme-white", "fx-menu-fade", "fx-listitems-fade"],
      navbar: {
        title: "Меню"
      },
      navbars: [
        { content: ['searchfield'] },
        {
          "position": "top",
          "content": [
            "prev",
            "breadcrumbs"
          ]
        },
        {
          "position": "bottom",
          "content": [
            "<a class='fa fa-envelope' href='#/'></a>",
            "<a class='fa fa-vk' href='#/'></a>",
            "<a class='fa fa-facebook' href='#/'></a>"
          ]
        }
      ],
      counters: true,
      searchfield: {
        placeholder: 'Поиск по Каталогу...',
        panel: {
          add: true,
          dividers: true,
          title: "Результаты поиска"
        },
        noResults: "Пусто :(",
        showSubPanels: false
      },

    }, {
      searchfield: {
        clear: true,
      }
    });
  }
}


/*
 * Слайдер на главной
 * Управление дизайном слайдера
 */
$.Admin.heightSliderHome = {
  activate: function() {


    var headerHeight = $("body header").outerHeight(); // Высота шапки сайта
    var windowHeight = $(window).height(); // Высота экрана
    var sliderHeight = windowHeight - headerHeight;

    $('main section.sliderHome .item').css({
      minHeight: sliderHeight + 'px',
    });
  }
}

/*
 * Кнопкой поиска для Mobile. Активация формы поиска
 * Сontrol Button search. Activate search Button
 */
$.Admin.HeaderSearchModile = {
  activate: function() {
    $("body header .search").on("click", function(event) {
      var windowWidth = $(window).width();
      if (windowWidth <= 480) {
        $(this).addClass('open');
      }
    });

    $(document).mouseup(function(e) { // событие клика по веб-документу
      var div = $("body header .search"); // тут указываем ID элемента
      if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('open'); // скрываем его
      }
    });

  }
}