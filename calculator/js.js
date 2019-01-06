function multiply() {
	 	var one = document.querySelector('.one').value;
	 	var two = document.querySelector('.two').value;

	 	one = parseInt(one);
	 	two = parseInt(two);

	 	result = one * two;

	 	document.querySelector('.answer').innerHTML = result;
}

function divide() {
	 	var one = document.querySelector('.one').value;
	 	var two = document.querySelector('.two').value;

	 	one = parseInt(one);
	 	two = parseInt(two);

	 	result = one / two;

	 	document.querySelector('.answer').innerHTML = result;
}

function minus() {
	 	var one = document.querySelector('.one').value;
	 	var two = document.querySelector('.two').value;

	 	one = parseInt(one);
	 	two = parseInt(two);

	 	result = one - two;

	 	document.querySelector('.answer').innerHTML = result;
}

function plus() {
	 	var one = document.querySelector('.one').value;
	 	var two = document.querySelector('.two').value;

	 	one = parseInt(one);
	 	two = parseInt(two);

	 	result = one + two;

	 	document.querySelector('.answer').innerHTML = result;
}
function del() {
	 	var one = document.querySelector('.one').value = '';
	 	var two = document.querySelector('.two').value = '';
 

	 	document.querySelector('.answer').innerHTML = '';
}

 