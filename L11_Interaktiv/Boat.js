var BeachParadise;
(function (BeachParadise) {
    class Boat {
        position;
        velocity;
        type;
        size;
        constructor(_size) {
            this.position = new BeachParadise.Vector(0, 0);
            this.position.random(200, 500);
            this.velocity = new BeachParadise.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type;
        }
        move(_timeslice) {
            //add velocity * _timeslice to position
            //[positionComp. < 0]
            //[positionComp. > canvasdimension]
            //add canvasdimension to component
            //subtract canvasdimension to component
        }
        draw() {
            console.log("boat draw ausgeführt");
            BeachParadise.crc2.save();
            BeachParadise.crc2.translate(200, 550);
            BeachParadise.crc2.scale(0.25, 0.25);
            BeachParadise.crc2.beginPath();
            BeachParadise.crc2.fillStyle = 'rgb(249, 249, 249)';
            BeachParadise.crc2.lineWidth = 0.070004;
            BeachParadise.crc2.moveTo(23.226222, 206.334570);
            BeachParadise.crc2.bezierCurveTo(23.818057, 131.257640, 74.258034, 81.305714, 133.832490, 33.944325);
            BeachParadise.crc2.bezierCurveTo(98.880841, 148.502470, 137.337190, 219.356990, 140.506050, 225.422800);
            BeachParadise.crc2.bezierCurveTo(143.128820, 230.443300, 100.159370, 196.522260, 23.226222, 206.334570);
            BeachParadise.crc2.closePath();
            BeachParadise.crc2.fill();
            BeachParadise.crc2.beginPath();
            BeachParadise.crc2.fillStyle = 'rgb(249, 249, 249)';
            BeachParadise.crc2.lineWidth = 0.070004;
            BeachParadise.crc2.moveTo(17.878378, 214.540540);
            BeachParadise.crc2.lineTo(134.635130, 229.864860);
            BeachParadise.crc2.lineTo(132.810810, 236.432430);
            BeachParadise.crc2.lineTo(29.554053, 236.432430);
            BeachParadise.crc2.closePath();
            BeachParadise.crc2.fill();
            BeachParadise.crc2.beginPath();
            BeachParadise.crc2.fillStyle = 'rgb(249, 249, 249)';
            BeachParadise.crc2.lineWidth = 0.070004;
            BeachParadise.crc2.moveTo(82.094595, 229.135130);
            BeachParadise.crc2.lineTo(86.108107, 171.486480);
            BeachParadise.crc2.lineTo(89.391890, 171.121620);
            BeachParadise.crc2.lineTo(85.378378, 229.864860);
            BeachParadise.crc2.closePath();
            BeachParadise.crc2.fill();
            BeachParadise.crc2.restore();
        }
    }
    BeachParadise.Boat = Boat;
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Boat.js.map