var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var container = document.querySelectorAll('.container img');

var i = 0;

next.onclick = function(){
	container[i].style.display = 'none'; 
	
	i++;
	if(i == container.length){
		i=0;
	}
	container[i].style.display = 'block'; 
}

prev.onclick = function(){
	container[i].style.display = 'none';
	i--;
	if(i < 0){
		i=container.length-1;
	}
	container[i].style.display = 'block';
}