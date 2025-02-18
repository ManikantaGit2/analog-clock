// script.js
function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12; // Convert 24-hour format to 12-hour format
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour * 41) + (minute * 0.2); // 30° per hour, 0.5° per minute
    const minuteDeg = (minute * 10); // 6° per minute
    const secondDeg = (second * 6); // 6° per second

    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Call initially to avoid delay