namespace BeachParadise {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
        xpoint: number;
        ypoint: number;
        radius: number;

        constructor(_size: number, _xpoint: number, _ypoint: number, _radius: number) {
            this.position = new Vector(750 - Math.random() * (750 - 0), 300 - Math.random() * (300 - 0));
            this.velocity = new Vector(20, 0);
            this.size = _size;
            this.xpoint = _xpoint;
            this.ypoint = _ypoint;
            this.radius = _radius;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += canvas.height;
            }
            if (this.position.x > canvas.width) {
                this.position.x -= canvas.width;
            }
            if (this.position.y > canvas.height) {
                this.position.y -= canvas.height;
            }
        }

        draw(): void {
            // console.log("cloud draw wird ausgeführt");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

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

        clickCloud(xmouse: number, ymouse: number): boolean {
            const distance = Math.sqrt((xmouse - this.xpoint) * (xmouse - this.xpoint)) + ((ymouse - this.ypoint) * (ymouse - this.ypoint));
            if (distance < this.radius) {
                // alert("Hit");
                return true;
            } else {
                // alert("miss");
                return false;
            }
        }
    }
}