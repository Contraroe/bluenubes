	$('#fccont.beacon').fadeTo(1000, 1);

	c = $('#fccont.phone').height();
	d = "4" ;
	e = c/d;


	titles = $('#fccont.phone').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
				
			a = $('#fccont.phone').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#fccont.phone').fadeTo(1000, 1);
		});
	});
	titles = $('#fccont.notified').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {

			a = $('#fccont.notified').offset().top + e;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#fccont.notified').fadeTo(1000, 1);
		});
	});
	titles = $('#fccont.api').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#fccont.api').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#fccont.api').fadeTo(1000, 1);
		});
	});	
	titles = $('#fccont.db').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#fccont.db').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#fccont.db').fadeTo(1000, 1);
		});
	});
	titles = $('#fccont.api2').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#fccont.api2').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#fccont.api2').fadeTo(1000, 1);
		});
	});	
	titles = $('#fccont.phone2').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#fccont.phone2').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#fccont.phone2').fadeTo(1000, 1);
		});
	});
	titles = $('#fccont.information').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#fccont.information').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#fccont.information').fadeTo(1000, 1);
		});
	});		