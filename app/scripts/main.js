$(window).load(function(){
	$('nav a[href*=#]:not([href=#]), .logo a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 75
				}, 1000);
				return false;
			}
		}
	});
});

$(document).ready(function(){
	$('.nav .sub-nav').each(function () {
		$self = $(this);

		var totalWidth = 0;

		$self.find('li').each(function (){
			totalWidth += parseInt($(this).innerWidth(), 10);
		});

		$self.width(totalWidth);
	});
	$(".enjoy-rowenta .caption p.title").each(function () {
        $(this).append('<span></span>');
    });

    $('.nav-mobi-toggle').on('click', function(e){
    	e.preventDefault();
    	$(this).toggleClass('f-r');
    	$('.nav-mobi').toggle();
    	$('body').toggleClass('no-scroll');
    });

    $('.nav-mobi li, nav-mobi a').on('click', function(){
    	$('.nav-mobi-toggle').toggleClass('f-r');
    	$('.nav-mobi').toggle();
    	$('body').toggleClass('no-scroll');
    });
});