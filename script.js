const songs = [
    { name: "Say you won't let go", image: "images/say-u-wont-let-go.jpeg", lyrics: "https://www.azlyrics.com/lyrics/jamesarthur/sayyouwontletgo.html" },
    { name: "Numb little bug", image: "images/numb-little-bug.jpeg", lyrics: "https://genius.com/Em-beihold-numb-little-bug-lyrics" },
    { name: "City of stars", image: "images/city-of-stars.jpeg", lyrics: "https://genius.com/Ryan-gosling-and-emma-stone-city-of-stars-lyrics" },
    { name: "En chantant", image: "images/en-chantant.jpeg", lyrics: "https://www.paroles.net/louane/paroles-en-chantant" },
    { name: "Nameless Song", image: "images/undefined.png" },
    { name: "All of me", image: "images/all-of-me.jpeg", lyrics: "https://www.azlyrics.com/lyrics/johnlegend/allofme.html" },
    { name: "A thousand years", image: "images/thousand-years.jpeg", lyrics: "https://www.azlyrics.com/lyrics/christinaperri/athousandyears.html" },
    { name: "Break up with me", image: "images/break-up-with-me.jpeg", lyrics: "https://genius.com/Jessica-baio-break-up-with-me-lyrics" },
    { name: "Older", image: "images/older.jpeg", lyrics: "https://genius.com/Sasha-sloan-older-lyrics" },
    { name: "Do it like a girl", image: "images/do-it-like-a-girl.jpeg", lyrics: "https://genius.com/Morgan-st-jean-do-it-like-a-girl-lyrics" },
    { name: "How far I'll go", image: "images/how-far-ill-go.jpeg", lyrics: "https://genius.com/Aulii-cravalho-how-far-ill-go-lyrics" },
    { name: "333", image: "images/undefined.png" },
    { name: "W.I.T.C.H", image: "images/w-i-t-c-h.jpeg", lyrics: "https://genius.com/Devon-cole-witch-lyrics" },
    { name: "First Burn", image: "images/first-burn.jpeg", lyrics: "https://genius.com/Lin-manuel-miranda-first-burn-lyrics" },
    { name: "Not All Men", image: "images/not-all-men.jpeg", lyrics: "https://genius.com/Morgan-st-jean-not-all-men-lyrics"},
    { name: "Perfect", image: "images/perfect.jpeg", lyrics: "https://www.azlyrics.com/lyrics/edsheeran/perfect.html" },
    { name: "Les Champs-Elysées", image: "images/les-champs-elysées.jpeg", lyrics: "https://www.paroles.net/joe-dassin/paroles-les-champs-elysees" },
    { name: "Je l'aime à mourir", image: "images/je-laime-a-mourir.jpeg", lyrics: "https://www.paroles.net/francis-cabrel/paroles-je-l-aime-a-mourir" },
    { name: "Once Upon a Dream", image: "images/once-upon-a-deam.jpeg", lyrics: "https://genius.com/Lana-del-rey-once-upon-a-dream-lyrics" },
    { name: "Et Bam", image: "images/et-bam.jpeg", lyrics: "https://www.paroles.net/mentissa-aziza/paroles-et-bam" },
    { name: "Can't help falling in love", image: "images/cant-help-falling-in-love.jpeg", lyrics: "https://www.azlyrics.com/lyrics/danielpadilla/canthelpfallinginlove.html" },
    { name: "Pointless", image: "images/pointless.jpeg", lyrics: "https://genius.com/Lewis-capaldi-pointless-lyrics" },
    { name: "Photograph", image: "images/photograph.jpeg", lyrics: "https://www.azlyrics.com/lyrics/edsheeran/photograph.html" },
    { name: "Iris", image: "images/iris.jpeg", lyrics: "https://www.azlyrics.com/lyrics/gooeyearth/iris.html" },
];

let currentSong = null;

function getRandomSong() {
    let newSong;
    do {
        newSong = songs[Math.floor(Math.random() * songs.length)];
    } while (newSong === currentSong);
    
    currentSong = newSong;
    return newSong;
}

document.getElementById('chooseButton').addEventListener('click', () => {
    const song = getRandomSong();
    document.getElementById('songLabel').textContent = song.name;
    document.getElementById('songImage').src = song.image;

    document.getElementById('lyricsButton').classList.remove('hidden');
});

document.getElementById('lyricsButton').addEventListener('click', () => {
    if (currentSong && currentSong.lyrics) {
        window.open(currentSong.lyrics, '_blank');
    } else {
        alert('No lyrics available for this song');
    }
});