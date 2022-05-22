// add current Date to jumbotron
$("#currentDay").text(
    moment().format('dddd, MMMM Do')
);

// color timeblocks according to time of day
var currentHour = 14;//moment().format("H");

var auditTimeBlock = function() {
    var timeBlockHour = $(".time-block")
    for (var i = 0; i <= timeBlockHour.length-1; i++) {
        var thisTimeBlock = timeBlockHour;
        console.log(thisTimeBlock[i]);
        console.log(currentHour);
        var blockTime = timeBlockHour[i].id.split("-")[1];
        console.log(blockTime);
        if (currentHour < blockTime){
            $(thisTimeBlock[i]).addClass("future");
        } else if (currentHour > blockTime) {
            $(thisTimeBlock[i]).addClass("past");
        } else if (currentHour = blockTime) {
            $(thisTimeBlock[i]).addClass("present");
        }
    }
};
auditTimeBlock();