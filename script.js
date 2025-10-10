const songs = [
    { name: "Say you won't let go", image: "say-u-wont-let-go.jpeg", lyrics: "https://www.azlyrics.com/lyrics/jamesarthur/sayyouwontletgo.html" },
    { name: "Numb little bug", image: "numb-little-bug.jpeg", lyrics: "https://genius.com/Em-beihold-numb-little-bug-lyrics" },
    { name: "City of stars", image: "city-of-stars.jpeg", lyrics: "https://genius.com/Ryan-gosling-and-emma-stone-city-of-stars-lyrics" },
    { name: "En chantant", image: "en-chantant.jpeg", lyrics: "https://www.paroles.net/louane/paroles-en-chantant" },
    { name: "Nameless Song", image: "undefined.png" },
    { name: "All of me", image: "all-of-me.jpeg", lyrics: "https://www.azlyrics.com/lyrics/johnlegend/allofme.html" },
    { name: "A thousand years", image: "thousand-years.jpeg", lyrics: "https://www.azlyrics.com/lyrics/christinaperri/athousandyears.html" },
    { name: "Break up with me", image: "break-up-with-me.jpeg", lyrics: "https://genius.com/Jessica-baio-break-up-with-me-lyrics" },
    { name: "Older", image: "older.jpeg", lyrics: "https://genius.com/Sasha-sloan-older-lyrics" },
    { name: "Do it like a girl", image: "do-it-like-a-girl.jpeg", lyrics: "https://genius.com/Morgan-st-jean-do-it-like-a-girl-lyrics" },
    { name: "How far I'll go", image: "how-far-ill-go.jpeg", lyrics: "https://genius.com/Aulii-cravalho-how-far-ill-go-lyrics" },
    { name: "333", image: "undefined.png" },
    { name: "W.I.T.C.H", image: "w-i-t-c-h.jpeg", lyrics: "https://genius.com/Devon-cole-witch-lyrics" },
    { name: "First Burn", image: "first-burn.jpeg", lyrics: "https://genius.com/Lin-manuel-miranda-first-burn-lyrics" },
    { name: "Not All Men", image: "not-all-men.jpeg", lyrics: "https://genius.com/Morgan-st-jean-not-all-men-lyrics"},
    { name: "Perfect", image: "perfect.jpeg", lyrics: "https://www.azlyrics.com/lyrics/edsheeran/perfect.html" },
    { name: "Les Champs-Elysées", image: "les-champs-elysées.jpeg", lyrics: "https://www.paroles.net/joe-dassin/paroles-les-champs-elysees" },
    { name: "Je l'aime à mourir", image: "je-laime-a-mourir.jpeg", lyrics: "https://www.paroles.net/francis-cabrel/paroles-je-l-aime-a-mourir" },
    { name: "Once Upon a Dream", image: "once-upon-a-deam.jpeg", lyrics: "https://genius.com/Lana-del-rey-once-upon-a-dream-lyrics" },
    { name: "Et Bam", image: "et-bam.jpeg", lyrics: "https://www.paroles.net/mentissa-aziza/paroles-et-bam" },
    { name: "Can't help falling in love", image: "cant-help-falling-in-love.jpeg", lyrics: "https://www.azlyrics.com/lyrics/danielpadilla/canthelpfallinginlove.html" },
    { name: "Pointless", image: "pointless.jpeg", lyrics: "https://genius.com/Lewis-capaldi-pointless-lyrics" },
    { name: "Photograph", image: "photograph.jpeg", lyrics: "https://www.azlyrics.com/lyrics/edsheeran/photograph.html" },
    { name: "Iris", image: "iris.jpeg", lyrics: "https://www.azlyrics.com/lyrics/gooeyearth/iris.html" },
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