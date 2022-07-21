var animals = /** @class */ (function () {
    function animals() {
    }
    animals.prototype.count = function () {
        console.log("dog are " + this.dogs + " and cats " + this.cats);
    };
    return animals;
}());
var animal = new animals;
animal.cats = 3;
animal.dogs = 4;
animal.count();
