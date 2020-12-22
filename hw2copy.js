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
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.brand = brand;
        this.Year = year;
    }
    ;
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.getYear = function () {
        return this.Year;
    };
    return Car;
}());
var myBMW = /** @class */ (function (_super) {
    __extends(myBMW, _super);
    function myBMW() {
        var _this = _super.call(this, 'BMW', new Date(1989)) || this;
        _this.currentSpeed = 0;
        _this.doors = false;
        return _this;
    }
    myBMW.prototype.faster = function () {
        this.currentSpeed += 5;
        console.log("faster " + this.currentSpeed);
    };
    myBMW.prototype.slower = function () {
        this.currentSpeed -= 5;
        console.log("slower " + this.currentSpeed);
    };
    return myBMW;
}(Car));
var myVW = /** @class */ (function (_super) {
    __extends(myVW, _super);
    function myVW() {
        var _this = _super.call(this, 'VW', new Date(2000)) || this;
        _this.currentSpeed = 0;
        _this.doors = false;
        return _this;
    }
    myVW.prototype.faster = function () {
        this.currentSpeed += 5;
        console.log("faster " + this.currentSpeed);
    };
    myVW.prototype.slower = function () {
        this.currentSpeed -= 5;
        console.log("slower " + this.currentSpeed);
    };
    return myVW;
}(Car));
var myMercedes = /** @class */ (function (_super) {
    __extends(myMercedes, _super);
    function myMercedes() {
        var _this = _super.call(this, 'Mercedes', new Date(2020)) || this;
        _this.currentSpeed = 0;
        _this.doors = false;
        return _this;
    }
    myMercedes.prototype.faster = function () {
        this.currentSpeed += 5;
        console.log("faster " + this.currentSpeed);
    };
    myMercedes.prototype.slower = function () {
        this.currentSpeed -= 5;
        console.log("slower " + this.currentSpeed);
    };
    return myMercedes;
}(Car));
var car1 = new myBMW();
var car2 = new myVW();
var car3 = new myMercedes();
console.log(car1);
car1.faster();
car2.faster();
car3.faster();
car1.slower();
car2.slower();
car3.slower();
