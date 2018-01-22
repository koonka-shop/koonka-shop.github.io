$(function() {
	$.Admin.app.activate();
	$.Admin.HeaderSearchModile.activate();
});
jQuery(document).ready(function( $ ) {
	$("#menu").mmenu({
		extensions: [ "position-front", "pagedim-black", "position-right", "theme-white", "fx-menu-fade", "fx-listitems-fade" ],
		navbar: {
			title: "Меню"
		},
		 navbars: [
				{ content: [ 'searchfield' ] },
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
					title:"Результаты поиска"
				},
				noResults: "Пусто :(",
				showSubPanels: false
		 },
		
	},
	{
		searchfield: {
			clear: true,
		}
	}
);




});


$.Admin = {};

$.Admin.options = {
	test: {
		testVal: '123',
	}
}

$.Admin.app = {
	activate: function() {
		
	},
	overlay: function() {
		$('<div>', {
			class: 'overlay',
			on: {
				click: function(event){
					$(this).fadeOut( function(){$(this).remove()});
				}
			}
		}).appendTo('body').fadeIn();
	},
}


$.Admin.HeaderSearchModile = {
	activate: function() {
		$("body header .search").on("click", function(event) {
			var windowWidth = $(window).width();
			if(windowWidth <= 480){
				$(this).addClass('open');
			}
		});

		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $("body header .search"); // тут указываем ID элемента
			if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.removeClass('open'); // скрываем его
			}
		});


	}
}