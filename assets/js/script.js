// add current Date to jumbotron
$("#currentDay").text(
    moment().format('dddd, MMMM Do')
);

// gets current hour
var currentHour = moment().format("H");
// color timeblocks according to time of day
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

// save text field to local storage
$(".saveBtn").on("click", function(){
    console.log("clicked");
    //get text from text area
    var thisParent = $(this).parent();
    console.log(thisParent);
    var txt = thisParent.find(".description").val();
    console.log(txt);

})

// audits time blocks every minute, because I don't know how to call it every hour on the hour.
setInterval(function() {
    auditTimeBlock();
},1000 * 60);

auditTimeBlock();