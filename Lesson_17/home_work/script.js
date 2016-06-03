'use strict';
// Task 1
function showPowNubers(x, y){
		var result = '';
		for (var i = x; i <= y; i++){
			result += i + ' * ' + i + ' = ' + (i * i) + '\n';
		}
		alert(result);
	}
// Task 2
function calculateSum(){
	var n = parseInt(prompt('', 'Enter the number to calculate the sum'));
	var sum = 0;
	for (var i = sum; i <= n; i++){
		sum += i;
	}
	alert('The is ' + sum);
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
	var values = [2.1366, 2.5, 0.3048, 3.7325, 29.86, 0.40951, 0.7112, 4.2657, 25.3995],
		names = ['сажень', 'дюйм', 'фут', 'драхма', 'унция', 'фунт', 'аршин', 'золотник', 'дюйм'],
		ourNames = ['м.', 'cм.', 'м.', 'г.', 'г.', 'кг.', 'м.', 'г.', 'мм.'],
		all = '';
		
	function getFullName(name){
		switch (name){
			case 'м.': return 'метр';
				break;
			case 'cм.': return 'сантиметр';
				break;
			case 'г.': return 'грам';
				break;
			case 'кг.': return 'кілограм';
				break;
			case 'мм.': return 'міліметр';
				break;
		}
	}
	
	for (var i = 0; i < values.length; i++){
		
		all += names[i].toUpperCase() + ' до ' + getFullName(ourNames[i]).toUpperCase() + ': \n';
		
		for (var j = 1; j < 11; j++){
			console.log( j + ' ' + names[i] + ' = ' + j * values[i] + ' ' + ourNames[i] );
			all +=  j + ' ' + names[i] + ' = ' + j * values[i] + ' ' + ourNames[i] + ' \n ';
		}
		
		all += '\n';
	}
	alert(all);
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
	
	for (var i = 1; i < lastNumber ; i++){
		
		if ((i % 2 == 0) || (i % 3 == 0) || (i % 5 == 0)){
			continue;
		} else {
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
	var numberA = parseFloat(prompt('', 'Enter firs number')),
		numberN = parseInt(prompt('', 'Enter second number')),
		result = numberA * (numberA + 1);
		
		for (var i = 2; i < numberN; i++){
			result *= (numberA + i);
		}

		alert(result);
}
//Task 26
function getSinPow(){
	var numberA = parseFloat(prompt('', 'Enter firs number')),
		numberN = parseInt(prompt('', 'Enter second number')),
		result = 0;
	
	for (var i = 1; i < numberN+1; i++){
		var sinus = Math.pow(numberA, i);
		result += Math.sin(sinus);
	}
	alert(result);
}
// Task 27
function getPeterMoney(){
	var money = parseFloat(prompt('', 'Enter Peter`s money')),
		price = parseFloat(prompt('', 'Enter price of ice cream')),
		result = 0;
	while (money > price){
		money -= price;
		result++;
	}
	
	alert('Peter bought ' + result + ' ice creams and the balance of money is ' + money + ' rouble.');
}
// Task 28
function getYearsOfCredit(){
	var money = parseFloat(prompt('', 'Enter credit money')),
		debt = parseFloat(prompt('', 'Enter maximum debt')),
		years = 0;
	
	while (money < debt){
		money *= 1.2;
		years++;
	}
	
	alert('In ' + years + ' years you`ll reach the maximum debt');
}
// Task 29
function getPairsWhile(){
	var numbers = 100,
		pairs = new Array;
	while (numbers){
		if (numbers % 2 === 0){
			pairs.push(numbers);
		}
		numbers--;
	}
	pairs.reverse();
	alert(pairs);
}
// Task 30
function getNotPairWhile(){
	var numbers = 100,
		pairs = new Array;
	while (numbers){
		if (numbers % 2 !== 0){
			pairs.push(numbers);
		}
		numbers--;
	}
	pairs.reverse();
	alert(pairs);
}
// Task 31
function getNotification(){
	var fabric = parseFloat(prompt('', 'Enter the lenght of fabric')),
		count = 0,
		piece = 10;
	while (fabric >= piece){
		
		fabric -= piece;
		count++;
	}
	if (fabric === 0){
		return alert('There is no fabric. You have used ' + count + ' picese (10 meters each).');
	}
	
	alert('You have used ' + count + ' pieces of fabric. It has left ' + fabric + ' meters.');
}
// Task 32
function getLeapYears(){
	var years = [1954, 1900, 240, 246, 1488, 1802],
		leapYears = new Array;
	
	for (var i = 0; i < years.length; i++){
		if (years[i] % 4 === 0) {
			leapYears.push(years[i]);
		}
	}
	alert(leapYears);
}
// Task 33
function getValOfSymb(){
	var text = "This piqued me, so, loading the express with solid ball, I waited till my friend walked some ten yards out from his force, in order to get a better view of our position, accompanied only by an orderly; then, lying down and resting the express on a rock, I covered him. The rifle, like all expresses, was only sighted to three hundred and fifty yards, so to allow for the drop in trajectory I took him half-way down the neck, which ought, I calculated, to find him in the chest. He stood quite still and gave me every opportunity, but whether it was the excitement or the wind, or the fact of the man being a long shot, I don't know, but this was what happened. Getting dead on, as I thought, a fine sight, I pressed, and when the puff of smoke had cleared away, to my disgust, I saw my man standing there unharmed, whilst his orderly, who was at least three paces to the left, was stretched upon the ground apparently dead. Turning swiftly, the officer I had aimed at began to run towards his men in evident alarm.",
		symbol,
		stats = {},
		counter = 0,
		textArray = text.split('');
	
	for (var i = 0; i < textArray.length; i++){
		symbol = textArray[i];
		
		for (var j = 0; j < textArray.length; j++){
			
			if ((symbol == textArray[j]) ){
				counter++;
			}
		}
		
		stats['symbol "' + symbol + '"'] = counter;
		counter = 0;
	}
	
	alert('Please open console');
	console.log(stats);
}
// Task 34
function sortArrays() {
	var arrayOne = ['abra-kadabra', 'cold', 'water', 'McClane'],
		arrayTwo = [1, 1.25, 33., 7],
		arrayThree = ['a', '5', 22.5, 'good', true];
	
	for (var i = 0; i < arrayOne.length; i++){
		
		for(var j = 0; j < arrayOne.length; j++){
			
			if ((arrayOne[i].length < arrayOne[j].length) && (i < j)){
				var z = arrayOne[i];
				arrayOne[i] = arrayOne[j];
				arrayOne[j] = z;
			}
		}
	}
	
	for (var i = 0; i < arrayTwo.length; i++){
		
		for(var j = 0; j < arrayTwo.length; j++){
			
			if ((arrayTwo[i] < arrayTwo[j]) && (i < j)){
				var z = arrayTwo[i];
				arrayTwo[i] = arrayTwo[j];
				arrayTwo[j] = z;
			}
		}
	}
	
	for (var i = 0; i < arrayThree.length; i++ ){
		
		for(var j = 0; j < arrayThree.length; j++){
			
			if (i < j){
				var z = arrayThree[i];
				arrayThree[i] = arrayThree[j];
				arrayThree[j] = z;
			}
		}
	}
		
	alert("After sort: \n" + '\nFirst array\n' + arrayOne + '\n' + '\nSecond array\n' + arrayTwo + '\n' + '\nThird array\n' + arrayThree);
	
}

// Task 35
function addNull(){
	var arrayBase = [-7, 0, 11, 5, -4, -4, 0, 12, -8],
		arrayNew = new Array;
	
	for (var i = 0; i < arrayBase.length; i++){
		arrayNew.push(arrayBase[i]);
		
		if (arrayBase[i] < 0){
			arrayNew.push('Null');
		}
		
	}
	alert(arrayNew);
}
// Task 36
function getFebrVal(){
	var value = 0;
	
	for (var i = 1112; i < 2017; i++){
		if (i % 4 === 0){
			value++;
		}
	}
	alert('Людство проживало 29 лютого ' + value + ' разів');
}
// Task 37
function getColor(){
	var twoYears = 63072000,
		color = 'red';
	
	while (twoYears >= 40){
		switch (color){
			case 'red': color = 'yellow'; 
				break;
			case 'yellow': color = 'green';
				break;
			case 'green': color = 'red';
				break;
		}
		twoYears -= 40;
	}
	alert(color);
}
// Task 38
function getMiddleMark(){
	var marks = prompt('', 'Enter your marks like in example: X, X, ...'), 
		middleMark = 0;
	
	marks = marks.split(', ');
	
	for (var i = 0; i < marks.length; i++){
		
		var mark = parseInt(marks[i]);
		
		middleMark += mark;
	}
	
	middleMark = middleMark / marks.length;
	
	alert('Your middle mark is ' + middleMark);
}
// Task 39
function getRandArrayVal(){
	var arr = new Array,
		plus = 0,
		minus = 0,
		zero = 0;
	
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	for (var i = 0; i < 100; i++){
		arr.push(getRandom(-100, 100));
		
		if (arr[i] > 0){
			plus++;
		} else if (arr[i] < 0){
			minus++;
		} else {
			zero++;
		}
	}

	alert('Додатніх - ' + plus + '\n' + 'Від’ємних - ' + minus + '\n' + 'Нулів - ' + zero);
}
// Task 40
function sortArr(){
	var arr = [1, 0, '0', 33, 'hello', true, false, 'bye', 20., 0.35, 'ZR', 'a'],
		num = new Array,
		str = new Array,
		boo = new Array;
	
	for (var i = 0; i < arr.length; i ++){
		if (typeof(arr[i]) === typeof(11)){
			num.push(arr[i]);
		} else if (typeof(arr[i]) === typeof('string')) {
			str.push(arr[i]);
		} else {
			boo.push(arr[i]);
		}
	}
	alert(num + '\n' + str + '\n' + boo);
}
// Task 41
function getPeople(){
	var result = 0;
	
	for (var i = 1720; i < 2016; i++){
		if (i % 5 == 0){
			result += 16 * 5;
		} else if (i % 3 == 0){
			result += 16 * 4;
		} else if (i % 2 !== 0){
			result += 16 * 3;
		} else {
			result += 16;
		}
	}
	alert('Кількість учасників роду стновить' + result + ' чоловік');
}