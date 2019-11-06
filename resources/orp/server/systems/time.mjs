import * as alt from 'alt';

let time = {
    hour: 8
};

// 30 Minutes = 1 Hour
let lastUpdate = Date.now() + 10000;

alt.on('parse:Player', (player, now) => {
    if (now < lastUpdate) return;



    
});

export function setTimeForNewPlayer(player) {
    let day = new Date();
    player.setDateTime(day.getDay(), day.getMonth(), day.getFullYear(), time.hour, 0, 0);
    player.setSyncedMeta('time', time.hour);
}

setInterval(() => {
    if (Date.now() < lastUpdate) return;

    lastUpdate = Date.now() + 1800000;
    time.hour += 1;

    if (time.hour >= 24) {
        time.hour = 0;
    }

    alt.Player.all.forEach(player => {
        setTimeForNewPlayer(player);
    });
}, 60000);
