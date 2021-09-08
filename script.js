setInterval(clock, 1000);
function clock() {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    var ampm = [hour >= 12 ? 'PM' : 'AM'];
    if (hour>12) {hour = hour % 12}

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();

    if (sec < 10) { sec = "0" + sec }
    if (min < 10) { min = "0" + min }
    if (hour < 10) { hour = "0" + hour }
    
    let currentTime = hour + ":" + min + ":" + sec + " " + ampm;
    let currentDate = day + " " + date + "-" + (month + 1) + "-" + year;
    document.getElementById("clk").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;
}

clock();