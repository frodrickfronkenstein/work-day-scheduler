// add current Date to jumbotron
$("#currentDay").text(
    moment().format('dddd, MMMM Do')
);

// color timeblocks according to time of day
var currentHour = moment().format("h");

var auditTimeBlock = function() {
    var timeBlockHour = $(".time-block")
    for (var i = 0; i <= timeBlockHour.length-1; i++) {
        console.log(timeBlockHour[i].id.split("-")[1]);
        if (currentHour < timeBlockHour[i].id.split("-")[1]){
            (timeBlockHour).addClass("past");
        } 
    }
};
auditTimeBlock();