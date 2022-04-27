setInterval (function () {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = 'AM';
    let day = currentTime.getDate();
    console.log('day', day, currentTime)
    let month = currentTime.getMonth()+1;
    console.log(month)
    let year = currentTime.getFullYear();
    let timeZone = 'WAT';

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
    

    let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + period;
    let clockDate = day + '/' + month + '/' + year + ' (' + timeZone + ')';

    let clock = document.getElementById('clock');
    clock.innerText = clockTime;
    let date = document.getElementById('date');
    date.innerText = clockDate;
}, 1000);