var BeachParadise;
(function (BeachParadise) {
    class Cloud {
        position;
        velocity;
        type;
        size;
        constructor(_size) {
            this.position = new BeachParadise.Vector(0, 0);
            this.position.random(200, 500);
            this.velocity = new BeachParadise.Vector(0, 0);
            this.velocity.random(20, 100);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new BeachParadise.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += BeachParadise.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += BeachParadise.canvas.height;
            }
            if (this.position.x > BeachParadise.canvas.width) {
                this.position.x -= BeachParadise.canvas.width;
            }
            if (this.position.y > BeachParadise.canvas.height) {
                this.position.y -= BeachParadise.canvas.height;
            }
        }
        draw() {
            console.log("cloud draw wird ausgeführt");
            BeachParadise.crc2.save();
            BeachParadise.crc2.translate(250, 250);
            BeachParadise.crc2.scale(1, 1);
            BeachParadise.crc2.beginPath();
            BeachParadise.crc2.bezierCurveTo(100, 0, -120, 10, 200, 20);
            BeachParadise.crc2.bezierCurveTo(400, 20, 400, 10, 350, 0);
            BeachParadise.crc2.bezierCurveTo(290, -200, 180, -30, 200, -30);
            BeachParadise.crc2.bezierCurveTo(200, -50, 110, -75, 100, 0);
            BeachParadise.crc2.closePath();
            let grd = BeachParadise.crc2.createRadialGradient(280, 60, 1, 280, 60, 400);
            grd.addColorStop(0, "#778bac");
            grd.addColorStop(1, "#d3d4e3");
            BeachParadise.crc2.fillStyle = grd;
            BeachParadise.crc2.fill();
            BeachParadise.crc2.restore();
        }
    }
    BeachParadise.Cloud = Cloud;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Cloud.js.map