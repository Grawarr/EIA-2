namespace BeachParadise {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Cloud constructor")
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
        }
    }
}