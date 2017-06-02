var resizeElementFixed = function() {
	$('.fixed').each(function(index, value) {
		var rect = value.getBoundingClientRect();
		var width = $(value).parent().css('width');
		var padding = $(value).parent().css('padding');
		width = (width.length > 3 ? parseFloat(width.substring(0, width.length - 2)) : 0);
		padding = (padding.length > 3 ? parseFloat(padding.substring(0, padding.length - 2)) : 15);
		if ($(window).height() >= rect.top + $(value).outerHeight()) {
			$(value).css({'position': 'fixed', 'maxWidth': (width - (padding * 2))});
			return ;
		}
		$(value).css({'position': 'relative', 'maxWidth': (width - (padding * 2))});
	});
}

$(document).ready(function() {
	resizeElementFixed();
});

$(window).resize(function() {
	resizeElementFixed();
});
