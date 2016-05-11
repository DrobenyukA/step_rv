'use strict';
function showSqrNubers(x, y){
		for (var i = x; i <= y; i++){
			alert(i * i);
		}
	}

function calculateSum(){
	var n = parseInt(prompt('', 'Enter the number to calculate the sum'));
	var sum = 0;
	for (var i = sum; i <= n; i++){
		sum += i;
	}
	alert(sum);
}

function calculateMult(){
	var n = parseInt(prompt('', 'Enter the number to multiple the sum'));
	var sum = 1;
	for (var i = sum; i <= n; i++){
		sum *= i;
	}
	alert(sum);
}

function calculateNumbers(){
	var number = getNumber(),
		plusVal = 0,
		minusVal = 0,
		zeroVal = 0,
		message;
	
	function getNumber(){
		var n = parseInt(prompt('', 'Enter some number'));
		
		if (n == 0){	
			return true;
		} else if (!isNaN(n)){
			return n;
		}
		
		return false;
	}
	
	while (number){
		
		if (number === true){
			zeroVal++;
		} else if (number < 0){
			minusVal++;
		} else {
			plusVal++;
		}
		
		number = getNumber();
	}
	message = 'More than zero are ' + plusVal + ' values \n' + 'Less than zero are ' + minusVal + ' values \n' + 'Zeroes are ' + zeroVal + ' values';
	alert(message);
}

function transferValue(){
	
}

function getAcountValue(){
	
	var sum = parseInt(prompt('', 'Enter the sum of your money')),
		years = parseInt(prompt('', 'Enter how many years you`d like to keep money on account'));
	
	for (var i = 0; i < years; i++){
		sum *= 1.03;
	}
	sum = Math.round(sum);
	alert(sum);
	
}

function getTheBiggest(){
	var numbers = prompt('', 'Enter ten pairs of numbres like in example: X, X; and then press "OK"'),
		ready = '1, 3; 5, 18; 10, 20; 45, 1; 5, 25; 5, 75; 9, -3; 0, 8; -75, 5; 53, 98;',
		numberArr = numbers.split('; ');
	
	for (var i = 0; i < numberArr.length; i++){
		var result = numberArr[i].split(', ');
		
		if (parseInt(result[0]) > parseInt(result[1])){
			alert('The biggest number is ' + result[0]);
		} else {
			alert('The biggest number is ' + result[1]);
		}
		
	}
	//alert(numberArr[0]);
	//alert(typeof(numberArr));
}