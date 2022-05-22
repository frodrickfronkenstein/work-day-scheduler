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
    var thisParent = $(this).parent();
    //get text from text area
    var thisText = thisParent.find(".description")
    .val()
    .trim();
    // get parent id
    var thisId = thisParent
        .attr("id");
    // save to local storage
    localStorage.setItem(thisId, thisText);
})

// display local storage data when screen refreshes or loads
window.onload = (event) =>{
    event.preventDefault();
    var timeBlockEl = $(".time-block");
    for(var i = 0; i < timeBlockEl.length; i++) {
        //(".description").val(localStorage.getItem)
        var hour = timeBlockEl[i].id;
        var savedInfo = localStorage.getItem(hour);
        timeBlockEl[i].children[1].textContent = savedInfo;
    }
}

//auditTimeBlock();
auditTimeBlock();
// audits time blocks every minute, because I don't know how to call it every hour on the hour.
setInterval(function() {
    auditTimeBlock();
},1000 * 60);
