var stat = require('./../models/statistics.js');

module.exports = function () {

    var test = function (){
        var testData = stat.city("test"),
            result = {};
        
        if ((testData.cityName == "test") &&
            (testData.moisture == 1) &&
            (testData.temperature == 2) &&
            (testData.windDir == 'Південно-східний')
        ){
            return console.log('Модуль працює нормально.');
        
        } else if (testData.cityName != "test"){

            console.log('Помилка в модулі. getOneCityStat працює не вірно');
        } else if ((testData.moisture != 1) ||
                (testData.temperature != 2)){
            return console.log('Помилка в модулі. getAverageData працює не вірно');
        } else if (testData.windDir != 'Південно-східний'){
            return console.log('Помилка в модулі. getWindDir працює не вірно');
        }
        
    };

     return {
         test: test()
     }

}(stat);

