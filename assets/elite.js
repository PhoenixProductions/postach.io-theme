$(document).ready(function() {
	// offsets each .eddate by 1286 (shifting to ED timeframe)
	$('.eddate').each(function() { 
		var d = new Date($(this).html()); 
		d.setFullYear(d.getFullYear() + 1286); 
		$(this).html(d.getFullYear() +"-"+ d.getMonth() +"-"+ d.getDay()  +" "+ d.getHours() +":"+d.getMinutes() + d.getSeconds()
		)
	});
});	