jQuery.noConflict();
jQuery(document).ready(function($){
 	// Clone applications to get a second collection
	var $data = $(".portfolio-content").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.sort li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all-projects') {
			var $filteredData = $data.find('.project');
		} else {
			var $filteredData = $data.find('.project[data-type=' + filterClass + ']');
		}
		$(".portfolio").quicksand($filteredData, {
			duration: 800,
			easing: 'swing',
		});		
		$(this).addClass("active"); 			
		return false;
	});
});