window.onload = function() {
	var displayDateElements = document.getElementsByClassName("displayDate");
	for(var i = 0; i < displayDateElements.length; i++){
		displayDateElements[i].innerHTML = Date();
	}
}
