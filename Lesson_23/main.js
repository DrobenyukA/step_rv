var students = info.students;

/**
 * PRINT FUNCTION
 * print @array with @objects of found students
 */
function searchStudent(){
	var name = $('#student_name').val(),
			result = [];

	for (var i = 0; i < students.length; i++){
		if (name === students[i].firstName){
			result.push(students[i]); 
		}
	}

    $('.info').css('display', 'table');

    for (var j = 0; j < result.length; j++){
        $('.info').append('<div class="section row student-' + j +'"></div>');
        $('.student-' + j).html(
        '<div class="cell info-20 student-' + j +'"> ' +
            result[j].firstName + ' ' + result[j].secondName +
        ' </div>' +
        '<div class="cell info-20">' +
            '<button onclick="showStat(' + "'" + 'student-' + j + "'" + ')">show statistic</button>' +
        '</div>');

    }

}

/** !!! Написати прінтер
 * PRINT FUNCTION
 * print @array with @objects of found group with students
 */
function searchGroup(instanse){
	var name = $('#group_name').val(),
        group = [],
        statistic;

    if (instanse){
        name = instanse;
    }

	for (var i = 0; i < students.length; i++){
		if (name === students[i].groupName){
            group.push(students[i]);
		}
	}
    statistic = getSingleGroupStat(group);
    
    //console.log(statistic);

    if (!instanse){

            $('.info').html('<header><div class="section"><div class="cell info-20">Group</div><div class="cell info-60"> <div class="section"> <div class="section"> <h3>Marks</h3> </div> <div class="section"> <div class="cell info-16">htnl </div> <div class="cell info-16">css </div> <div class="cell info-16">js </div> <div class="cell info-16">php</div> <div class="cell info-16">python </div> <div class="cell info-16 missed">total missed </div> </div> </div> </div> </div> </header> <div class="section row"></div>');
            $('.info .row').append([
                '<div class="cell info-20">'+
                    name +
                '</div>',
                '<div class="cell info-10">' +
                    statistic.html +
                '</div>',
                '<div class="cell info-10">' +
                    statistic.css +
                '</div>',
                '<div class="cell info-10">' +
                    statistic.javaScript +
                '</div>',
                '<div class="cell info-10">' +
                    statistic.php +
                '</div>',
                '<div class="cell info-10">' +
                    statistic.python +
                '</div>',
                '<div class="cell info-10 missed">' +
                    statistic.missingLes +
                '</div>'
            ]);

    }

    return statistic;
}
/**
 * PRINT FUNCTION
 * Print the statistics of all groups
 */
function searchAllGroup() {
    var groupsList = [],
        groupsStat = [];

    for (var i = 0; i < students.length; i++){

        switch (students[i].groupName){
            case groupsList[0]: continue;
                break;
            case groupsList[1]: continue;
                break;
            case groupsList[2]: continue;
                break;
            default: groupsList.push(students[i].groupName);
        }
    }

    for(var j = 0; j < groupsList.length; j++){

        groupsStat.push(searchGroup(groupsList[j]));
    }

    // написати прінтер
    console.log(groupsStat);
    $('.info').html('<header><div class="section"><div class="cell info-20">Group</div><div class="cell info-60"> <div class="section"> <div class="section"> <h3>Marks</h3> </div> <div class="section"> <div class="cell info-16">htnl </div> <div class="cell info-16">css </div> <div class="cell info-16">js </div> <div class="cell info-16">php</div> <div class="cell info-16">python </div> <div class="cell info-16 missed">total missed </div> </div> </div> </div> </div> </header>');
    for (var a = 0; a < groupsStat.length; a++){
        $('.info').append('<div class="section row ' + 'class-' + a +'"></div>')
        $('.info .class-' + a).append([
            '<div class="cell info-20">'+
            groupsList[a] +
            '</div>',
            '<div class="cell info-10">' +
            groupsStat[a].html +
            '</div>',
            '<div class="cell info-10">' +
            groupsStat[a].css +
            '</div>',
            '<div class="cell info-10">' +
            groupsStat[a].javaScript +
            '</div>',
            '<div class="cell info-10">' +
            groupsStat[a].php +
            '</div>',
            '<div class="cell info-10">' +
            groupsStat[a].python +
            '</div>',
            '<div class="cell info-10 missed">' +
            groupsStat[a].missingLes +
            '</div>'
        ]);
    }
}

