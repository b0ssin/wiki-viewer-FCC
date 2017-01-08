$(document).ready(function() {
	let searchFunction = function() {
		let searchTerms = $("#search-bar").val();
		console.log(searchTerms);
		var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerms + "&format-jsonp&callback=?";
		$.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			success: function(data) {
				console.log(data);
			},
			error: function(errorMessage) {
				alert(errorMessage);
			}
		});
	};
	$('#search-button').click(searchFunction);

	$("#search-bar").keypress(function (e) {
		var key = e.which;
		if(key == 13) { //key code
			$("#search-button").click();
		} 
	})

});