interface Doors{
    doors: boolean;
}

abstract class Car{
    constructor(public readonly brand: string, year: Date){
        this.brand = brand;
        this.Year= year.getFullYear();
    };

    protected Year: number;
    
    public getBrand():string{
        return this.brand;
    }
    public getYear():number{
        return this.Year;
    }
    abstract faster(): void;
    abstract slower(): void;
}

class myBMW extends Car implements Doors{
    private currentSpeed: number = 500;
    doors = true;
    constructor(){
        super('BMW',new Date('2011-01-01'));
    }

    faster(){
        this.currentSpeed += 5;
        console.log(`faster ${this.currentSpeed}`)
    }
    slower(){
        this.currentSpeed -= 5;
        console.log(`slower ${this.currentSpeed}`)
    }
}
class myVW extends Car implements Doors{
    private currentSpeed: number = 100;
    doors = false;
    constructor(){
        super('VW',new Date('1999-01-01'));
    }

    faster(){
        this.currentSpeed += 5;
        console.log(`faster ${this.currentSpeed}`)
    }
    slower(){
        this.currentSpeed -= 5;
        console.log(`slower ${this.currentSpeed}`)
    }
}
class myMercedes extends Car implements Doors{
    private currentSpeed: number = 200;
    doors = true;
    constructor(){
        super('Mercedes',new Date('2020-01-01'));
    }

    faster(){
        this.currentSpeed += 5;
        console.log(`faster ${this.currentSpeed}`)
    }
    slower(){
        this.currentSpeed -= 5;
        console.log(`slower ${this.currentSpeed}`)
    }
}

let car1 = new myBMW();
let car2 = new myVW();
let car3 = new myMercedes();

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car1.getBrand());
console.log(car2.getBrand());
console.log(car3.getBrand());
console.log(car1.getYear());
console.log(car2.getYear());
console.log(car3.getYear());
car1.faster();
car1.faster();
car1.faster();
car2.faster();
car2.faster();
car2.faster();
car3.faster();
car3.faster();
car3.faster();
car1.slower();
car1.slower();
car2.slower();
car2.slower();
car3.slower();
car3.slower();
