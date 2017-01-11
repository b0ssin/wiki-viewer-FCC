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
				// step 1 set variables
				let arrayOfTitles = data[1];
				let arrayOfDescriptions = data[2];
				let arrayOfLinks = data[3];
				for(let x = 0; x < arrayOfTitles.length; x++) {
					// set temp vars
					let tempTitle = arrayOfTitles[x];
					let tempDescription = arrayOfDescriptions[x];
					let tempLink = arrayOfLinks[x];
					// make a string of the div, h1, p, and a elements
					let tempElements = "<div class='item-wrapper'>\
					<h1><a href=" + "'" + tempLink + "'" +
					">" + tempTitle + "</a></h1>" +
					"<p>" + tempDescription + "</p></div>";
					// append to body
					$("body").append(tempElements);
				};
			},
			error: function(errorMessage) {
				alert(errorMessage);
			}
		});
	};
	// sets click function for search button
	$('#search-button').click(searchFunction);
	// ensures an enter key press doesn't cause a page refresh
	$("#search-bar").keypress(function (e) {
		var key = e.which;
		if(key == 13) { //key code
			$("#search-button").click();
		} 
	})
});