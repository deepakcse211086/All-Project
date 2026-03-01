function updateClock(){
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    document.getElementById("hour").style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;

    document.getElementById("minute").style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;

    document.getElementById("second").style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;

    document.getElementById("day").innerText =
        now.toLocaleDateString(undefined, { weekday: 'long' });

    document.getElementById("date").innerText =
        now.toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });
}

setInterval(updateClock,1000);
updateClock();