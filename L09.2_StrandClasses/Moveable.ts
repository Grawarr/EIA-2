namespace BeachParadise {
    export class Moveable {
        posX;
        posY;
        velocityX;
        velocityY;
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            console.log("draw");
        }
        update() {
            console.log("update");
        }
    }
}