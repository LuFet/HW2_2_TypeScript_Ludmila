var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log(this.name + " передвигается");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, "Кот") || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Мяу-Мяу");
    };
    Cat.prototype.move = function () {
        console.log(this.name + " передвигается по земле");
    };
    return Cat;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super.call(this, "Птица") || this;
    }
    Bird.prototype.makeSound = function () {
        console.log("Чик чирик");
    };
    Bird.prototype.move = function () {
        console.log(this.name + " передвигается в воздухе");
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super.call(this, "Рыба") || this;
    }
    Fish.prototype.makeSound = function () {
        console.log("...");
    };
    Fish.prototype.move = function () {
        console.log(this.name + " передвигается в воде");
    };
    return Fish;
}(Animal));
var murzik = new Cat();
murzik.makeSound();
murzik.move();
var vorobej = new Bird();
vorobej.makeSound();
vorobej.move();
var karasj = new Fish();
karasj.makeSound();
karasj.move();
