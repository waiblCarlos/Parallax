$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	//header
	$('.logo').css({
		'transform': 'translate(0px, ' + wScroll/2 + '%)'
	});

	$('.back-bird').css({
		'transform': 'translate(0px, ' + wScroll/4 + '%)'
	});

	$('.fore-bird').css({
		'transform': 'translate(0px, ' + -wScroll/40 + '%)'
	});

	//models
	if(wScroll > $('.clothes-pics').offset().top - ($(window).height()/1.2)) {
		$('.clothes-pics figure').each(function(i){
			setTimeout(function(){
				$('.clothes-pics figure').eq(i).addClass('is-showing');
			}, 150*(i+1));
		});
	};
});