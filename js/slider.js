var sliderjq = {
	in: function() {
		var margin = 0;
		var rightEdge = 0;
		var numberImages = $('.slider > li:last').index() + 1;
		var widthImages = numberImages * 554;
		var animationSpeed = 400;
		$('.slider').width(widthImages);
		$('.dot').click(function(){
			var activeDot = $('.active_dot').index();
			var thisDot = $(this).index();
			var differenceDot = (activeDot - thisDot) * 554;
			margin += differenceDot;
			$('.slider').animate({marginLeft: margin}, animationSpeed);
			$('.active_dot').removeClass('active_dot');
			$(this).addClass('active_dot');
		});

		$('.arrow_right').click(function(){
			if(margin === (1 - numberImages) * 554) {
				margin = 0;
			}
			else {
				margin -= 554
			}
			$('.slider').animate({marginLeft: margin}, animationSpeed);
			rightEdge = $('.active_dot').next().attr('class');
			if(rightEdge) {
				$('.active_dot').next().addClass('active_dot');
				$('.active_dot:first').removeClass('active_dot');
			}
			else {
				$('.active_dot').removeClass('active_dot');
				$('.dot:first').addClass('active_dot');
			}
		});

		$('.arrow_left').click(function() {
			if (margin === 0) {
				margin = -((numberImages - 1) * 554);
			} else {
				margin += 554;
			}
			$('.slider').animate({marginLeft: margin}, animationSpeed);
			if ($('.active_dot').hasClass('first_dot')) {
				$('.active_dot').removeClass('active_dot');
				$('.dot:last').addClass('active_dot');
			} else {
				$('.active_dot').prev().addClass('active_dot');
				$('.active_dot:last').removeClass('active_dot');
			}
		});
	}
};
$(document).ready(function(){
	sliderjq.in();
});