abstract class Animal { // абстрактный класс
    constructor(public name: string) { }

    abstract makeSound(); // абстрактный метод

    public move(): void {
        console.log(this.name + " передвигается")
    }
}

class Cat extends Animal {
    constructor() {
        super("Кот");
    }

    makeSound() { // обязательная реализация абстрактного метода из базового класса. Попробуйте удалить этот метод из класса Cat
        console.log("Мяу-Мяу");
    }
    public move(): void {
        console.log(this.name + " передвигается по земле")
    }
}

class Bird extends Animal {
    constructor() {
        super("Птица");
    }

    makeSound() {
        console.log("Чик чирик");
    }
    public move(): void {
        console.log(this.name + " передвигается в воздухе")
    }
}
class Fish extends Animal {
    constructor() {
        super("Рыба");
    }

    makeSound() {
        console.log("...");
    
        }
    public move(): void {
        console.log(this.name + " передвигается в воде")
    }
}

let murzik: Cat = new Cat();
murzik.makeSound();
murzik.move();

let vorobej: Bird = new Bird();
vorobej.makeSound();
vorobej.move();

let karasj: Fish = new Fish();
karasj.makeSound();
karasj.move();


