function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Panggil fungsi updateClock setiap detik (1000ms)
setInterval(updateClock, 1000);

// Panggil updateClock untuk pertama kali agar jam tampil segera
updateClock();


//contact.html

// Fungsi yang akan dijalankan saat tombol Instagram ditekan
        document.getElementById('instagramButton').onclick = function () {
            window.location.href = 'https://www.instagram.com/reinthartb';
        };

        // Fungsi yang akan dijalankan saat tombol GitHub ditekan
        document.getElementById('githubButton').onclick = function () {
            window.location.href = 'https://github.com/ReintB';
        };

        // Fungsi yang akan dijalankan saat tombol Discord ditekan
        document.getElementById('discordButton').onclick = function () {
            window.location.href = 'https://discord.com/invite/k8stjcuz';
        };

        // Fungsi yang akan dijalankan saat tombol Spotify ditekan
        document.getElementById('spotifyButton').onclick = function () {
            window.location.href = 'https://www.spotify.link/wxffBcemcEb';
        };

        // Fungsi yang akan dijalankan saat tombol YouTube ditekan
        document.getElementById('youtubeButton').onclick = function () {
            window.location.href = 'https://www.youtube.com/@reintbarus?si=_pcTh4Xgpelqcd3m';
        };