function is_array(instance){
    if (typeof(instance) === typeof([])){
        return true;
    }
    return false;
}

function testArray(){
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

console.log(testArray());