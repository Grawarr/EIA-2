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
        boat();
    }
    function beachGradient() {
        var grd = crc2.createLinearGradient(0, 700, 0, 1334);
        grd.addColorStop(1, "#afabb0");
        grd.addColorStop(0.5, "#e8e1dd");
        grd.addColorStop(0, "#f4f2f4");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 700, 750, 1334);
        // debugger;
        beachGirl();
        bush();
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
    function beachGirl() {
        var posX = randomizerXClouds();
        var posY = randomizerYGirl();
        var rndmScale = randomizerGirlScale();
        crc2.save();
        crc2.translate(posX, posY);
        crc2.scale(rndmScale, rndmScale);
        var grd = crc2.createLinearGradient(0, 50, 0, 200);
        grd.addColorStop(1, "#e69a6a");
        grd.addColorStop(0, "#844731");
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(105.018320, 157.454610);
        crc2.bezierCurveTo(101.922340, 163.646570, 108.673190, 194.501450, 107.585340, 215.170680);
        crc2.bezierCurveTo(107.069340, 224.974620, 120.227260, 223.426630, 121.259260, 218.008660);
        crc2.bezierCurveTo(122.291250, 212.590690, 132.265390, 200.896110, 126.419220, 148.865090);
        crc2.bezierCurveTo(123.839240, 125.903230, 105.018320, 157.454610, 105.018320, 157.454610);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = 'rgb(25, 19, 9)';
        crc2.lineWidth = 0.059552;
        crc2.moveTo(103.211150, 155.341217);
        crc2.bezierCurveTo(104.420206, 155.341217, 105.400339, 155.902752, 105.400339, 156.595440);
        crc2.bezierCurveTo(105.400339, 157.288128, 104.420206, 157.849663, 103.211150, 157.849663);
        crc2.bezierCurveTo(102.002094, 157.849663, 101.021961, 157.288128, 101.021961, 156.595440);
        crc2.bezierCurveTo(101.021961, 155.902752, 102.002094, 155.341217, 103.211150, 155.341217);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(77.596382, 80.162095);
        crc2.bezierCurveTo(78.326113, 93.844535, 91.096384, 113.912100, 86.353141, 126.317500);
        crc2.bezierCurveTo(84.004000, 132.461410, 117.281840, 137.221250, 115.907200, 126.682360);
        crc2.bezierCurveTo(114.265310, 114.094520, 125.940970, 99.324385, 125.940980, 89.648585);
        crc2.bezierCurveTo(125.940990, 81.439125, 77.596382, 80.162095, 77.596382, 80.162095);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(101.531540, 157.863730);
        crc2.bezierCurveTo(105.143520, 162.765700, 96.396202, 199.950390, 96.366207, 217.688070);
        crc2.bezierCurveTo(96.360007, 221.369960, 82.692289, 221.300040, 81.402297, 215.624080);
        crc2.bezierCurveTo(80.112306, 209.948120, 74.721455, 179.696310, 78.947516, 144.479110);
        crc2.bezierCurveTo(80.495505, 131.579190, 101.531540, 157.863730, 101.531540, 157.863730);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(87.203464, 123.581240);
        crc2.bezierCurveTo(76.109534, 138.803140, 77.185940, 156.843830, 85.913472, 160.991010);
        crc2.bezierCurveTo(99.432806, 167.415180, 102.941370, 156.347040, 102.941370, 156.347040);
        crc2.bezierCurveTo(102.941370, 156.347040, 110.716830, 167.386850, 122.033250, 160.991010);
        crc2.bezierCurveTo(131.704410, 155.525040, 124.355240, 136.481160, 114.551300, 123.323240);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(78.431519, 84.365485);
        crc2.bezierCurveTo(72.497555, 74.303545, 73.013551, 38.699762, 74.561543, 35.861781);
        crc2.bezierCurveTo(76.109533, 33.023796, 78.947514, 28.637825, 82.559492, 37.409770);
        crc2.bezierCurveTo(86.171470, 46.181716, 88.493456, 80.495505, 86.945466, 85.139475);
        crc2.bezierCurveTo(85.397477, 89.783445, 78.431519, 84.365485, 78.431519, 84.365485);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.061489;
        crc2.moveTo(77.659776, 31.990626);
        crc2.bezierCurveTo(89.896798, 31.768206, 111.831080, 36.661462, 114.601730, 37.773565);
        crc2.bezierCurveTo(117.372370, 38.885669, 120.373910, 36.883883, 121.759230, 37.328725);
        crc2.bezierCurveTo(123.144550, 37.773565, 124.760760, 44.223765, 123.144550, 46.003130);
        crc2.bezierCurveTo(121.528340, 47.782496, 115.987050, 44.223765, 113.678180, 44.001344);
        crc2.bezierCurveTo(111.369310, 43.778924, 92.436556, 43.334081, 81.584859, 40.442614);
        crc2.bezierCurveTo(70.733162, 37.551145, 77.659776, 31.990626, 77.659776, 31.990626);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(125.387240, 87.977465);
        crc2.bezierCurveTo(131.063200, 106.295340, 133.901180, 118.163270, 134.417180, 127.967210);
        crc2.bezierCurveTo(134.933180, 137.771150, 129.773210, 134.417170, 127.709220, 130.547190);
        crc2.bezierCurveTo(125.645230, 126.677220, 119.711270, 99.329385, 119.453270, 95.975415);
        crc2.bezierCurveTo(119.195270, 92.621435, 125.387240, 87.977465, 125.387240, 87.977465);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(133.385180, 124.613230);
        crc2.bezierCurveTo(142.673130, 138.545150, 147.833100, 154.025050, 148.349090, 155.573040);
        crc2.bezierCurveTo(148.865090, 157.121030, 152.582840, 160.245390, 152.993060, 162.023000);
        crc2.bezierCurveTo(154.541050, 168.730960, 149.654470, 177.443150, 148.349090, 171.568940);
        crc2.bezierCurveTo(147.317090, 166.924970, 145.330810, 160.966110, 144.221120, 157.637020);
        crc2.bezierCurveTo(140.609150, 146.801090, 131.063200, 143.963110, 128.225210, 133.385170);
        crc2.bezierCurveTo(125.387230, 122.807240, 133.385180, 124.613230, 133.385180, 124.613230);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = 'rgb(251, 248, 243)';
        crc2.lineWidth = 0.062251;
        crc2.moveTo(84.268730, 103.549200);
        crc2.bezierCurveTo(85.074546, 103.248500, 86.777250, 102.959980, 89.787444, 102.743600);
        crc2.bezierCurveTo(92.797639, 102.527220, 97.115120, 102.382960, 102.420940, 102.767700);
        crc2.bezierCurveTo(107.726760, 103.152430, 114.020550, 104.066070, 117.106540, 104.643130);
        crc2.bezierCurveTo(120.192530, 105.220190, 120.070910, 105.460620, 116.908850, 105.148030);
        crc2.bezierCurveTo(113.746780, 104.835450, 107.544200, 103.969900, 101.493450, 103.765500);
        crc2.bezierCurveTo(95.442695, 103.561110, 89.544165, 104.017920, 86.549147, 104.090190);
        crc2.bezierCurveTo(83.554130, 104.162490, 83.462914, 103.849900, 84.268730, 103.549210);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.070004;
        crc2.moveTo(100.619390, 41.795744);
        crc2.bezierCurveTo(92.879430, 40.505753, 83.333488, 52.373677, 84.623480, 68.885577);
        crc2.bezierCurveTo(85.913472, 85.397475, 90.557444, 101.393370, 103.199370, 104.747350);
        crc2.bezierCurveTo(115.841290, 108.101330, 118.937280, 107.327330, 124.097240, 112.487310);
        crc2.bezierCurveTo(129.866250, 118.256330, 110.566850, 86.417505, 114.809300, 65.531597);
        crc2.bezierCurveTo(117.687380, 51.362589, 112.229320, 43.343734, 100.619390, 41.795744);
        crc2.closePath();
        crc2.fillStyle = "#431e15";
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.077799;
        crc2.moveTo(84.003711, 213.434810);
        crc2.bezierCurveTo(75.101162, 225.846080, 87.395157, 256.098560, 87.819089, 259.201380);
        crc2.bezierCurveTo(88.243020, 262.304200, 86.123364, 269.673400, 85.275504, 275.879050);
        crc2.bezierCurveTo(84.427640, 282.084670, 92.906257, 281.308970, 97.569498, 281.308970);
        crc2.bezierCurveTo(102.232740, 281.308970, 94.601982, 269.285550, 96.721634, 262.692060);
        crc2.bezierCurveTo(98.841290, 256.098560, 94.601982, 249.117220, 96.297702, 240.584480);
        crc2.bezierCurveTo(97.993426, 232.051720, 97.569498, 221.579710, 95.025911, 211.495540);
        crc2.bezierCurveTo(92.482326, 201.411390, 84.003711, 213.434810, 84.003711, 213.434810);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.lineWidth = 0.077425;
        crc2.moveTo(120.448890, 213.855850);
        crc2.bezierCurveTo(129.266130, 226.267120, 117.089940, 256.519600, 116.670080, 259.622420);
        crc2.bezierCurveTo(116.250210, 262.725240, 118.349560, 270.094440, 119.189290, 276.300090);
        crc2.bezierCurveTo(120.029020, 282.505710, 111.631660, 281.730010, 107.013100, 281.730010);
        crc2.bezierCurveTo(102.394550, 281.730010, 109.952190, 269.706590, 107.852850, 263.113100);
        crc2.bezierCurveTo(105.753500, 256.519600, 109.952190, 249.538260, 108.272710, 241.005520);
        crc2.bezierCurveTo(106.593240, 232.472760, 107.013100, 222.000750, 109.532320, 211.916580);
        crc2.bezierCurveTo(112.051520, 201.832430, 120.448890, 213.855850, 120.448890, 213.855850);
        crc2.closePath();
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = 'rgb(251, 248, 243)';
        crc2.lineWidth = 0.070004;
        crc2.moveTo(102.812370, 157.443530);
        crc2.bezierCurveTo(101.651380, 139.383650, 94.425863, 135.413020, 81.551686, 134.481680);
        crc2.bezierCurveTo(79.657012, 134.344620, 91.653938, 131.901690, 101.715880, 132.095190);
        crc2.bezierCurveTo(111.777810, 132.288690, 115.326890, 133.505010, 121.323750, 134.675170);
        crc2.bezierCurveTo(124.350000, 135.265680, 102.959050, 132.853190, 103.392870, 157.572530);
        crc2.bezierCurveTo(103.398870, 157.928420, 102.812370, 157.443530, 102.812370, 157.443530);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.restore();
    }
    function randomizerYGirl() {
        return (Math.floor(Math.random() * (1000 - 600) + 600));
    }
    function randomizerGirlScale() {
        return (Math.random() * (2 - 0.75) + 0.75);
    }
    function bush() {
        var j = 0;
        for (var i = 1; i <= 2; i++) {
            crc2.save();
            crc2.translate(-50 + j, 1334);
            crc2.beginPath();
            crc2.bezierCurveTo(-50, 0, -50, -400, 75, -250);
            crc2.bezierCurveTo(200, -275, 150, -150, 175, -175);
            crc2.bezierCurveTo(175, -175, 275, -200, 250, -75);
            crc2.bezierCurveTo(250, -100, 325, -50, 300, 0);
            crc2.closePath();
            var grd = crc2.createRadialGradient(50, 0, 1, 50, 0, 300);
            grd.addColorStop(0, "#233105");
            grd.addColorStop(1, "#7a850e");
            crc2.fillStyle = grd;
            crc2.fill();
            crc2.restore();
            crc2.scale(-1, 1);
            j += -750;
        }
    }
    function boat() {
        for (var i = 1; i <= 3; i++) {
            var posX = randomizerXClouds();
            crc2.save();
            crc2.translate(posX, 550);
            crc2.scale(0.25, 0.25);
            crc2.beginPath();
            crc2.fillStyle = 'rgb(249, 249, 249)';
            crc2.lineWidth = 0.070004;
            crc2.moveTo(23.226222, 206.334570);
            crc2.bezierCurveTo(23.818057, 131.257640, 74.258034, 81.305714, 133.832490, 33.944325);
            crc2.bezierCurveTo(98.880841, 148.502470, 137.337190, 219.356990, 140.506050, 225.422800);
            crc2.bezierCurveTo(143.128820, 230.443300, 100.159370, 196.522260, 23.226222, 206.334570);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = 'rgb(249, 249, 249)';
            crc2.lineWidth = 0.070004;
            crc2.moveTo(17.878378, 214.540540);
            crc2.lineTo(134.635130, 229.864860);
            crc2.lineTo(132.810810, 236.432430);
            crc2.lineTo(29.554053, 236.432430);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = 'rgb(249, 249, 249)';
            crc2.lineWidth = 0.070004;
            crc2.moveTo(82.094595, 229.135130);
            crc2.lineTo(86.108107, 171.486480);
            crc2.lineTo(89.391890, 171.121620);
            crc2.lineTo(85.378378, 229.864860);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }
    }
})(Beach || (Beach = {}));
//#e69a6a #844731
//# sourceMappingURL=StrandCanvas.js.map