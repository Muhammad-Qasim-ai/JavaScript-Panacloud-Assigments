var magicians = ["David Copperfield", "Criss Angel", "David Blaine"];
var greatMagicians = [];

function makeGreat(magicians) {
    var newMagicians = magicians.slice();
    for (var i = 0; i < newMagicians.length; i++) {
        newMagicians[i] = "The Great " + newMagicians[i];
    }
    return newMagicians;
}

function showMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

greatMagicians = makeGreat(magicians.slice());
console.log("Original Magicians:");
showMagicians(magicians);
console.log("Great Magicians:");
showMagicians(greatMagicians);
