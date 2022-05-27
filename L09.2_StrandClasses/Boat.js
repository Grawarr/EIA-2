var BeachParadise;
(function (BeachParadise) {
    var Boat = /** @class */ (function () {
        function Boat(_size) {
            console.log("Boat constructor");
            this.position = new BeachParadise.Vector(0, 0);
            this.velocity = new BeachParadise.Vector(0, 0);
            this.velocity.randomVelocityValue(100, 200);
            this.type;
        }
        Boat.prototype.move = function (_timeslice) {
            console.log("Cloud move");
        };
        Boat.prototype.draw = function () {
            console.log("Cloud draw");
        };
        return Boat;
    }());
    BeachParadise.Boat = Boat;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Boat.js.map