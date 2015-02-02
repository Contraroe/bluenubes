$(document).ready(function(){

	// TOOLTIPS 


	// VARS
	var mod1 = "Entry check <br>";
	var mod2 = "Outdoor navigation <br>";
	var mod3 = "Indoor navigation <br>";
	var mod4 = "Content push <br>";
	var mod5 = "Localiser <br>";
	var mod6 = "Payments <br>";
	var mod7 = "Geofence <br>";


	var parentHeight = $('.center').height();
	var childHeight = $('#center').height();
	$('#center').css('margin-top', (parentHeight - childHeight) / 2);


	$('.1').click(function(){
		$('#module1').css('background-color','rgba(0,127,172,0.5)');
		$('#module2').css('background-color','rgba(0,127,172,0.55)');
		$('#module3').css('background-color','rgba(0,127,172,0.6)');
		$('#module4').css('background-color','rgba(0,127,172,0.65)');
		$('#module5').css('background-color','rgba(0,127,172,0.7)');
		$('#module6').css('background-color','rgba(0,127,172,0.75)');
		$('#module7').css('background-color','rgba(63,62,78,0.35)');

		$('.1').addClass('active');
		$('.2').removeClass('active');
		$('.3').removeClass('active');
		$('.4').removeClass('active');
		$('.5').removeClass('active');
		$('.6').removeClass('active');
		$('.7').removeClass('active');
		$('.8').removeClass('active');

		$('#center').html(mod1 + mod2 + mod3 + mod4 + mod5 + mod6);
		$('#appname').html('Massa Events');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);

	});
	$('.2').click(function(){
		$('#module1').css('background-color','rgba(63,62,78,0.05)');
		$('#module2').css('background-color','rgba(63,62,78,0.10)');
		$('#module3').css('background-color','rgba(0,127,172,0.6)');
		$('#module4').css('background-color','rgba(0,127,172,0.65)');
		$('#module5').css('background-color','rgba(63,62,78,0.25)');
		$('#module6').css('background-color','rgba(0,127,172,0.75)');
		$('#module7').css('background-color','rgba(63,62,78,0.35)');

		$('.1').removeClass('active');
		$('.2').addClass('active');
		$('.3').removeClass('active');
		$('.4').removeClass('active');
		$('.5').removeClass('active');
		$('.6').removeClass('active');
		$('.7').removeClass('active');
		$('.8').removeClass('active');

		$('#center').html(mod3 + mod4 + mod6);		
		$('#appname').html('Retail');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);

	});
	$('.3').click(function(){
		$('#module1').css('background-color','rgba(63,62,78,0.05)');
		$('#module2').css('background-color','rgba(63,62,78,0.10)');
		$('#module3').css('background-color','rgba(63,62,78,0.15)');
		$('#module4').css('background-color','rgba(63,62,78,0.20)');
		$('#module5').css('background-color','rgba(0,127,172,0.7)');
		$('#module6').css('background-color','rgba(63,62,78,0.30)');
		$('#module7').css('background-color','rgba(0,127,172,0.8)');

		$('.1').removeClass('active');
		$('.2').removeClass('active');
		$('.3').addClass('active');
		$('.4').removeClass('active');
		$('.5').removeClass('active');
		$('.6').removeClass('active');
		$('.7').removeClass('active');
		$('.8').removeClass('active');

		$('#center').html(mod5 + mod7);
		$('#appname').html('Care');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);

	});
	$('.4').click(function(){
		$('#module1').css('background-color','rgba(0,127,172,0.5)');
		$('#module2').css('background-color','rgba(0,127,172,0.55)');
		$('#module3').css('background-color','rgba(0,127,172,0.6)');
		$('#module4').css('background-color','rgba(0,127,172,0.65)');
		$('#module5').css('background-color','rgba(0,127,172,0.7)');
		$('#module6').css('background-color','rgba(0,127,172,0.75)');
		$('#module7').css('background-color','rgba(63,62,78,0.35)');

		$('.1').removeClass('active');
		$('.2').removeClass('active');
		$('.3').removeClass('active');
		$('.4').addClass('active');
		$('.5').removeClass('active');
		$('.6').removeClass('active');
		$('.7').removeClass('active');
		$('.8').removeClass('active');

		$('#center').html(mod1 + mod2 + mod3 + mod4 + mod5 + mod6);
		$('#appname').html('Big Infrastructures');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);

	});
	$('.5').click(function(){
		$('#module1').css('background-color','rgba(0,127,172,0.5)');
		$('#module2').css('background-color','rgba(63,62,78,0.10)');
		$('#module3').css('background-color','rgba(0,127,172,0.6)');
		$('#module4').css('background-color','rgba(63,62,78,0.20)');
		$('#module5').css('background-color','rgba(0,127,172,0.7)');
		$('#module6').css('background-color','rgba(0,127,172,0.75)');
		$('#module7').css('background-color','rgba(63,62,78,0.35)');

		$('.1').removeClass('active');
		$('.2').removeClass('active');
		$('.3').removeClass('active');
		$('.4').removeClass('active');
		$('.5').addClass('active');
		$('.6').removeClass('active');
		$('.7').removeClass('active');
		$('.8').removeClass('active');

		$('#center').html(mod1 + mod3 + mod5 + mod6);
		$('#appname').html('Parking');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);

	});
	$('.6').click(function(){
		$('#module1').css('background-color','rgba(0,127,172,0.5)');
		$('#module2').css('background-color','rgba(63,62,78,0.10)');
		$('#module3').css('background-color','rgba(63,62,78,0.15)');
		$('#module4').css('background-color','rgba(63,62,78,0.20)');
		$('#module5').css('background-color','rgba(0,127,172,0.7)');
		$('#module6').css('background-color','rgba(63,62,78,0.30)');
		$('#module7').css('background-color','rgba(63,62,78,0.35)');

		$('.1').removeClass('active');
		$('.2').removeClass('active');
		$('.3').removeClass('active');
		$('.4').removeClass('active');
		$('.5').removeClass('active');
		$('.6').addClass('active');
		$('.7').removeClass('active');
		$('.8').removeClass('active');

		$('#center').html(mod1 + mod5);
		$('#appname').html('Buildings');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);

	});
	$('.7').click(function(){
		$('#module1').css('background-color','rgba(63,62,78,0.05)');
		$('#module2').css('background-color','rgba(63,62,78,0.10)');
		$('#module3').css('background-color','rgba(0,127,172,0.6)');
		$('#module4').css('background-color','rgba(0,127,172,0.65)');
		$('#module5').css('background-color','rgba(0,127,172,0.7)');
		$('#module6').css('background-color','rgba(63,62,78,0.30)');
		$('#module7').css('background-color','rgba(63,62,78,0.35)');

		$('.1').removeClass('active');
		$('.2').removeClass('active');
		$('.3').removeClass('active');
		$('.4').removeClass('active');
		$('.5').removeClass('active');
		$('.6').removeClass('active');
		$('.7').addClass('active');
		$('.8').removeClass('active');

		$('#center').html(mod3 + mod4 + mod5);
		$('#appname').html('Guided tours / Musea');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);

	});
	$('.8').click(function(){
		$('#module1').css('background-color','rgba(63,62,78,0.05)');
		$('#module2').css('background-color','rgba(0,127,172,0.55)');
		$('#module3').css('background-color','rgba(0,127,172,0.6)');
		$('#module4').css('background-color','rgba(63,62,78,0.20)');
		$('#module5').css('background-color','rgba(0,127,172,0.7)');
		$('#module6').css('background-color','rgba(63,62,78,0.30)');
		$('#module7').css('background-color','rgba(63,62,78,0.35)');

		$('.1').removeClass('active');
		$('.2').removeClass('active');
		$('.3').removeClass('active');
		$('.4').removeClass('active');
		$('.5').removeClass('active');
		$('.6').removeClass('active');
		$('.7').removeClass('active');
		$('.8').addClass('active');

		$('#center').html(mod2 + mod3 + mod5);
		$('#appname').html('Friends finder');

		var parentHeight = $('.center').height();
		var childHeight = $('#center').height();
		$('#center').css('margin-top', (parentHeight - childHeight) / 2);
	});
	
	// Wheel Go To

		
	$('#backtowheel').click(function() {
		$('html,body').animate({scrollTop: $("#modwheel").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 0);
	});


	// Modules Go To


	$('#module1').click(function() {
		$('html,body').animate({scrollTop: $(".ex1").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 1);
	});

	$('#module2').click(function() {
		$('html,body').animate({scrollTop: $(".ex2").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 1);
	});
	$('#module3').click(function() {
		$('html,body').animate({scrollTop: $(".ex3").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 1);
	});
	$('#module4').click(function() {
		$('html,body').animate({scrollTop: $(".ex4").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 1);
	});
	$('#module5').click(function() {
		$('html,body').animate({scrollTop: $(".ex5").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 1);
	});
	$('#module6').click(function() {
		$('html,body').animate({scrollTop: $(".ex6").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 1);
	});
	$('#module7').click(function() {
		$('html,body').animate({scrollTop: $(".ex7").offset().top},'slow');
		$('#backtowheel').fadeTo(1000, 1);
	});

	// Amation

	$('#modex.ex1').fadeTo(500, 1);

	c = $('#modex.ex2').height();
	d = "3" ;
	e = c/d;


	titles = $('#modex.ex2').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
				
			a = $('#modex.ex2').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#modex.ex2').fadeTo(500, 1);
		});
	});
	titles = $('#modex.ex3').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {

			a = $('#modex.ex3').offset().top + e;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#modex.ex3').fadeTo(500, 1);
		});
	});
	titles = $('#modex.ex4').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#modex.ex4').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#modex.ex4').fadeTo(500, 1);
		});
	});	
	titles = $('#modex.ex5').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#modex.ex5').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#modex.ex5').fadeTo(500, 1);
		});
	});
	titles = $('#modex.ex6').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#modex.ex6').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#modex.ex6').fadeTo(500, 1);
		});
	});	
	titles = $('#modex.ex7').fadeTo (0, 0);
		$(window).scroll(function(d,h){
			titles.each(function(i) {
			a = $('#modex.ex7').offset().top + e ;
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $('#modex.ex7').fadeTo(500, 1);
		});
	});



});