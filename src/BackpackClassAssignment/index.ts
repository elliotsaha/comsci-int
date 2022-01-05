class Backpack {
  color: string;
  size: "small" | "medium" | "large";
  items: Array<unknown>;
  open: boolean;
  constructor(color: string, size: "small" | "medium" | "large") {
    this.color = color;
    this.size = size;
    this.items = [];
    this.open = false;
  }

  openBag() {
    this.open = true;
    console.log("Bag is now open");
  }

  closeBag() {
    this.open = false;
    console.log("Bag is now closed");
  }

  putin(item: unknown) {
    if (this.open) {
      this.items = [...this.items, item];
      console.log(`Bag now contains: ${JSON.stringify(this.items)}`);
    } else {
      console.log("Bag is not open, cannot put in items");
    }
  }

  takeout(item: unknown) {
    if (this.open) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] === item) {
          this.items.splice(i, 1);
          console.log(`Took out: ${item}`);
          console.log(`Bag now contains: ${JSON.stringify(this.items)}`);
          return;
        }
      }
    } else {
      console.log("Bag is not open, cannot take out items");
    }
  }
}

const smBlue = new Backpack("blue", "small");
const mdRed = new Backpack("red", "medium");
const lgGreen = new Backpack("green", "large");

smBlue.openBag();
smBlue.putin("Lunch");
smBlue.putin("Jacket");
smBlue.closeBag();
smBlue.openBag();
smBlue.takeout("Jacket");
smBlue.closeBag();
