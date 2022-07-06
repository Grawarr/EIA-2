var BeachParadise;
(function (BeachParadise) {
    class Cloud {
        position;
        velocity;
        type;
        size;
        xpoint;
        ypoint;
        radius;
        constructor(_size, _xpoint, _ypoint, _radius) {
            this.position = new BeachParadise.Vector(750 - Math.random() * (750 - 0), 300 - Math.random() * (300 - 0));
            this.velocity = new BeachParadise.Vector(20, 0);
            this.size = _size;
            this.xpoint = _xpoint;
            this.ypoint = _ypoint;
            this.radius = _radius;
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
            // console.log("cloud draw wird ausgeführt");
            BeachParadise.crc2.save();
            BeachParadise.crc2.translate(this.position.x, this.position.y);
            BeachParadise.crc2.scale(this.size, this.size);
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
        clickCloud(xmouse, ymouse) {
            const distance = Math.sqrt((xmouse - this.xpoint) * (xmouse - this.xpoint)) + ((ymouse - this.ypoint) * (ymouse - this.ypoint));
            if (distance < this.radius) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    BeachParadise.Cloud = Cloud;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Cloud.js.map