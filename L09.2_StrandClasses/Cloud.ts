namespace BeachParadise {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Cloud constructor")
            this.size = 1 //WIP
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.randomVelocityValue(100, 200);

            this.type
        }

        move(_timeslice: number): void {
            console.log("Cloud move");
            //add velocity * _timeslice to position
            //[positionComp. < 0]
            //[positionComp. > canvasdimension]
            //add canvasdimension to component
            //subtract canvasdimension to component
        }

        draw(): void {
            console.log("Cloud draw");
            //save transform
            //translate to position
            //scale to size
            //draw path
            //restore transform
        }
    }
}