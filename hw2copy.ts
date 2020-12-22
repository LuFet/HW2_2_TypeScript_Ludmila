interface Doors{
    doors: boolean;
}

abstract class Car{
    constructor(public readonly brand: string, year: Date){
        this.brand = brand;
        this.Year = year;
    };

    protected Year: Date;
    
    public getBrand():string{
        return this.brand;
    }
    public getYear():Date{
        return this.Year;
    }
    abstract faster(): void;
    abstract slower(): void;
}

class myBMW extends Car implements Doors{
    private currentSpeed: number = 0;
    doors = false;
    constructor(){
        super('BMW',new Date(1989));
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
    private currentSpeed: number = 0;
    doors = false;
    constructor(){
        super('VW',new Date(2000));
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
    private currentSpeed: number = 0;
    doors = false;
    constructor(){
        super('Mercedes',new Date(2020));
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

let car1 = new myBMW()
let car2 = new myVW();
let car3 = new myMercedes();

console.log(car1);
console.log(car2);
console.log(car3);
car1.faster();
car2.faster();
car3.faster();
car1.slower();
car2.slower();
car3.slower();