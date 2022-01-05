"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Backpack = /** @class */ (function () {
    function Backpack(color, size) {
        this.color = color;
        this.size = size;
        this.items = [];
        this.open = false;
    }
    Backpack.prototype.openBag = function () {
        this.open = true;
        console.log("Bag is now open");
    };
    Backpack.prototype.closeBag = function () {
        this.open = false;
        console.log("Bag is now closed");
    };
    Backpack.prototype.putin = function (item) {
        if (this.open) {
            this.items = __spreadArray(__spreadArray([], this.items, true), [item], false);
            console.log("Bag now contains: ".concat(JSON.stringify(this.items)));
        }
        else {
            console.log("Bag is not open, cannot put in items");
        }
    };
    Backpack.prototype.takeout = function (item) {
        if (this.open) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i] === item) {
                    this.items.splice(i, 1);
                    console.log("Took out: ".concat(item));
                    console.log("Bag now contains: ".concat(JSON.stringify(this.items)));
                    return;
                }
            }
        }
        else {
            console.log("Bag is not open, cannot take out items");
        }
    };
    return Backpack;
}());
var smBlue = new Backpack("blue", "small");
var mdRed = new Backpack("red", "medium");
var lgGreen = new Backpack("green", "large");
smBlue.openBag();
smBlue.putin("Lunch");
smBlue.putin("Jacket");
smBlue.closeBag();
smBlue.openBag();
smBlue.takeout("Jacket");
smBlue.closeBag();
