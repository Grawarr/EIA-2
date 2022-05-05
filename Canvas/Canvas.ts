namespace Atelier {
    
    window.addEventListener("load", hndlLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let values: number [] = new Array();

    function hndlLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        fillCanvas();
        circle();
    }

    function fillCanvas(): void {
        crc2.fillStyle = "#ffffff"
        crc2.fillRect(25, 25, 1000, 3000);
    }

    function circle(): void {
        for (let i: number = 0; i <= 30; i++) {
            crc2.beginPath();
            crc2.lineWidth = randomizerThickness();
            crc2.arc(randomizer(), randomizer(), randomizer(), 0, 2 * Math.PI);
            crc2.strokeStyle = "rgb(" + randomizerRGB() + "," + randomizerRGB() + "," + randomizerRGB() + ")";
            crc2.stroke();
        }
    }

    for (let i: number = 1; i <= 6; i++) {
        values.push(randomizer());
    }

    console.log(values)


    function randomizer(): number {
        return (Math.floor(Math.random() * 1080));
    }

    function randomizerRGB(): number {
        return (Math.floor(Math.random() * 255));
    }

    function randomizerThickness(): number {
        return (Math.floor(Math.random() * 200))
    }



}