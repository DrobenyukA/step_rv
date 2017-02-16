var stat = require('./../models/statistics.js');

module.exports = (function() {
	
	var getPage = function (params) {
		return  '<html>' +
				getPageHead() +
		        '<body>' +
				getPageHeader() +
                getSearchByCity() +
                getSearchByParam() +
                getSearchAll() +
		        getMain(params) +
				getPageFooter() +
				'</body>' +
				'</html>';
	};
	
	var getPageHead = function () {
		return  '<head>' +
					'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">' +
					'<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
					'<meta name="application-name" content="Weather Statistic">' +
					'<meta name="description" content="Модуль виведення статистики погоди">' +
					'<meta name="keywords" content="Weather, Погода">' +
					'<meta name="author" content="Drobenyuk.A">' +
					'<meta name="viewport" content="width=device-width">' +
			   		'<title>Weather</title>' +
					'<link rel="stylesheet" type="text/css" href="css/style.css"/>' +
					'<link rel="stylesheet" type="text/css" href="css/media.css"/>' +
				'</head>';
	};

	var getPageHeader = function(){
		var result = '<div class="search">'
					+'<h1>Модуль виведення статистики погоди</h1>';

		return result;
	};

	var getPageFooter = function(){
		var jQuery = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js';

		var result = '</div>'
					+'<script src="' + jQuery + '"></script>'
					+'<script src="js/main.js"></script>';

		return result;

	};


	var getSearchByCity = function () {
		return  '<form method="post" class="search-form by-city">' +
                '<h2>За містом:</h2>' +
                '<select id="city" name="city">' +
                    '<option value="Рівне">Рівне</option>' +
                    '<option value="Київ">Київ</option>' +
                    '<option value="Львів">Львів</option>' +
                    '<option value="Дніпро">Дніпро</option>' +
                '</select>' +
                '<input name="city_submit" type="submit" value="Пошук"/></form>';
	};
	
	var getSearchByParam = function () {
		return  '<form method="post" class="search-form by-all">' +
                '<h2>За параметром:</h2>' +
                '<select id="property" name="property" onchange="changeInput()">' +
                    '<option value="moisture">Вологість</option>' +
                    '<option value="temperature">Температура</option>' +
                    '<option value="windDirection">Напрям вітру</option>' +
                '</select>' +
                '<input id="value" name="param_value" type="text" placeholder="Пошук"/>' +
                '<input name="param_submit" type="submit" value="Пошук"/></form>';
	};

    var getSearchAll = function(){
        return  '<form method="post" class="search-form">' +
                '<h2>Уся статистика:</h2>' +
                '<input name="all_stat" type="submit" value="Переглянути"/></form>';
    };

    
	var getMain = function (params) {
		var warning = '<div class="info">'
						+'<div class="search-form response">'
							+'<h3>Виберіть пареметр для отримання статистики</h3>'
						+'</div>'
					 +'</div>';
		if (!params){

			return warning;

		} else if(params.city){

			return getOneCityStat(params.city);

		} else if(params.property){

			return getPropertyStat(params.property, params.param_value);

		} else if(params.all_stat){

			return getAllStat();

		}

	};

	var getOneCityStat = function(instance){
		var data   = stat.city(instance),
			result = '<div class="info">'
					+'<div class="search-form response">';

		result += '<table><tr><th>Місто</th><th>Вологість</th><th>Температура</th><th>Напрям вітру</th></tr>' +
					'<tr><td>' + data.cityName + '</td>' +
					'<td>' + data.moisture + ' %</td>' +
					'<td>' + data.temperature + '&deg; С</td>' +
					'<td>' + data.windDir + '</td></tr></table>' +
					'</div>' +
					'</div>';
		return result;
	};
	
	var getPropertyStat = function(instance, value){
		var data    = stat.search(instance, value),
			result = '<div class="info">'
						+'<div class="search-form response">'
							+'<table><tr><th>Місто</th><th>Дата</th></tr>';

		for (var i = 0; i < data.length; i++){
			result += '<tr><td>' + data[i].cityName + '</td><td>' + data[i].day + ' травня</td></tr>';
		}
		
		result += '</table></div></div>';
		
		return result;

	};
	
	var getAllStat = function(){
		var data   = stat.allCities,
			result = '<div class="info">'
				   + '<div class="search-form response">'
				   + '<h2>Загальна статистика</h2>'
				   + '<table><tr><th>Місто</th><th>Вологість</th><th>Температура</th><th>Нампрям вітру</th></tr>';

		for (var i = 0; i < data.length; i++){
			result += '<tr><td>' + data[i].cityName + '</td>'
					+ '<td>' + data[i].moisture + '</td>'
					+ '<td>' + data[i].temperature + '</td>'
					+ '<td>' + data[i].windDir + '</td></tr>';
		}

		result += '</table></div></div>';
		return result;
	};

	
	return {
		getPage: getPage
	};
})();