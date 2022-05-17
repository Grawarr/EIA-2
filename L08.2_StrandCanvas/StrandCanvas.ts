namespace Beach {

    window.addEventListener("load", hndlLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function hndlLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        skyGradient();
        seaGradient();
        beachGradient();
    }

    function skyGradient(): void {
        let grd = crc2.createLinearGradient(750, 0, 750, 600);
        grd.addColorStop(0, "#004bc2");
        grd.addColorStop(1, "#9dcdfc");

        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 750, 600);

        cloud();
    }

    function seaGradient(): void {
        let grd = crc2.createLinearGradient(0, 600, 0, 700);
        grd.addColorStop(0, "#215291")
        grd.addColorStop(1, "#7adbdf")

        crc2.fillStyle = grd;
        crc2.fillRect(0, 600, 750, 700)
    }

    function beachGradient(): void {
        let grd = crc2.createLinearGradient(0, 700, 0, 1334);
        grd.addColorStop(1, "#afabb0");
        grd.addColorStop(0.5, "#e8e1dd")
        grd.addColorStop(0, "#f4f2f4");

        crc2.fillStyle = grd;
        crc2.fillRect(0, 700, 750, 1334)
        // debugger;
        bush();
    }

    function cloud(): void {
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

    function randomizerXClouds(): number {
        return (Math.floor(Math.random() * (500 - 10) + 10));
    }

    function randomizerYClouds(): number {
        return (Math.floor(Math.random() * (570 - 100) + 100));
    }

    function randomizerScale(): number {
        return (Math.random() * (1 - 0.25) + 0.25);
    }

    function bush(): void {
        let j: number = 0;

        for (let i: number = 1; i <= 2; i++) {
            crc2.save();
            crc2.translate(-50 + j, 1334);

            crc2.beginPath();
            crc2.bezierCurveTo(-50, 0, -50, -400, 75, -250);
            crc2.bezierCurveTo(200, -275, 150, -150, 175, -175);
            crc2.bezierCurveTo(175, -175, 275, -200, 250, -75)
            crc2.bezierCurveTo(250, -100, 325, -50, 300, 0)
            crc2.closePath();

            let grd = crc2.createRadialGradient(50, 0, 1, 50, 0, 300);
            grd.addColorStop(0, "#233105")
            grd.addColorStop(1, "#7a850e")
            crc2.fillStyle = grd;
            crc2.fill();

            crc2.restore();
            crc2.scale(-1, 1);

            j += -750;

        }
    }

}