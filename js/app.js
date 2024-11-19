$(function() {

	/* Fixed Header */ 
    let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	

	checkSkroll(scrollPos, introH);
	
	$(window).on("scroll resize", function(){
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		
		checkSkroll(scrollPos, introH);
		  });
	
	function checkSkroll() {
		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}
		
	/* Smoth scroll */
	$("[data-scroll]").on("click", function(event){
		event.preventDefault(); 
		
		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		console.log (elementOffset);
		
		nav.removeClass("show");
		
		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});

});

