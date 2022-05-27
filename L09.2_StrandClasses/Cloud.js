var BeachParadise;
(function (BeachParadise) {
    var Cloud = /** @class */ (function () {
        function Cloud(_size) {
            console.log("Cloud constructor");
            this.position = new BeachParadise.Vector(0, 0);
            this.velocity = new BeachParadise.Vector(0, 0);
            this.velocity.randomVelocityValue(100, 200);
            this.type;
        }
        Cloud.prototype.move = function (_timeslice) {
            console.log("Cloud move");
        };
        Cloud.prototype.draw = function () {
            console.log("Cloud draw");
        };
        return Cloud;
    }());
    BeachParadise.Cloud = Cloud;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Cloud.js.map