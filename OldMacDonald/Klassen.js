var MacDonaldsFarmhouse;
(function (MacDonaldsFarmhouse) {
    MacDonaldsFarmhouse.barn = {
        "wheat": 100, "seed": 100, "evidence": 100, "meat": 100, "hay": 100,
    };
    var preferredFood;
    var Animal = /** @class */ (function () {
        function Animal(_type, _name, _preferredFood, _hungerLevel, _sound) {
            this.name = _name;
            this.type = _type;
            this.preferredFood = _preferredFood;
            this.hungerLevel = _hungerLevel;
            this.sound = _sound;
        }
        Animal.prototype.eat = function () {
            preferredFood = String(this.preferredFood);
            console.log(this.name + " ate " + this.hungerLevel + "kg of " + this.preferredFood);
            MacDonaldsFarmhouse.barn[preferredFood] = MacDonaldsFarmhouse.barn[preferredFood] - (this.hungerLevel);
            console.log("There are " + MacDonaldsFarmhouse.barn[preferredFood] + "kg of " + this.preferredFood + " remaining");
        };
        Animal.prototype.sing = function () {
            console.log("Old MacDonald had a Farm E-I-E-I-O And on that farm there is a " + this.type + " E-I-E-I-O  With a " + this.sound + this.sound + " here And a " + this.sound + this.sound + " there here a " + this.sound + " there a " + this.sound + " Everywhere a " + this.sound + this.sound + " Old MacDonald had a farm E-I-E-I-O");
        };
        return Animal;
    }());
    MacDonaldsFarmhouse.Animal = Animal;
})(MacDonaldsFarmhouse || (MacDonaldsFarmhouse = {}));
//# sourceMappingURL=Klassen.js.map