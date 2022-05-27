var BeachParadise;
(function (BeachParadise) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("BeachAnimation starting");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        BeachParadise.crc2.fillStyle = "black";
        BeachParadise.crc2.strokeStyle = "red";
        var cloud = new BeachParadise.Cloud(1);
        console.log(cloud);
        cloud.draw();
    }
})(BeachParadise || (BeachParadise = {}));
//# sourceMappingURL=Main.js.map