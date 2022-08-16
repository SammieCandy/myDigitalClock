setInterval (function () {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = 'AM';

    if (hours >= 12) {
        period = 'PM';
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = minutes + 10;
    }
    if (seconds < 10) {
        seconds = seconds + 10;
    }

    var day = currentTime.getDate();
    console.log('day', day, currentTime)
    var month = currentTime.getMonth()+1;
    console.log(month)
    var year = currentTime.getFullYear();
    let timeZone = 'WAT';
    var date = document.getElementById('date');
    var clock = document.getElementById('clock');

    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + period;
    var clockDate = day + '/' + month + '/' + year + ' (' + timeZone + ')';

    clock.innerText = clockTime;
    date.innerText = clockDate;

    var weekday = new Array(7)
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
    var date2 = new Date();
    var weekday2 = new Array(7);
        weekday2[0] = "Code day!";
        weekday2[1] = "Get off to work!";
        weekday2[2] = "Keeeep up!";
        weekday2[3] = "Mid-week, Put yourself together!";
        weekday2[4] = "Weekend is almost here!";
        weekday2[5] = "TGIF";
        weekday2[6] = "Chill out";
    
    var n = weekday[currentTime.getDay()];
    var n2 = weekday2[date2.getDay()];
    
    var displayWeekday = document.getElementById('weekday');
    var phrase = document.getElementById('phrase');
        displayWeekday.innerText = n;
        phrase.innerText = n2;

}, 1000);

// var d = new Date();
// var weekday = new Array(7)
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";

// var date2 = new Date();
// var weekday2 = new Array(7);
//     weekday2[0] = "Code day!";
//     weekday2[1] = "Get off to work!";
//     weekday2[2] = "Keeeep up!";
//     weekday2[3] = "Mid-week, Pull yourself together!";
//     weekday2[4] = "Weekend is almost here!";
//     weekday2[5] = "TGIF";
//     weekday2[6] = "Chill out";

// var n = weekday[d.getDay()];
// var n2 = weekday2[date2.getDay()];

// var displayWeekday = document.getElementById('weekday');
// var phrase = document.getElementById('phrase');

// whatDayIsIt();

// function whatDayIsIt() {
//     displayWeekday.innerText = n;
//     phrase.innerText = n2;
// }

