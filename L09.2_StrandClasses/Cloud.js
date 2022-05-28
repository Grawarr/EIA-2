var BeachParadise;
(function (BeachParadise) {
    var Cloud = /** @class */ (function () {
        function Cloud(_size) {
            console.log("Cloud constructor");
            this.size = 1; //WIP
            this.position = new BeachParadise.Vector(0, 0);
            this.velocity = new BeachParadise.Vector(0, 0);
            this.velocity.randomVelocityValue(100, 200);
            this.type;
        }
        Cloud.prototype.move = function (_timeslice) {
            console.log("Cloud move");
            //add velocity * _timeslice to position
            //[positionComp. < 0]
            //[positionComp. > canvasdimension]
            //add canvasdimension to component
            //subtract canvasdimension to component
        };
        Cloud.prototype.draw = function () {
            console.log("Cloud draw");
            //save transform
            //translate to position
            //scale to size
            //draw path
            //restore transform
        };
        return Cloud;
    }());
    BeachParadise.Cloud = Cloud;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Cloud.js.map