/**
 * print the statistics of one student
 */

function showStat(instance){
	var student = $('.' + instance).html().split(' '),
         result = [];

    for (var i = 0; i < students.length; i++){
        if ((student[4] ===  students[i].firstName) && (student[5] === students[i].secondName)){
            result.push(getStatistic(students[i]));
            result.push(students[i].firstName);
            result.push(students[i].secondName);
            result.push(students[i].groupName);
        }
    }
    console.log(result);

    $('.' + instance).html(
        '<div class="cell info-20"> ' +
            result[1] + ' ' + result[2] +
        ' </div>' +
        '<div class="cell info-20">'+
            result[3] +
        '</div>'+
        '<div class="cell info-10">' +
            result[0].html[0] +
            '<span class="missed">' + result[0].html[1] + '</span>' +
        '</div>'+
        '<div class="cell info-10">' +
            result[0].css[0] +
        '<span class="missed">' + result[0].css[1] + '</span>' +
        '</div>'+
        '<div class="cell info-10">' +
            result[0].javaScript[0] +
        '<span class="missed">' + result[0].javaScript[1] + '</span>' +
        '</div>'+
        '<div class="cell info-10">' +
            result[0].php[0] +
        '<span class="missed">' + result[0].php[1] + '</span>' +
        '</div>'+
        '<div class="cell info-10">' +
            result[0].python[0] +
        '<span class="missed">' + result[0].python[1] + '</span>' +
        '</div>'+
        '<div class="cell info-10 missed">' + (
            parseInt(result[0].html[1]) +
            parseInt(result[0].css[1]) +
            parseInt(result[0].javaScript[1]) +
            parseInt(result[0].php[1]) +
            parseInt(result[0].python[1]) ) +
        '</div>');
}


/**
 * Statistic calculator
 *
 * @param param object(student) for calculating statistic
 *
 * @returns {{html: *, css: *, javaScript: *, php: *, python: *}}
 */
function getStatistic(param){
    var html       = getAverage(param.html),
        css        = getAverage(param.css),
        javaScript = getAverage(param.javaScript),
        php        = getAverage(param.php),
        python     = getAverage(param.python);

    /**
     * return array with two values
     * first  - average mark from subject;
     * second - missing lessons;
     * @param instance
     */
    function getAverage(instance){
        var result  = [],
            avMark  = 0,
            counter = 0,
            nLess   = 0;

        for (var i = 0; i < instance.length; i++){
            if(instance[i] > 0){
                avMark += instance[i];
                counter++;
            } else {
                nLess++;
            }

        }
        result.push(Math.round((avMark / counter), -1));
        result.push(nLess);

        return result;
    }

    return{
        html: html,
        css: css,
        javaScript: javaScript,
        php: php,
        python: python
    }
}

/**
 * get statistic of one group
 * @param instance
 */
function getSingleGroupStat(instance){
    var   group = instance;
        sGrStat = [],
         result = {
            html: 0,
            css: 0,
            javaScript: 0,
            php: 0,
            python: 0,
            missingLes: 0
        };

    for (var i = 0; i < group.length; i++){
        sGrStat.push(getStatistic(group[i]));
    }
    for (var j = 0; j < sGrStat.length; j++){
        result.html += sGrStat[j].html[0];
        result.missingLes += sGrStat[j].html[1];
        result.css += sGrStat[j].css[0];
        result.missingLes += sGrStat[j].css[1];
        result.javaScript += sGrStat[j].javaScript[0];
        result.missingLes += sGrStat[j].javaScript[1];
        result.php += sGrStat[j].php[0];
        result.missingLes += sGrStat[j].php[1];
        result.python += sGrStat[j].python[0];
        result.missingLes += sGrStat[j].python[1];
    }

    // Calculating average mark from all group in everu subject
    result.html = Math.round(result.html / sGrStat.length);
    result.css = Math.round(result.css / sGrStat.length);
    result.javaScript = Math.round(result.javaScript / sGrStat.length);
    result.php = Math.round(result.php / sGrStat.length);
    result.python = Math.round(result.python / sGrStat.length);

    return result;
};