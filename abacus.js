window.onload = function() {
	var beads = document.querySelectorAll("div.bead");
	for (var i = 0; i < beads.length; i++) {
		if (window.getComputedStyle(beads[i]).getPropertyValue("float") == "left") {
			beads[i].style.cssFloat = "right";
		} else if (window.getComputedStyle(beads[i]).getPropertyValue("float") == "right"){
			beads[i].style.cssFloat = "left";
		}
		
	}
}