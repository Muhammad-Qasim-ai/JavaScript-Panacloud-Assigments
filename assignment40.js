function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(makeAlbum("Adele", "25"));
console.log(makeAlbum("Coldplay", "Viva La Vida", 12));
console.log(makeAlbum("Eminem", "Kamikaze", 14));