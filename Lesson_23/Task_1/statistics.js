var statistic = (function(){

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
         * return object with arrays which has two values
         * first  - average mark from subject;
         * second - total missed lessons;
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

        // Calculating average mark from all group in every subject
        result.html = Math.round(result.html / sGrStat.length);
        result.css = Math.round(result.css / sGrStat.length);
        result.javaScript = Math.round(result.javaScript / sGrStat.length);
        result.php = Math.round(result.php / sGrStat.length);
        result.python = Math.round(result.python / sGrStat.length);

        return result;
    }
})();