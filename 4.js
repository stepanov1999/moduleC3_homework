// родительская функция приборов
function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод - включает прибор
Appliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged");
    this.isPlugged = true;
};

// метод - выключает прибор
Appliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged");
    this.isPlugged = false;
};

// прибор - Computer
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new Appliance();  // делегирующая связь для прибора - Computer



// прибор - Printer
function Printer(name, brand, power, type, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.color = color;
    this.isPlugged = false;
}

Printer.prototype = new Appliance();  // делегирующая связь для прибора - Printer

// прибор - Lamp
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new Appliance();  // делегирующая связь для прибора - Lamp

// экземпляры приборов
const myComputer = new Computer("Lenovo G505s", "Lenovo", 65, "Mobile", "WorkStation");
const myPrinter = new Printer("Epson L7160", "Epson", 16, "Inkjet", "Color");
const myLamp = new Lamp("Yeelight LED Vision Desk Lamp V1 Pro", "Yeelight", 12, "LED");

console.log();

// включаю приборы в розетку
myComputer.plugIn();
myPrinter.plugIn();
myLamp.plugIn();

console.log();

// отключаю лампу от розетки
myLamp.unplug();

console.log();

// результат
console.log(myComputer);
console.log(myPrinter);
console.log(myLamp);

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