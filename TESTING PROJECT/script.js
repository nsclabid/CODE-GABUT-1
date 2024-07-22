document.addEventListener("DOMContentLoaded", function() {
    const lyrics = [
        { id: 'line1', delay: 1370 },
        { id: 'line2', delay: 3450 },
        { id: 'line3', delay: 4980 },
        { id: 'line4', delay: 5580 },
        { id: 'line5', delay: 3260 },  // No delay needed for the last line transition
    ];

    let totalTime = 0;

    lyrics.forEach((line, index) => {
        setTimeout(() => {
            document.getElementById(line.id).style.opacity = 1;
        }, totalTime);

        totalTime += line.delay;
    });

    setTimeout(() => {
        document.getElementById('line6').style.opacity = 1;
    }, totalTime);

    totalTime += 2000;  // 2 seconds delay before the heart animation

    setTimeout(() => {
        document.getElementById('heart').classList.remove('hidden');
        document.getElementById('heart').style.opacity = 1;
    }, totalTime);
});
