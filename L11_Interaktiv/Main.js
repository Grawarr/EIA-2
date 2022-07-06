var BeachParadise;
(function (BeachParadise) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let boats = [];
    let beachGirls = [];
    function handleLoad() {
        BeachParadise.canvas = document.querySelector("canvas");
        BeachParadise.crc2 = BeachParadise.canvas.getContext("2d");
        skyGradient();
        seaGradient();
        beachGradient();
        let imgData = BeachParadise.crc2.getImageData(0, 0, 750, 1334);
        cloud(5);
        boat(3);
        beachGirl(1);
        window.setInterval(update, 100);
        function update() {
            BeachParadise.crc2.clearRect(0, 0, BeachParadise.canvas.width, BeachParadise.canvas.height);
            BeachParadise.crc2.putImageData(imgData, 0, 0);
            for (let boat of boats) {
                boat.move(1 / 50);
                boat.draw();
            }
            for (let cloud of clouds) {
                cloud.move(1 / 50);
                cloud.draw();
            }
            for (let beachGirl of beachGirls) {
                beachGirl.move(1 / 50);
                beachGirl.draw();
            }
            bush();
        }
        BeachParadise.canvas.addEventListener('click', (event) => {
            const rect = BeachParadise.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            console.log(cloud.clickCloud(x, y));
        });
    }
    function skyGradient() {
        let grd = BeachParadise.crc2.createLinearGradient(750, 0, 750, 600);
        grd.addColorStop(0, "#004bc2");
        grd.addColorStop(1, "#9dcdfc");
        BeachParadise.crc2.fillStyle = grd;
        BeachParadise.crc2.fillRect(0, 0, 750, 600);
    }
    function seaGradient() {
        let grd = BeachParadise.crc2.createLinearGradient(0, 600, 0, 700);
        grd.addColorStop(0, "#215291");
        grd.addColorStop(1, "#7adbdf");
        BeachParadise.crc2.fillStyle = grd;
        BeachParadise.crc2.fillRect(0, 600, 750, 700);
    }
    function beachGradient() {
        let grd = BeachParadise.crc2.createLinearGradient(0, 700, 0, 1334);
        grd.addColorStop(1, "#afabb0");
        grd.addColorStop(0.5, "#e8e1dd");
        grd.addColorStop(0, "#f4f2f4");
        BeachParadise.crc2.fillStyle = grd;
        BeachParadise.crc2.fillRect(0, 700, 750, 1334);
    }
    function bush() {
        let j = 0;
        for (let i = 1; i <= 2; i++) {
            BeachParadise.crc2.save();
            BeachParadise.crc2.translate(-50 + j, 1334);
            BeachParadise.crc2.beginPath();
            BeachParadise.crc2.bezierCurveTo(-50, 0, -50, -400, 75, -250);
            BeachParadise.crc2.bezierCurveTo(200, -275, 150, -150, 175, -175);
            BeachParadise.crc2.bezierCurveTo(175, -175, 275, -200, 250, -75);
            BeachParadise.crc2.bezierCurveTo(250, -100, 325, -50, 300, 0);
            BeachParadise.crc2.closePath();
            let grd = BeachParadise.crc2.createRadialGradient(50, 0, 1, 50, 0, 300);
            grd.addColorStop(0, "#233105");
            grd.addColorStop(1, "#7a850e");
            BeachParadise.crc2.fillStyle = grd;
            BeachParadise.crc2.fill();
            BeachParadise.crc2.restore();
            BeachParadise.crc2.scale(-1, 1);
            j += -750;
        }
    }
    function cloud(_n) {
        for (let i = 0; i <= _n; i++) {
            let cloud = new BeachParadise.Cloud(1);
            clouds.push(cloud);
            // console.log("function cloud wird ausgeführt")
        }
    }
    function boat(_n) {
        for (let i = 0; i < _n; i++) {
            let boat = new BeachParadise.Boat(1);
            boats.push(boat);
            // console.log("function boat ausgeführt");
        }
    }
    function beachGirl(_n) {
        for (let i = 0; i < _n; i++) {
            let beachGirl = new BeachParadise.BeachGirl(2);
            beachGirls.push(beachGirl);
            console.log("function beachGirl ausgeführt");
        }
    }
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Main.js.map