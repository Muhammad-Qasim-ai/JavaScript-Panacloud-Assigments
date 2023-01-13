var magicians = ["David Copperfield", "Criss Angel", "David Blaine"];

function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}

function showMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

magicians = makeGreat(magicians);
showMagicians(magicians);
