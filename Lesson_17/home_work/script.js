'use strict';
// Task 1
function showPowNubers(x, y){
		for (var i = x; i <= y; i++){
			alert(i * i);
		}
	}
// Task 2
function calculateSum(){
	var n = parseInt(prompt('', 'Enter the number to calculate the sum'));
	var sum = 0;
	for (var i = sum; i <= n; i++){
		sum += i;
	}
	alert(sum);
}
// Task 3
function calculateMult(){
	var n = parseInt(prompt('', 'Enter the number to multiple the sum'));
	var sum = 1;
	for (var i = sum; i <= n; i++){
		sum *= i;
	}
	alert(sum);
}
// Task 4
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
// Task 5
function transferValue(){
	
}
// Task 6
function getAcountValue(){
	
	var sum = parseInt(prompt('', 'Enter the sum of your money')),
		years = parseInt(prompt('', 'Enter how many years you`d like to keep money on account'));
	
	for (var i = 0; i < years; i++){
		sum *= 1.03;
	}
	sum = Math.round(sum);
	alert(sum);
	
}
// Task 7
function getTheBiggest(){
	
	var numbers = prompt('', 'Enter ten pairs of numbres like in example: X, X; and then press "OK"'),
		numberArr = numbers.split('; ');
	
	for (var i = 0; i < numberArr.length; i++){
		var result = numberArr[i].split(', ');
		
		if (parseInt(result[0]) > parseInt(result[1])){
			alert('The biggest number is ' + result[0]);
		} else {
			alert('The biggest number is ' + result[1]);
		}
		
	}
	
}
// Task 8
function showDividedOn(){
	var number = new Array;
	
	for (var i = 20; i < 51; i++){
		if ((i % 3 === 0) && (i % 5 !== 0)){
			number.push(' ' + i);
		}
		
	}
	
	alert(number);
}
// Task 9
function showDividedOnSeven(){
	var number = new Array;
	
	for (var i = 35; i < 88; i++){
		if ((i % 7 === 1) || (i % 7 === 2) || (i % 7 === 5)){
			number.push(' ' + i);
		}
		
	}
	
	alert(number);
}
// Task 10
function showSumDividedOn(){
	var result = 0;
	
	for (var i = 1; i < 51; i++){
		if ((i % 5 === 0) || (i % 7 === 0)){
			result += i;
		}
		
	}
	
	alert(result);
}
// Task 11
function printNumbers(){
	var number = new Array;
	
	for (var i = 10; i < 100; i++){
		if ((i % 4 === 0) && (i % 6 !== 0)){
			number.push(' ' + i);
		}
		
	}
	
	alert(number);
}
// Task 12
function getMultipleOf(){
	var number = new Array,
		result = 0;
	
	for (var i = 10; i < 100; i++){
		if ((i % 13 === 0)){
			result = i * i;
			number.push(' ' + result);
		}
	}
	alert(number);
}
// Task 13
function getSumOf(){
	var result = 0;
	
	for (var i = 100; i < 201; i++){
		if (i % 17 === 0){
			result += i;
		}
		
	}
	
	alert(result);
}
// Task 14
function getSumOfPow(){
	var lastNumber = parseInt(prompt('', 'Enter the last number of set')),
		result = 0;
	
	for (var i = 1; i < lastNumber; i++){
		result += i * i;
	}
	
	alert(result);
}
// Task 15
function getPowOfValues(){
	var a = parseFloat(prompt('', "Enter value for A")),
		b = parseFloat(prompt('', "Enter value for B"));
	
	if ((a % parseInt(a) > 0) && (b < 0)){
		alert('b не может быть отрицательным');
		return getPowOfValues();
	}
	
	alert(Math.pow(a, b));
	
}
// Task 16
function getTimeOfWork(){
	var machines = parseInt(prompt('', 'Enter the quantity of mowing machines')),
		firsMachineTime = parseFloat(prompt('', "Enter how many hours worked first machine")),
		result = 0;
	
	for (var i = 0; i < machines; i++){
		result += firsMachineTime * (1 + 10 / 60);
	}
	result = Math.floor(result) + ' годин ' + Math.floor(result % Math.floor(result) * 60) + ' хвилин';
	
	alert(result);
}
//Task 17
function getMiddleHeight(){
	var height = getHeight(),
		counter = 0,
		middleHeight = Math.floor(middleHeight / counter);
	
	function getHeight(){
		var h = parseInt(prompt('', 'Enter the height of student in centimeters'));
		return h;
	}
	
	while (height){
		counter++;
		middleHeight += height;
		height = getHeight();
	}
	
	alert('The middle height is ' + 'centimeters');
}
// Task 18
function getAmountOfNumbers(){
	var lastNumber = parseInt(prompt('', 'Enter the number')),
		numbers = new Array;
	
	for (var i = 0; i < lastNumber ; i++){
		
		if ((i % 2 > 1) || (i % 3 > 1) || (i % 5 > 1)){
			numbers.push(i);
		}
	}
	
	alert(numbers);
}
// Task 19
function getTwoNumbers(){
	var firsNumber = 10, 
		secondNumber = 10,
		fourCharNumber,
		result;
	
	outer: for (var i = 10; i < 99; i++) {
		
		for (var j = 10; j < 99; j++){

			fourCharNumber = parseInt('' + firsNumber + '' + secondNumber);

			result = fourCharNumber % (firsNumber * secondNumber);
				
			if (result == 0){
				break outer;
			} 
			secondNumber++;
			if (secondNumber == 99){
				secondNumber = 10;
			}
		}
		firsNumber++;	
	}
	
	alert(firsNumber + ' ' + secondNumber);
	
}
// Task 20
function getTwoAnotherNumbers(){
	var firsNumber = 10, 
		secondNumber = 10,
		fourCharNumberOne,
		fourCharNumberTwo,
		resultOne,
		resultTwo;
		
	outer: for (var i = 10; i < 99; i++) {
		
		for (var j = 10; j < 99; j++){

			fourCharNumberOne = parseInt('' + firsNumber + '' + secondNumber);
			fourCharNumberTwo = parseInt('' + secondNumber + '' + firsNumber);
				
			resultOne = fourCharNumberOne % 99;
			resultTwo = fourCharNumberTwo % 49;
				
			if ((resultOne == 0) && (resultTwo == 0)){
				break outer;
			} 
			secondNumber++;
			if (secondNumber == 99){
				secondNumber = 10;
			}
		}
		firsNumber++;	
	}
	
	alert(firsNumber + ' ' + secondNumber);
}
// Task 21
function getSumTwentyOne(){
	var number = parseInt(prompt('', 'Enter some natural number')),
		result = 0;
	
	for (var i = 1; i < number + 1; i++){
		result += 1 / ( 2 * Math.pow(i, 2));
	}
	
	alert(result);
}
//Task 22
function getSumTwentyTwo(){
	var number = parseInt(prompt('', 'Enter some natural number')),
		result = 0;
	
	for (var i = 1; i < number + 1; i++){
		result += 1 / i;
	}
	
	alert(result);
}
//Task 23
function getPowTen(){
	var number = parseInt(prompt('', 'Enter the pow value')),
		result = 0;
	
	for (var i = 0; i < number + 1; i++){
		result += Math.pow(2, i);
	}
	
	alert(result);
}
//Task 24
function getMultipleOfNumbers(){
	var result = 1,
		multiple = 1;
	
	for (var i = 2; i < 11; i++){
		result += i;
		multiple *= result;
	}
	
	alert(multiple);
}
// Task 25
function getMultipleOfExpr(){
	
}