$(function() {
	$.Admin.app.activate();
	$.Admin.HeaderSearchBtn.activate();
});
jQuery(document).ready(function( $ ) {
	$("#menu").mmenu({
		 "navbar": {
				title: "Меню"
		 },
		 "counters": true,
		 "searchfield" : {
				placeholder: 'Поиск по меню...',
				noResults: "Ничего не найденно..."
		 },
		"extensions": [
				"theme-white",
				"pagedim-black",
				"position-right",
				"fx-menu-slide",
				"fx-listitems-fade",
		 ],
		 "navbars": [
				{
					 content: [ 'searchfield' ]
				},
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
		 ]
	});
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


$.Admin.HeaderSearchBtn = {
	activate: function() {
		$(".search-mobileBtn").on("click", function(event) {
			$.Admin.app.overlay();
			$(".searchFormPopup").fadeIn();
		});
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".searchFormPopup"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.fadeOut() // скрываем его
			}
		});
	}
}