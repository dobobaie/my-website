var resizeElementFixed = function() {
	$('.fixed').each(function(index, value) {
		var width = $(value).parent().css('width');
		var padding = $(value).parent().css('padding');
		width = parseFloat(width.substring(0, width.length - 2));
		padding = parseFloat(padding.substring(0, padding.length - 2));
		$(value).css({'max-width': (width - (padding * 2))});
	});
}

$(document).ready(function() {
	resizeElementFixed();
});

$(window).resize(function() {
	resizeElementFixed();
});
