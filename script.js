const songs = [
    { name: "Say you won't let go", image: "say-u-wont-let-go.jpeg" },
    { name: "Numb little bug", image: "numb-little-bug.jpeg" },
    { name: "City of stars", image: "city-of-stars.jpeg" },
    { name: "En chantant", image: "en-chantant.jpeg" },
    { name: "Nameless Song", image: "undefined.png" },
    { name: "All of me", image: "all-of-me.jpeg" },
    { name: "A thousand years", image: "thousand-years.jpeg" },
    { name: "Break up with me", image: "break-up-with-me.jpeg" },
    { name: "Older", image: "older.jpeg" },
    { name: "Do it like a girl", image: "do-it-like-a-girl.jpeg" },
    { name: "How far I'll go", image: "how-far-ill-go.jpeg" },
    { name: "333", image: "undefined.png" },
    { name: "W.I.T.C.H", image: "w-i-t-c-h.jpeg" },
    { name: "First Burn", image: "first-burn.jpeg" },
    { name: "Not All Men", image: "not-all-men.jpeg" },
    { name: "Perfect", image: "perfect.jpeg" },
    { name: "Les Champs-Elysées", image: "les-champs-elysées.jpeg" },
    { name: "Je l'aime à mourir", image: "je-laime-a-mourir.jpeg" },
    { name: "Once Upon a Dream", image: "once-upon-a-deam.jpeg" },
    { name: "Et Bam", image: "et-bam.jpeg" },
    { name: "Can't help falling in love", image: "cant-help-falling-in-love.jpeg" },
    { name: "Pointless", image: "pointless.jpeg" },
    { name: "Photograph", image: "photograph.jpeg" },
    { name: "Iris", image: "iris.jpeg" }
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
});
