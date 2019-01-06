window.onload = function() {
	
	var img = document.querySelectorAll('.slayder img');
	var left = document.querySelector('.left');
	var right = document.querySelector('.right');
	var i = 0;
	
	left.addEventListener('click', function(){
		img[i].classList.remove('active');
		i++
		if(i >= img.length){
			i = 0;
		}
		img[i].classList.add('active');
	});

	right.addEventListener('click', function(){
		img[i].classList.remove('active');
		i--;
		if (i < 0){
			i = img.length - 1;
		}
		img[i].classList.add('active');
	});


	 
	// left.onclick = function (){
	// for(var i = 0; i < img.length; i++;){  
		
	// 	    img[i].classList.remove("active");
	// 	}
	// 	img[i].classList.add("none");
 // 	} 
}