"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each
// magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianName = ["Doug Henning", "Max Maven", "Penn"];
show_magicians(magicianName);
