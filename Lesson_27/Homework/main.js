/**
 * Task 1
 * @param instance
 * @returns {boolean}
 */
function is_array(instance){
    if (typeof(instance) === typeof([])){
        return true;
    }
    return false;
}

function test_is_array(){
    var test = [1, 'a', {}, [1, 's']],
        result = [];

    for (var i = 0; i < test.length; i++){
        result.push({
            type: typeof(test[i]),
            result: is_array(test[i])
        });
    }

    return result;
}

/**
 * Task 2
 * @param instance
 * @returns {Array}
 */
function array_Clone(instance) {
    var result =[];

    for(var i = 0; i < instance.length; i++){
        result.push(instance[i]);
    }
    return result;
}


/**
 * Task 3
 * gets the first element of an array
 * @param instance
 * @param value
 * @returns {*}
 */
function first(instance, value){
    var result = [];

    if(!value) return instance[0];

    for(var i = 0; (i < value); i++){

        if(instance[i] == undefined ) break;
        result.push(instance[i]);

    }
    return result;
}
/**
 * Task 4
 * gets the last element of an array
 * @param instance
 * @param value
 * @returns {*}
 */
function last(instance, value) {
    var result = [],
        instance = instance.reverse();

    if(!value) return instance[0];

    for(var i = 0; (i < value); i++){

        if(instance[i] == undefined ) break;
        result.push(instance[i]);

    }
    return result.reverse();
}
/**
 * Task 5
 * joins all elements of the following array into a string
 * @param array
 * @param joiner
 * @returns {*}
 */
function myJoin(array, joiner){
    var result = array[0];
    if (joiner){
        for(var i = 1; i < array.length; i++){
            result += joiner + array[i];
        }
    } else {
        for(var i = 1; i < array.length; i++){
            result += ',' + array[i] ;
        }
    }
    return result;
}
/**
 * Task 6
 * insert dashes between each two even numbers
 * @param number
 * @returns {*}
 */
function getDushed(number){
    var result = '';
    number = number.split('');

    for (var i = 0; i < number.length; i++){
        if (number[i] % 2 === 0){
            result += number[i] + '-';
        } else {
            result += number[i];
        }
    }

    if (result.charAt(result.length - 1) === '-'){
        return result.slice(0, -1);
    }

    return result;
}

