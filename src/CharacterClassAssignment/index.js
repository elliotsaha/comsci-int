"use strict";
var Character = /** @class */ (function () {
    function Character(name, phrase1, phrase2) {
        this.name = name;
        this.phrase1 = phrase1;
        this.phrase2 = phrase2;
        this.level = 0;
    }
    Character.prototype.speak = function (phraseNum) {
        if (phraseNum === 1) {
            console.log(this.phrase1);
        }
        else if (phraseNum === 2) {
            console.log(this.phrase2);
        }
        else {
            console.log("Invalid Phrase Num");
        }
    };
    Character.prototype.setLevel = function (level) {
        this.level = level;
        console.log("".concat(this.name, " has become level ").concat(this.level));
    };
    return Character;
}());
var kungFuPanda = new Character("KungFuPanda", "Skadoosh", "You have been blinded by pure awesomeness!");
var spiderman = new Character("Spiderman", "My Spider-Sense is tingling", "Your friendly neighbourhood spiderman");
kungFuPanda.speak(1);
kungFuPanda.setLevel(2);
spiderman.speak(2);
