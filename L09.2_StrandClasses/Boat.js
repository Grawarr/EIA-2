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
            console.log("Boat move");
            //add velocity * _timeslice to position
            //[positionComp. < 0]
            //[positionComp. > canvasdimension]
            //add canvasdimension to component
            //subtract canvasdimension to component
        };
        Boat.prototype.draw = function () {
            console.log("Boat draw");
            //save transform
            //translate to position
            //scale to size
            //draw path
            //restore transform
        };
        return Boat;
    }());
    BeachParadise.Boat = Boat;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Boat.js.map