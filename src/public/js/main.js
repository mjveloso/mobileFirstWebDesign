
$(document).ready(function() {

	// Bars
	$('#sidebar-bars').on('click', function() {
		$('.sidebar-content').animate({width : '18%'},500); // increase width of the side bar if clicked
		$('#sidebar-times').css('display','block'); // hide "X" times button
		$('.sidebar-content span').delay(500).fadeIn(); // show the text in sidebar
		$(this).css('display','none'); // hide the side bar
	});

	// Times
	$('#sidebar-times').on('click', function() {
		$('.sidebar-content').animate({width : '5%'});
		$(this).css('display','none');
		$('.sidebar-content span').css('display', 'none');
		$('#sidebar-bars').fadeIn();
	});



});