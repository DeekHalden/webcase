var date = new Date($('#countdown').data('date'));
console.log(date) //Month Days, Year HH:MM:SS
var now = new Date();
var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

var clock = $('#countdown').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
});