class Appliance {
    constructor(name, brand, power){
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.isPlugged = false;
    }
    // метод - включает прибор
    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    // метод - выключает прибор
    unplug() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}

// Прибор 1 - Computer
class Computer extends Appliance {
    constructor (name, brand, power, type, functionality) {
        super(name, brand, power);
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

// Прибор 3 - Printer
class Printer extends Appliance {
    constructor(name, brand, power, bulbType) {
        super(name, brand, power);
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

// Прибор 4 - Lamp
class Lamp extends Appliance {
    constructor (name, brand, power, bulbType) {
        super(name, brand, power);
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

// создаем экземпляры приборов
const myComputer = new Computer("Lenovo G505s", "Lenovo", 65, "Mobile", "WorkStation");
const myPrinter = new Printer("Epson L7160", "Epson", 16, "Inkjet", "Color");
const myLamp = new Lamp("Yeelight LED Vision Desk Lamp V1 Pro", "Yeelight", 12, "LED");

// включаю приборы в розетку
myComputer.plugIn();
myPrinter.plugIn();
myLamp.plugIn();

console.log();

// отключаю лампу от розетки
myLamp.unplug();

// результат
console.log();
console.log(myComputer)
console.log(myPrinter)
console.log(myLamp)

// потребляемая мощность всех включенных в розетку приборов
const apps = [myComputer, myPrinter, myLamp];
let allPluggedPower = 0;  // счетчик мощности подключенных приборов
for (let i in apps) {
    if (apps[i].isPlugged) {
        allPluggedPower = allPluggedPower + apps[i].power;
    }
}

console.log();
console.log('Мощность (power) всех включенных в розетку приборов:');
console.log(allPluggedPower);