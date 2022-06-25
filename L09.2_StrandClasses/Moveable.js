var BeachParadise;
(function (BeachParadise) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        Moveable.prototype.draw = function () {
            console.log("draw");
        };
        Moveable.prototype.update = function () {
            console.log("update");
        };
        return Moveable;
    }());
    BeachParadise.Moveable = Moveable;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Moveable.js.map