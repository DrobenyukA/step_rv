var array = [1,2,5,9,4],
    /** переборщик масивів**/
    newList = _.filter(array, function (element) {
        return element < 5;
    });

function makeFilter(list, checker) {
    var result = [];

    for(var i = 0; i < list.length; i++){
        if (checker(list[i])){
            return result.push(list[i]);
        }
    }
    return result;
}

var another = makeFilter(array, function (element){
    return element > 5;
});

console.log(newList);
console.log(another);

