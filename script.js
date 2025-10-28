let currentSong = null;
let appmod = 'all';

const songs = [
    { name: "Say you won't let go", image: "images/say-u-wont-let-go.jpeg", lyrics: "https://www.azlyrics.com/lyrics/jamesarthur/sayyouwontletgo.html", Tsuya: true, Bee: true },
    { name: "Numb little bug", image: "images/numb-little-bug.jpeg", lyrics: "https://genius.com/Em-beihold-numb-little-bug-lyrics", Tsuya: true, Bee: true },
    { name: "City of stars", image: "images/city-of-stars.jpeg", lyrics: "https://genius.com/Ryan-gosling-and-emma-stone-city-of-stars-lyrics", Tsuya: true, Bee: false },
    { name: "En chantant", image: "images/en-chantant.jpeg", lyrics: "https://www.paroles.net/louane/paroles-en-chantant", Tsuya: true, Bee: false },
    { name: "Nameless Song", image: "images/undefined.png", lyrics: "./nameless-song-lyrics.html" , Tsuya: true, Bee: true },
    { name: "All of me", image: "images/all-of-me.jpeg", lyrics: "https://www.azlyrics.com/lyrics/johnlegend/allofme.html", Tsuya: true, Bee: true },
    { name: "A thousand years", image: "images/thousand-years.jpeg", lyrics: "https://www.azlyrics.com/lyrics/christinaperri/athousandyears.html", Tsuya: true, Bee: true },
    { name: "Break up with me", image: "images/break-up-with-me.jpeg", lyrics: "https://genius.com/Jessica-baio-break-up-with-me-lyrics", Tsuya: true, Bee: false },
    { name: "Older", image: "images/older.jpeg", lyrics: "https://genius.com/Sasha-sloan-older-lyrics", Tsuya: true, Bee: true },
    { name: "Do it like a girl", image: "images/do-it-like-a-girl.jpeg", lyrics: "https://genius.com/Morgan-st-jean-do-it-like-a-girl-lyrics", Tsuya: true, Bee: true },
    { name: "How far I'll go", image: "images/how-far-ill-go.jpeg", lyrics: "https://genius.com/Aulii-cravalho-how-far-ill-go-lyrics", Tsuya: true, Bee: false },
    { name: "333", image: "images/undefined.png", lyrics:"./333-lyrics.html", Tsuya: true, Bee: true },
    { name: "W.I.T.C.H", image: "images/w-i-t-c-h.jpeg", lyrics: "https://genius.com/Devon-cole-witch-lyrics", Tsuya: true, Bee: false },
    { name: "First Burn", image: "images/first-burn.jpeg", lyrics: "https://genius.com/Lin-manuel-miranda-first-burn-lyrics", Tsuya: true, Bee: false },
    { name: "Not All Men", image: "images/not-all-men.jpeg", lyrics: "https://genius.com/Morgan-st-jean-not-all-men-lyrics", Tsuya: true, Bee: false },
    { name: "Perfect", image: "images/perfect.jpeg", lyrics: "https://www.azlyrics.com/lyrics/edsheeran/perfect.html", Tsuya: true, Bee: true },
    { name: "Les Champs-Elysées", image: "images/les-champs-elysées.jpeg", lyrics: "https://www.paroles.net/joe-dassin/paroles-les-champs-elysees", Tsuya: true, Bee: true },
    { name: "Je l'aime à mourir", image: "images/je-laime-a-mourir.jpeg", lyrics: "https://www.paroles.net/francis-cabrel/paroles-je-l-aime-a-mourir", Tsuya: true, Bee: false },
    { name: "Once Upon a Dream", image: "images/once-upon-a-deam.jpeg", lyrics: "https://genius.com/Lana-del-rey-once-upon-a-dream-lyrics", Tsuya: true, Bee: false },
    { name: "Et Bam", image: "images/et-bam.jpeg", lyrics: "https://www.paroles.net/mentissa-aziza/paroles-et-bam", Tsuya: true, Bee: false },
    { name: "Can't help falling in love", image: "images/cant-help-falling-in-love.jpeg", lyrics: "https://www.azlyrics.com/lyrics/danielpadilla/canthelpfallinginlove.html", Tsuya: true, Bee: true },
    { name: "Pointless", image: "images/pointless.jpeg", lyrics: "https://genius.com/Lewis-capaldi-pointless-lyrics", Tsuya: true, Bee: true },
    { name: "Photograph", image: "images/photograph.jpeg", lyrics: "https://www.azlyrics.com/lyrics/edsheeran/photograph.html", Tsuya: false, Bee: true },
    { name: "Iris", image: "images/iris.jpeg", lyrics: "https://www.azlyrics.com/lyrics/gooeyearth/iris.html", Tsuya: false, Bee: true },
    { name: "Reste", image: "images/reste-louane.jpeg", lyrics:"https://www.paroles.net/louane/paroles-reste", Tsuya: true, Bee: true}
];

function appModDefine(mod) {
    if (mod === 'tsuya') {
        appmod = 'Tsuya';
        console.log("Tsuya mode activated");
    } else if (mod === 'bee') {
        appmod = 'Bee';
        console.log("Bee mode activated");
    } else {
        appmod = 'all';
        console.log("All songs mode activated");
    }
}


function getRandomSong() {
    let availableSongs;
    
    // Filter songs based on mode
    if (appmod === 'Tsuya') {
        availableSongs = songs.filter(song => song.Tsuya === true);
    } else if (appmod === 'Bee') {
        availableSongs = songs.filter(song => song.Bee === true);
    } else {
        availableSongs = [...songs];
    }

    if (availableSongs.length === 0) {
        return null;
    }

    let newSong;
    do {
        newSong = availableSongs[Math.floor(Math.random() * availableSongs.length)];
    } while (newSong === currentSong && availableSongs.length > 1);
    
    currentSong = newSong;
    return newSong;
}

function openNav() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.classList.toggle('open');
    
    const navButton = document.querySelector('.nav-button');
    if (sidebar.classList.contains('open')) {
        navButton.innerHTML = '&times;';
    } else {
        navButton.innerHTML = '&#9776;';
    }
}

document.getElementById('chooseButton').addEventListener('click', () => {
    const song = getRandomSong();
    document.getElementById('songLabel').textContent = song.name;
    document.getElementById('songImage').src = song.image;
    if (song.lyrics) {
        document.getElementById('lyricsButton').classList.remove('hidden');
    } else {
        document.getElementById('lyricsButton').classList.add('hidden');
    }
});

document.getElementById('lyricsButton').addEventListener('click', () => {
    if (currentSong && currentSong.lyrics) {
        window.open(currentSong.lyrics, '_blank');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const modButtons = document.querySelectorAll('.mod-button');
  modButtons.forEach(btn => {
    btn.addEventListener('touchstart', () => {
      btn.classList.add('hover');
    }, {passive: true});
    btn.addEventListener('touchend', () => {
      btn.classList.remove('hover');
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 150);
    });
    btn.addEventListener('touchcancel', () => {
      btn.classList.remove('hover');
      btn.classList.remove('active');
    });
  });
});