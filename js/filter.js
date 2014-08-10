$(document).ready(function() {
	$('nav#filter a').click(function() {
		$(this).css('outline','none');
		$('nav#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		var filterVal = $(this).text().toLowerCase().replace(' ','-');  
		if(filterVal == 'all') {
		$('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
}


else {
	$('ul#portfolio li').each(function() {
		if(!$(this).hasClass(filterVal)) {
			$(this).fadeOut('fast').addClass('hidden');
		} else {
			$(this).fadeIn('slow').removeClass('hidden');
		}
	});
}
	
	return false;
});
	$('nav#filter a').live('click',function() {
		$(this).css('outline','none');
		$('nav#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		var filterVal = $(this).text().toLowerCase().replace(' ','-');  
		if(filterVal == 'all') {
		$('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
}


else {
	$('ul#portfolio li').each(function() {
		if(!$(this).hasClass(filterVal)) {
			$(this).fadeOut('fast').addClass('hidden');
		} else {
			$(this).fadeIn('slow').removeClass('hidden');
		}
	});
}
	
	return false;
});

});