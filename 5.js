class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}
plugin() {
        console.log(this.name + ": прибор включен!");
        this.isConnected = true;
    }

unplugin() {
        console.log(this.name + ": прибор выключен!");
        this.isConnected = false;
    }
}

class Lamp extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name;power);
    this.brand = brand;
    this.bulbTypee = bulbType;
    this.isPlugged = true;
}
}

class Computer extends ElectricalAppliance {
  constructor (name, brand, power, type, functionality) {
    super(name;power);
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}
}


const tableLamp = new Lamp("Ночник", "LG", 60, "Диодная");
const homeTablePC = new Computer("Ноутбук", "Apple", 120, "Стационарный", "Для игр");

tableLamp.unplug();
homeTablePC.plugin();

console.log(homeTablePC)
console.log(tableLamp)
