const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');
const songTitle = document.getElementById('songTitle');

// Hindi songs list
const songs = [
    {name: "Tum Hi Ho - Aashiqui 2", file: "tum_hi_ho.mp3"},
    {name: "Channa Mereya - Ae Dil Hai Mushkil", file: "channa_mereya.mp3"},
    {name: "Kabira - Yeh Jawaani Hai Deewani", file: "kabira.mp3"},
];

let songIndex = 0;

// Load a song
function loadSong(song) {
    songTitle.innerText = song.name;
    audio.src = song.file;
}

// Initial load
loadSong(songs[songIndex]);

// Play/Pause toggle
function playSong() {
    audio.play();
    playBtn.innerText = "⏸️";
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = "▶️";
}

playBtn.addEventListener('click', () => {
    if(audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

// Next song
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

// Previous song
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const {duration, currentTime} = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Seek by clicking progress bar
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});

// Auto next song when current ends
audio.addEventListener('ended', nextSong);