namespace BeachParadise {
    export class Boat {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Boat constructor")
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.randomVelocityValue(100, 200);

            this.type
        }

        move(_timeslice: number): void {
            console.log("Boat move");
            //add velocity * _timeslice to position
            //[positionComp. < 0]
            //[positionComp. > canvasdimension]
            //add canvasdimension to component
            //subtract canvasdimension to component
        }

        draw(): void {
            console.log("Boat draw");
            for (let i: number = 1; i <= 3; i++) {

                let posX: number = randomizerXClouds();

                crc2.save();
                crc2.translate(posX, 550);
                crc2.scale(0.25, 0.25);

                crc2.beginPath();
                crc2.fillStyle = 'rgb(249, 249, 249)';
                crc2.lineWidth = 0.070004;
                crc2.moveTo(23.226222, 206.334570);
                crc2.bezierCurveTo(23.818057, 131.257640, 74.258034, 81.305714, 133.832490, 33.944325);
                crc2.bezierCurveTo(98.880841, 148.502470, 137.337190, 219.356990, 140.506050, 225.422800);
                crc2.bezierCurveTo(143.128820, 230.443300, 100.159370, 196.522260, 23.226222, 206.334570);
                crc2.closePath();
                crc2.fill();

                crc2.beginPath();
                crc2.fillStyle = 'rgb(249, 249, 249)';
                crc2.lineWidth = 0.070004;
                crc2.moveTo(17.878378, 214.540540);
                crc2.lineTo(134.635130, 229.864860);
                crc2.lineTo(132.810810, 236.432430);
                crc2.lineTo(29.554053, 236.432430);
                crc2.closePath();
                crc2.fill();

                crc2.beginPath();
                crc2.fillStyle = 'rgb(249, 249, 249)';
                crc2.lineWidth = 0.070004;
                crc2.moveTo(82.094595, 229.135130);
                crc2.lineTo(86.108107, 171.486480);
                crc2.lineTo(89.391890, 171.121620);
                crc2.lineTo(85.378378, 229.864860);
                crc2.closePath();
                crc2.fill();

                crc2.restore();
            }
        }
    }
}