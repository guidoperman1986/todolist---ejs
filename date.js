//jshint esversion:6

var getDate = function (){

    var today = new Date();    
    var options = {
        weekday:'long',
        day: 'numeric',
        month: 'long'
    };
    
    return today.toLocaleDateString('en-US',options);    
}

module.exports = getDate;
