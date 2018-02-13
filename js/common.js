$(function() {

	// Custom JS

});
jQuery(document).ready(function( $ ) {
	$.Admin.orderCall.activate();
	$.Admin.mainMobileMenu.activate();
	$.Admin.HeaderSearchModile.activate();
	$.Admin.mainSlider.activate();
	$.Admin.everythingTabs.activate();
	
	$("input[type=tel]").mask("+7 (999) 999 - 99 - 99");

});


$.Admin = {};

$.Admin.everythingTabs = {
	activate: function() {	
		$(".s-koonka-everything .tab_item").not(":first").hide();
		$(".s-koonka-everything .tab").click(function() {
			$(".s-koonka-everything .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".s-koonka-everything .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	}
}

$.Admin.mainSlider = {
	activate: function() {
		$('.main-slider').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			loop: false,
			autoHeight: false,
			items: 1,
			dots: true,
			mouseDrag: false,
			nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
		});
	}
}


/*
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

 */
$.Admin.orderCall = {
 activate: function() {

	$("#order-call").mmenu({
		"extensions": [
			"pagedim-black",
			"popup",
			"theme-white"
		],
		navbar: {
			title: false
		},
		navbars: {
			content : []
		},
		"autoHeight": true
	});

	var API = $("#order-call").data("mmenu");

	$(".mm-modal-close").click(function() {
		$('#order-call form').trigger('reset');
		API.close();
	});


 }
}

$.Admin.mainMobileMenu = {
	activate: function() {
		$("#main-mobile-menu").mmenu({
			extensions: ["theme-white", "fx-menu-fade", "position-front", "position-right", "fx-listitems-fade","pagedim-black", "border-full"],
			navbar: {
				title: "Главное меню"
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
 * Кнопкой поиска для Mobile. Активация формы поиска
 * Сontrol Button search. Activate search Button
 */
$.Admin.HeaderSearchModile = {
  activate: function() {
    $("body #my-header .box-search").on("click", function(event) {
      var windowWidth = $(window).width();
      if (windowWidth <= 480) {
        $(this).addClass('open');
      }
    });

    $(document).mouseup(function(e) { // событие клика по веб-документу
      var div = $("body #my-header .box-search"); // тут указываем ID элемента
      if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('open'); // скрываем его
      }
    });

  }
}