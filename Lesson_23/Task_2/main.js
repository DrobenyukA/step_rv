/** Button functions **/

function searchByCity() {
    var request = $('#city').val(),
        result = stat.city(request);

    if (!result){
        $('.info').html('<div class="search-form response"><h3>Оберіть місто!</h3></div>');
        return
    }

    $('.info').html('<div class="search-form response">' +
        '<h2>Місто: <span>' + result.cityName + '</span></h2>' +
        '<div class="answer moisture">Середня вологість: <span>' + result.moisture + '</span> %;</div>' +
        '<div class="answer temperature">Середня температура: <span>'+ result.temperature + '</span> &deg; C</div>' +
        '<div class="answer wind">Переважний напрям вітру: <span>' + result.windDir + '</span> </div></div>');

}

function searchByParam() {
    var param = $('#property').val(),
        value = $('#value').val(),
        result;

    if (param === 'windDirection'){
        switch (value){
            case 'Північний': value = 0;
                break;
            case 'Північно-східний': value = 1;
                break;
            case 'Східний': value = 2;
                break;
            case 'Південно-східний': value = 3;
                break;
            case 'Південний': value = 4;
                break;
            case 'Південно-західний': value = 5;
                break;
            case 'Західний': value = 6;
                break;
            case 'Північно-західний': value = 7;
                break;
        }
    }

    result = stat.search(param, value);
    $('.info').html('');
    for(var i = 0; i < result.length; i++){
        $('.info').append('<div class="search-form response"></div>');
        $('.response:last-child').html('<h2>Місто: <span>' + result[i].cityName + '</span></h2>' +
            '<div class="answer">Було зафіксовано: <span>' + result[i].day + ' травня 2016 року</span></div>');
    }
}

function searchAll(){
    var result = stat.allCities;

    $('.info').html('');

    for(var i = 0; i < result.length; i++){
        $('.info').append('<div class="search-form response"></div>');
        $('.response:last-child').html('<h2>Місто: <span>' + result[i].cityName + '</span></h2>' +
            '<div class="answer moisture">Середня вологість: <span>' + result[i].moisture + '</span> %;</div>' +
            '<div class="answer temperature">Середня температура: <span>'+ result[i].temperature + '</span> &deg; C</div>' +
            '<div class="answer wind">Переважний напрям вітру: <span>' + result[i].windDir + '</span> </div>');
    }
}

function changeInput(){
    var param = $('#property').val();

    if (param == 'windDirection'){
        $("#value").replaceWith('<select id="value">' +
            '<option value="0">Північний</option>' +
            '<option value="1">Північно-східний</option>' +
            '<option value="2">Східний</option>' +
            '<option value="3">Південно-східний</option>' +
            '<option value="4">Південний</option>' +
            '<option value="5">Південно-західний</option>' +
            '<option value="6">Західний</option>' +
            '<option value="7">Північно-західний</option>' +
            '</select>');
    } else {
        $("#value").replaceWith('<input id="value" type="text">');
    }

}