function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.connect = function() {
    console.log(this.name + " прибор включен!");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.disconnect = function() {
    console.log(this.name + " прибор выключен!");
   this.isPlugged = false;
};

function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.lampType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();
// экземпляр лампы
const tableLamp = new Lamp("Ночник", "LG", 60, "Диодная");
// экземпляр компьютера
const homeTablePC = new Computer("Ноутбук", "Apple", 120, "Стационарный", "Для игр");

// отключить лампу из розетки
tableLamp.unplug();
//включить компьютер в розетку
homeTablePC.plugin();

// результат
console.log(homeTablePC)
console.log(tableLamp)

