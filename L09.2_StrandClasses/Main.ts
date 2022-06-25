namespace BeachParadise {
    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("BeachAnimation starting");
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        skyGradient();
        seaGradient();

        let cloud: Cloud = new Cloud(1);
        console.log("cloud");
        cloud.draw();

        let boat: Boat = new Boat(1);
        console.log("boat");
        boat.draw();

        beachGradient();

        let beachGirl: BeachGirl = new BeachGirl(1);
        console.log("beachgirl")
        beachGirl.draw();

        bush();
    }

    export function randomizerXClouds(): number {
        return (Math.floor(Math.random() * (500 - 10) + 10));
    }

    export function randomizerYClouds(): number {
        return (Math.floor(Math.random() * (570 - 100) + 100));
    }

    export function randomizerScale(): number {
        return (Math.random() * (1 - 0.25) + 0.25);
    }

    export function randomizerYGirl(): number {
        return (Math.floor(Math.random() * (1000 - 600) + 600));
    }

    export function randomizerGirlScale(): number {
        return (Math.random() * (2 - 0.75) + 0.75);
    }


    function skyGradient(): void {
        let grd = crc2.createLinearGradient(750, 0, 750, 600);
        grd.addColorStop(0, "#004bc2");
        grd.addColorStop(1, "#9dcdfc");

        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 750, 600);
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