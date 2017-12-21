jQuery(document).ready(function( $ ) {
	$("#menu").mmenu({
		//"dropdown": true,
		"extensions": [
			"pagedim-black",

			"fx-menu-fade",
			//"listview-justify",
			"multiline",
			"shadow-page",
			//"popup"
		],
		navbar: {
			//title: '<img  alt="Мебельный салон Элит" src="icons/logo.png">'
			title: '<div class="menu-logoo">Главное меню</div>'
		},
		"offCanvas": {
			"position": "left",
			//"zposition": "front"
		},
		"navbars": [
			{
				"position": "top",
				"content": [
					"<span>ddddd</span>"

				]
			},
			{
				"position": "bottom",
				"content": [
					"<a class='fa fa-envelope' href='#/'></a>",
					"<a class='fa fa-twitter' href='#/'></a>",
					"<a class='fa fa-facebook' href='#/'></a>"
				]
			}

		],
		"counters": true
	});

	$.mmenu.configuration.classNames.fixedElements = {
		fixed: "Fixed",
		sticky: "Sticky"
	};
    
    var api = $("#menu").data("mmenu");
	$(window).on("resize", function () {
		api.close();
	});

//	$(".search_btn").click(function () {
//		api.open();
//	})

	api.bind("open:finish", function () {
		$(".hamburger").addClass("is-active");
	});

	api.bind("close:finish", function () {
		$(".hamburger").removeClass("is-active");
	});

	api.bind("open:finish", function () {
		$(".hamburger").addClass("is-active");
	});
    
    
    
    
    
    
    
}); // ready(function( $ )