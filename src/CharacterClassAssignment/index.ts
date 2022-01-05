class Character {
  name: string;
  phrase1: string;
  phrase2: string;
  level: number;
  constructor(name: string, phrase1: string, phrase2: string) {
    this.name = name;
    this.phrase1 = phrase1;
    this.phrase2 = phrase2;
    this.level = 0;
  }

  speak(phraseNum: number) {
    if (phraseNum === 1) {
      console.log(this.phrase1);
    } else if (phraseNum === 2) {
      console.log(this.phrase2);
    } else {
      console.log("Invalid Phrase Num");
    }
  }

  setLevel(level: number) {
    this.level = level;
    console.log(`${this.name} has become level ${this.level}`);
  }
}

const kungFuPanda = new Character(
  "KungFuPanda",
  "Skadoosh",
  "You have been blinded by pure awesomeness!"
);

const spiderman = new Character(
  "Spiderman",
  "My Spider-Sense is tingling",
  "Your friendly neighbourhood spiderman"
);

kungFuPanda.speak(1);

kungFuPanda.setLevel(2);

spiderman.speak(2);
