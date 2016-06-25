

function changeInput(){
    var param = $('#property').val();

    if (param == 'windDirection'){
        $("#value").replaceWith('<select id="value" name="param_value">' +
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
        $("#value").replaceWith('<input id="value" type="text" name="param_value">');
    }

}