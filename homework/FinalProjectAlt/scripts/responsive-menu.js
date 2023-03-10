(function ($) {

	//flags
	var _menu_created,
		_menu_open,


	//method to create the custom sidebar menu for smaller window sizes
		_createMenu = function () {
			var nav = $("#nav-primary ul").html();
			
			$("body").append("<div id='menu'><ul id='menu-primary'>" + nav + "</ul></div>")
			$("header").after("<a id='nav-toggle' href='#'><i class='fal fa-bars'></i> Menu</a>");

			$("#menu").height($(window).height());
			$("#nav-primary").hide();
			
			$("#nav-toggle").click(function (event) {
				$("#menu").show().animate({ right: "0" }, 150);
				$("#wrapper").css({ position: "fixed", top: 0, width: $("#wrapper").width() }).animate({ right: "250px" }, 150);
				_menu_open = true;
				event.stopPropagation();
				return false;
			});

			$("html").on("click touchstart", function (e) {
				if (_menu_open && $("#menu").has(e.target).length === 0) {
					$("#menu").animate({ right: "-400px" }, 150, function () {
						$(this).hide();
					});
					$("#wrapper").animate({ right: 0 }, 150, function () {
						$(this).css({ position: "static", top: "auto", width: "auto" });
					});
					_menu_open = false;
					e.stopPropagation();
					return false;
				}
			});
		},

	//method to remove the custom sidebar menu
		_removeMenu = function () {
			$("#menu, #nav-toggle").remove();
			$("#wrapper").css({ position: "static", top: "auto", width: "auto" });
			$("#nav-primary, header .social").show();
		};


	//configure responsive layouts and settings
	Responsive.init({
		layouts: {
			NARROW: { maxWidth: 690, stylesheet: false },
			LARGE: { maxWidth: 1200, stylesheet: false }
		},
		cssFolder: '/styles/',
		onLayoutChange: function (layout) {
			if (layout == Responsive.LayoutType.NARROW) {
				_createMenu();
				_menu_created = true;
			}
			else {
				if (_menu_created)
					_removeMenu();
				_menu_created = false;
			}
		}
	});
})(jQuery);