window.onload = function() {
	
	if (document.addEventListener ){
		document.addEventListener("click", function(event){
			var targetElement = event.target
			if (getComputedStyle(targetElement).getPropertyValue("float") == "left") {
				targetElement.style.cssFloat = "right";
			} else if (getComputedStyle(targetElement).getPropertyValue("float") == "right") {
				targetElement.style.cssFloat = "left";
			}
		});
	} 	
	
	/* 
	Rearrange all abacuses right to left and vice versa
	
	var beads = document.querySelectorAll("div.bead");
	for (var i = 0; i < beads.length; i++) {
		if (window.getComputedStyle(beads[i]).getPropertyValue("float") == "left") {
			//alert("Time to left!")
			beads[i].style.cssFloat = "right";
		} else if (window.getComputedStyle(beads[i]).getPropertyValue("float") == "right"){
			beads[i].style.cssFloat = "left";
		}
		
		if (document.addEventListener ){
				document.addEventListener("click", function(event){
				var targetElement = event.target || event.srcElement;
				console.log(targetElement);
				alert(targetElement.textContent);
			});
		} else if (document.attachEvent) {    
			document.attachEvent("onclick", function(){
				var targetElement = event.target || event.srcElement;
				console.log(targetElement);
			});
		}	
		
	}
	*/
}