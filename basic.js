function bike(inner) {
    return inner.model;
}
var cla = { model: "varun" };
//console.log(bike(cla))
var BikeClass = /** @class */ (function () {
    function BikeClass(type, num, name) {
        this.type = type;
        this.num = num;
        this.name = name;
        this.full = "Name:" + name + " model:" + type + " numner:" + num;
    }
    return BikeClass;
}());
function Bick(inner) {
    return "Bick model " + (inner.name = "rx100") + " Name " + inner.name;
}
var customer = new BikeClass("rx100", 1, "yamaha");
console.log(customer);
