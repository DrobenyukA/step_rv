var stat = require('./statistics.js');

module.exports = (function() {
	
	var getPage = function (params) {
		return  '<html>' + getPageHead() +
		        '<body>' +
                getSearchByCity() +
                getSearchByParam() +
                getSearchAll() +
		        getMain(params) +
		        '</body></html>';
	};
	
	var getPageHead = function () {
		return '<head><title>Weather</title></head>';
	};
	
	var getSearchByCity = function () {
		return  '<form method="post">' +
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
		return  '<form method="post">' +
                '<h2>За параметром:</h2>' +
                '<select id="property" name="property">' +
                    '<option value="moisture">Вологість</option>' +
                    '<option value="temperature">Температура</option>' +
                    '<option value="windDirection">Напрям вітру</option>' +
                '</select>' +
                '<input name="param_value" type="text" value="Пошук"/>' +
                '<input name="param_submit" type="submit" value="Пошук"/></form>';
	};

    var getSearchAll = function(){
        return  '<form method="post">' +
                '<h2>Уся статистика:</h2>' +
                '<input name="all_stat" type="submit" value="Переглянути"/></form>';
    };

    
	var getMain = function (params) {

		if (!params){

			return '<main>Виберіть пареметр для отримання статистики</main>';

		} else if(params.city){

			return getOneCityStat(params.city);

		} else if(params.property){

			return getPropertyStat(params.property, params.param_value);

		} else if(params.all_stat){

			return getAllStat();

		}

		return '<main><h1>OK</h1></main>'
		

	};

	var getOneCityStat = function(instance){
		var data = stat.city(instance);

		return  '<table><tr><th>Місто</th><th>Вологість</th><th>Температура</th><th>Напрям вітру</th></tr>' +
				'<tr><td>' + data.cityName + '</td>' +
				'<td>' + data.moisture + '</td>' +
				'<td>' + data.temperature + '</td>' +
				'<td>' + data.windDir + '</td></tr></table>';
	};
	
	var getPropertyStat = function(instance, value){
		var data    = stat.search(instance, value),
			result  = '';
		for (var i = 0; i < data.length; i++){
			result += '<tr><td>' + data[i].cityName + '</td><td>' + data[i].day + '</td></tr>';
		}
		
		result += '</table>';
		
		return '<table><tr><th>Місто</th><th>Дата</th></tr>' + result;

	};
	
	var getAllStat = function(){
		var data   = stat.allCities,
			result = '<h2>Загальна статистика</h2>'
				   + '<table><tr><th>Місто</th><th>Вологість</th>'
				   + '<th>Температура</th><th>Нампрям вітру</th></tr>';

		for (var i = 0; i < data.length; i++){
			result += '<tr><td>' + data[i].cityName + '</td>'
					+ '<td>' + data[i].moisture + '</td>'
					+ '<td>' + data[i].temperature + '</td>'
					+ '<td>' + data[i].windDir + '</td></tr>';
		}
		result += '</table>';
		return result;
	};

	
	return {
		getPage: getPage
	};
})();