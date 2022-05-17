var Beach;
(function (Beach) {
    window.addEventListener("load", hndlLoad);
    var canvas;
    var crc2;
    function hndlLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        skyGradient();
        seaGradient();
        beachGradient();
    }
    function skyGradient() {
        var grd = crc2.createLinearGradient(750, 0, 750, 600);
        grd.addColorStop(0, "#004bc2");
        grd.addColorStop(1, "#9dcdfc");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 750, 600);
        cloud();
    }
    function seaGradient() {
        var grd = crc2.createLinearGradient(0, 600, 0, 700);
        grd.addColorStop(0, "#215291");
        grd.addColorStop(1, "#7adbdf");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 600, 750, 700);
    }
    function beachGradient() {
        var grd = crc2.createLinearGradient(0, 700, 0, 1334);
        grd.addColorStop(1, "#afabb0");
        grd.addColorStop(0.5, "#e8e1dd");
        grd.addColorStop(0, "#f4f2f4");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 700, 750, 1334);
    }
    function cloud() {
        for (var i = 1; i <= 10; i++) {
            var posX = randomizerXClouds();
            var posY = randomizerYClouds();
            var rndmScale = randomizerScale();
            crc2.save();
            crc2.translate(posX, posY);
            crc2.scale(rndmScale, rndmScale);
            crc2.beginPath();
            crc2.bezierCurveTo(100, 0, -120, 10, 200, 20);
            crc2.bezierCurveTo(400, 20, 400, 10, 350, 0);
            crc2.bezierCurveTo(290, -200, 180, -30, 200, -30);
            crc2.bezierCurveTo(200, -50, 110, -75, 100, 0);
            crc2.closePath();
            var grd = crc2.createRadialGradient(280, 60, 1, 280, 60, 400);
            grd.addColorStop(0, "#778bac");
            grd.addColorStop(1, "#d3d4e3");
            crc2.fillStyle = grd;
            crc2.fill();
            crc2.restore();
        }
    }
    function randomizerXClouds() {
        return (Math.floor(Math.random() * (500 - 10) + 10));
    }
    function randomizerYClouds() {
        return (Math.floor(Math.random() * (570 - 100) + 100));
    }
    function randomizerScale() {
        return (Math.random() * (1 - 0.25) + 0.25);
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=StrandCanvas.js.map