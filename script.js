// Mendapatkan elemen audio dan tombol kontrol
const audio = document.getElementById('background-audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

// Pesan selamat datang saat halaman di-refresh
window.onload = function () {
    alert("SELAMAT DATANG DI RAKASYAINZ MEDIA");
};

// Play audio setelah tombol diklik
playBtn.addEventListener('click', () => {
    audio.play().then(() => {
        console.log("Audio is playing");
    }).catch((error) => {
        console.error("Error playing audio:", error);
        alert("Audio tidak dapat diputar. Pastikan interaksi pengguna terjadi.");
    });
});

// Pause audio
pauseBtn.addEventListener('click', () => {
    audio.pause();
    console.log("Audio is paused");
});

// Mengatur volume audio (opsional, maksimal)
audio.volume = 1;
