var BeachParadise;
(function (BeachParadise) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("BeachAnimation starting");
        BeachParadise.canvas = document.querySelector("canvas");
        BeachParadise.crc2 = BeachParadise.canvas.getContext("2d");
        skyGradient();
        seaGradient();
        var cloud = new BeachParadise.Cloud(1);
        console.log("cloud");
        cloud.draw();
        var boat = new BeachParadise.Boat(1);
        console.log("boat");
        boat.draw();
        beachGradient();
        var beachGirl = new BeachParadise.BeachGirl(1);
        console.log("beachgirl");
        beachGirl.draw();
        bush();
    }
    function randomizerXClouds() {
        return (Math.floor(Math.random() * (500 - 10) + 10));
    }
    BeachParadise.randomizerXClouds = randomizerXClouds;
    function randomizerYClouds() {
        return (Math.floor(Math.random() * (570 - 100) + 100));
    }
    BeachParadise.randomizerYClouds = randomizerYClouds;
    function randomizerScale() {
        return (Math.random() * (1 - 0.25) + 0.25);
    }
    BeachParadise.randomizerScale = randomizerScale;
    function randomizerYGirl() {
        return (Math.floor(Math.random() * (1000 - 600) + 600));
    }
    BeachParadise.randomizerYGirl = randomizerYGirl;
    function randomizerGirlScale() {
        return (Math.random() * (2 - 0.75) + 0.75);
    }
    BeachParadise.randomizerGirlScale = randomizerGirlScale;
    function skyGradient() {
        var grd = BeachParadise.crc2.createLinearGradient(750, 0, 750, 600);
        grd.addColorStop(0, "#004bc2");
        grd.addColorStop(1, "#9dcdfc");
        BeachParadise.crc2.fillStyle = grd;
        BeachParadise.crc2.fillRect(0, 0, 750, 600);
    }
    function seaGradient() {
        var grd = BeachParadise.crc2.createLinearGradient(0, 600, 0, 700);
        grd.addColorStop(0, "#215291");
        grd.addColorStop(1, "#7adbdf");
        BeachParadise.crc2.fillStyle = grd;
        BeachParadise.crc2.fillRect(0, 600, 750, 700);
    }
    function beachGradient() {
        var grd = BeachParadise.crc2.createLinearGradient(0, 700, 0, 1334);
        grd.addColorStop(1, "#afabb0");
        grd.addColorStop(0.5, "#e8e1dd");
        grd.addColorStop(0, "#f4f2f4");
        BeachParadise.crc2.fillStyle = grd;
        BeachParadise.crc2.fillRect(0, 700, 750, 1334);
    }
    function bush() {
        var j = 0;
        for (var i = 1; i <= 2; i++) {
            BeachParadise.crc2.save();
            BeachParadise.crc2.translate(-50 + j, 1334);
            BeachParadise.crc2.beginPath();
            BeachParadise.crc2.bezierCurveTo(-50, 0, -50, -400, 75, -250);
            BeachParadise.crc2.bezierCurveTo(200, -275, 150, -150, 175, -175);
            BeachParadise.crc2.bezierCurveTo(175, -175, 275, -200, 250, -75);
            BeachParadise.crc2.bezierCurveTo(250, -100, 325, -50, 300, 0);
            BeachParadise.crc2.closePath();
            var grd = BeachParadise.crc2.createRadialGradient(50, 0, 1, 50, 0, 300);
            grd.addColorStop(0, "#233105");
            grd.addColorStop(1, "#7a850e");
            BeachParadise.crc2.fillStyle = grd;
            BeachParadise.crc2.fill();
            BeachParadise.crc2.restore();
            BeachParadise.crc2.scale(-1, 1);
            j += -750;
        }
    }
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Main.js.map