var Atelier;
(function (Atelier) {
    window.addEventListener("load", hndlLoad);
    var canvas;
    var crc2;
    var values = new Array();
    function hndlLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        fillCanvas();
        circle();
    }
    function fillCanvas() {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(25, 25, 1000, 3000);
    }
    function circle() {
        for (var i = 0; i <= 30; i++) {
            crc2.beginPath();
            crc2.lineWidth = randomizerThickness();
            crc2.arc(randomizer(), randomizer(), randomizer(), 0, 2 * Math.PI);
            crc2.strokeStyle = "rgb(" + randomizerRGB() + "," + randomizerRGB() + "," + randomizerRGB() + ")";
            crc2.stroke();
        }
    }
    for (var i = 1; i <= 6; i++) {
        values.push(randomizer());
    }
    console.log(values);
    function randomizer() {
        return (Math.floor(Math.random() * 1080));
    }
    function randomizerRGB() {
        return (Math.floor(Math.random() * 255));
    }
    function randomizerThickness() {
        return (Math.floor(Math.random() * 200));
    }
})(Atelier || (Atelier = {}));
//# sourceMappingURL=Canvas.js.map