/*<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>*/

var showFull = function(itemIndex) {
	var modal = document.getElementByID('modalFor' + itemIndex); 
	var img = document.getElementByID('item' + itemIndex);

	img.onclick = function() {
		modal.style.display = "block";
		modalImg.src = this.src;
	}

	var span = document.getElementByClassName("close")[0];

	span.onclick = function() {
		modal.style.display = "none"; 
	}

};