/**
 * Module for simulating received data from DB
 * @type {{data}}
 */
module.exports = function () {
    var data = _construct();
    /**
     * Construct random weather data
     * @returns {Array}
     * @private
     */
    function _construct(){
        var data =[{
                 cityName: "test",
                 moisture: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              temperature: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            windDirection: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
        }];

        for(var i = 0; i < 4; i++){
            data.push({
                     cityName: getCityName(i),
                     moisture: setRandomParams(40, 60),
                  temperature: setRandomParams(16, 20),
                windDirection: setRandomParams(0, 7)
            });
        }
        return data;
    }
    /**
     * Function to get random int number from min to max included
     * @param min
     * @param max
     * @returns {int}
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Makes random values of moisture, temperature and
     * wind direction
     * @param min
     * @param max
     * @returns {Array}
     */
    function setRandomParams(min, max){
        var result = [];
        for (var i = 0; i < 30; i++){
            result.push(getRandomInt(min, max));
        }
        return result;
    }

    /**
     * Gets the name of a city
     * @param instance
     * @returns {string}
     */
    function getCityName(instance) {
        var cities =['Рівне', 'Київ', 'Львів', 'Дніпро'];
        return cities[instance];
    }

    return {
        data: data
    }
}();
