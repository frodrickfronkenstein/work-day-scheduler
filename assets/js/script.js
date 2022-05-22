// add current Date to jumbotron
$("#currentDay").text(
    moment().format('dddd, MMMM Do')
);

// color timeblocks according to time of day
var currentHour = moment().format("H");

var auditTimeBlock = function() {
    var timeBlockHour = $(".time-block")
    for (var i = 0; i <= timeBlockHour.length-1; i++) {
        var thisTimeBlock = timeBlockHour;
        var blockTime = timeBlockHour[i].id.split("-")[1];
        if (currentHour < blockTime){
            $(thisTimeBlock[i]).addClass("future");
        } else if (currentHour > blockTime) {
            $(thisTimeBlock[i]).addClass("past");
        } else if (currentHour = blockTime) {
            $(thisTimeBlock[i]).addClass("present");
        }
    }
};

setInterval(function() {
    auditTimeBlock();
},1000 * 60);

auditTimeBlock();