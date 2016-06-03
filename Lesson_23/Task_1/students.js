/**
 * Module for creating a students groups
 * @type {{students}}
 */

var info = (function () {

	/**
	 * get random @int value from min to max
	 */
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	 * return @array of marks
	 */
	function getMarks() {
		var arr = []
			, random = getRandomInt(10, 15);

		for (var i = 0; i < random; i++) {
			arr.push(getRandomInt(0, 11));
		}

		return arr;
	};

	/**
	 * return @string student first name
	 */
	function getFristName(instanse) {
		var arr = ['Аркадій', 'Артем', 'Борис', 'Валентин', 'Валерій',
			'Віктор', 'Віталій', 'Гаврило', 'Данило', 'Дмитро',
			'Євген', 'Захар', 'Кирило', 'Левко', 'Максим',
			'Михайло', 'Нестор', 'Олег', 'Павло', 'Роман'];
		return arr[instanse];
	}

	/**
	 * return @string student first name
	 */
	function getSecondName(instanse) {
		var arr = ['Абраменко', 'Барна', 'Бабенко', 'Білий', 'Вакарчук', 
			'Вакуленко', 'Воронюк', 'Гаєвський', 'Гинилевич', 'Демешко', 
			'Дорош', 'Ігнатенко', 'Ілюк', 'Карпук', 'Захаренко', 
			'Компанець', 'Костюк', 'Котенко', 'Литвин', 'Кудрик'];
		return arr[instanse];
	}

	/**
	 * returns @array of @objects with 30 students
	 */
	function getStudents() {
		var arr = [];
		for (var i = 0; i < 30; i++) {
			arr.push({
				firstName: getFristName(getRandomInt(0, 19))
				, secondName: getSecondName(getRandomInt(0, 19))
				, groupName: "1" + (i % 3 + 1)
				, html: getMarks()
				, css: getMarks()
				, javaScript: getMarks()
				, php: getMarks()
				, python: getMarks()
			});
		}
		return arr;
	};

	var students = getStudents();

	return {
		students: students
	}
})();