var stat = function () {
    var data = weather.data;

    /**
     * Get average data from parameter
     * @param instance - array with int data
     * @returns {number}
     */
    function getAverageData(instance) {
        var average = 0;

        for(var i = 0; i < instance.length; i++){
            average += instance[i];
        }
        return average = Math.round(average / instance.length);
    }

    /**
     * Get statistic of one city
     * @param instance - name of city (string)
     * @returns {{cityName: 'string', moisture: int, temperature: int, windDir: int}}
     */
    function getOneCityStat(instance){
        var result = {},
            cityData = {}

        if (!instance){
            return false;
        }

        for (var i = 0; i < data.length; i++){
            if (instance == data[i].cityName){
                cityData = data[i];
                break;
            }
        }

        /**
         * Translate wind direction
         * @param instance - int of wind direction
         * @returns string of wind direction
         */
        function getWindDir(instance){
            switch (instance){
                case 0: return 'Північний';
                case 1: return 'Північно-східний';
                case 2: return 'Східний';
                case 3: return 'Південно-східний';
                case 4: return 'Південний';
                case 5: return 'Південно-західний';
                case 6: return 'Західний';
                case 7: return 'Північно-західний';
            }
        }

        result = {
            cityName: cityData.cityName,
            moisture: getAverageData(cityData.moisture),
            temperature: getAverageData(cityData.temperature),
            windDir: getWindDir(getAverageData(cityData.windDirection))
        };

        return result;
    }

    /**
     * Get statistics of all cities
     * @returns {Array} with objects
     */
    function getAllCities(){
        var result = [];
        for (var i = 0; i < data.length; i++){
            result.push(getOneCityStat(data[i].cityName));
        }
        return result;
    }

    /**
     * Search in data object
     * @param param - name of property (parameter)
     * @param instance - value of property (parameter)
     * @returns {Array} with numbers of days
     */
    function searchParam(param, instance){
        var result = [];
        for(var i = 0; i < data.length; i++){
                if (param == 'moisture'){
                    for (var j = 0; j < data[i].moisture.length; j++){
                        if (instance == data[i].moisture[j]){
                            result.push({
                                 cityName: data[i].cityName,
                                 day: j+1
                            });
                        }
                    }
                } else if (param == 'temperature'){
                    for (var j = 0; j < data[i].temperature.length; j++){
                        if (instance == data[i].temperature[j]){
                            result.push({
                                cityName: data[i].cityName,
                                day: j+1
                            });
                        }
                    }
                } else {
                    for (var j = 0; j < data[i].windDirection.length; j++){
                        if (instance == data[i].windDirection[j]){
                            result.push({
                                cityName: data[i].cityName,
                                day: j+1
                            });
                        }
                    }
                }

        }
        
        return result;
    }

    return {
        city: getOneCityStat,
        allCities: getAllCities(),
        search: searchParam,
    }
}();
