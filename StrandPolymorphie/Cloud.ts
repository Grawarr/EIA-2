namespace BeachParadise {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Cloud constructor")
            this.size = _size;
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.randomVelocityValue(100, 200);

            this.type
        }

        move(_timeslice: number): void {
            console.log("Cloud move");
        }

        draw(): void {
            console.log("Cloud draw");

            for (let i: number = 1; i <= 10; i++) {
                let posX: number = randomizerXClouds();
                let posY: number = randomizerYClouds();
                let rndmScale: number = randomizerScale();
                crc2.save();
                crc2.translate(posX, posY);
                crc2.scale(rndmScale, rndmScale);

                crc2.beginPath();
                crc2.bezierCurveTo(100, 0, -120, 10, 200, 20);
                crc2.bezierCurveTo(400, 20, 400, 10, 350, 0);
                crc2.bezierCurveTo(290, -200, 180, -30, 200, -30);
                crc2.bezierCurveTo(200, -50, 110, -75, 100, 0);
                crc2.closePath();

                let grd = crc2.createRadialGradient(280, 60, 1, 280, 60, 400);
                grd.addColorStop(0, "#778bac")
                grd.addColorStop(1, "#d3d4e3")
                crc2.fillStyle = grd;
                crc2.fill();

                crc2.restore();
            }
        }
    }
}