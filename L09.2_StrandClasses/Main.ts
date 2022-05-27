namespace BeachParadise {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("BeachAnimation starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "red";

        let cloud: Cloud = new Cloud(1);
        console.log(cloud);
        cloud.draw();
    }
}