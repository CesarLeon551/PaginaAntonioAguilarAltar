const audio = document.getElementById("audio");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

const playlist = [
    "sounds/cancion2.mp3",
    "sounds/cancion3.mp3",
    "sounds/cancion4.mp3"
];

let currentSongIndex = 0;

function playSong(index) {
    const song = playlist[index];
    audio.src = song;
    audio.load();
    audio.play();
}

function playPreviousSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = playlist.length - 1;
    }
    playSong(currentSongIndex);
}

function playNextSong() {
    currentSongIndex++;
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;
    }
    playSong(currentSongIndex);
}

btnPrev.addEventListener("click", playPreviousSong);
btnNext.addEventListener("click", playNextSong);

// Reproducir
