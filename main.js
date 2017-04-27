var sizeDiv = function() {
	function searchSize(){
		var max= $('.org-section_CyberDay').innerHeight();
		// $('.logo').css({"height":"max"});
		$('.logo').height(max);
		console.log('imprimir');
	}

	var myvar =  setInterval(searchSize,100);
	if (window.matchMedia('(max-width:600px)').matches) {
		clearInterval(myvar);
		console.log('responsive');
	}

}

sizeDiv();

