var BeachParadise;
(function (BeachParadise) {
    var Cloud = /** @class */ (function () {
        function Cloud(_size) {
            console.log("Cloud constructor");
            this.size = _size;
            this.position = new BeachParadise.Vector(0, 0);
            this.velocity = new BeachParadise.Vector(0, 0);
            this.velocity.randomVelocityValue(100, 200);
            this.type;
        }
        Cloud.prototype.move = function (_timeslice) {
            console.log("Cloud move");
            var offset = new BeachParadise.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(offset);
        };
        Cloud.prototype.draw = function () {
            console.log("Cloud draw");
            for (var i = 1; i <= 10; i++) {
                var posX = BeachParadise.randomizerXClouds();
                var posY = BeachParadise.randomizerYClouds();
                var rndmScale = BeachParadise.randomizerScale();
                BeachParadise.crc2.save();
                BeachParadise.crc2.translate(posX, posY);
                BeachParadise.crc2.scale(rndmScale, rndmScale);
                BeachParadise.crc2.beginPath();
                BeachParadise.crc2.bezierCurveTo(100, 0, -120, 10, 200, 20);
                BeachParadise.crc2.bezierCurveTo(400, 20, 400, 10, 350, 0);
                BeachParadise.crc2.bezierCurveTo(290, -200, 180, -30, 200, -30);
                BeachParadise.crc2.bezierCurveTo(200, -50, 110, -75, 100, 0);
                BeachParadise.crc2.closePath();
                var grd = BeachParadise.crc2.createRadialGradient(280, 60, 1, 280, 60, 400);
                grd.addColorStop(0, "#778bac");
                grd.addColorStop(1, "#d3d4e3");
                BeachParadise.crc2.fillStyle = grd;
                BeachParadise.crc2.fill();
                BeachParadise.crc2.restore();
            }
        };
        return Cloud;
    }());
    BeachParadise.Cloud = Cloud;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Cloud.js.map