var zufallsGedicht;
(function (zufallsGedicht) {
    window.addEventListener("load", bliBlaBlub);
    console.log("Weisheiten des Tages:");
    //Bausteine
    var subject = ["Bier", "Studentenfutter", "Knoblauch", "Leidenschaft", "Wein", "Quellwasser"];
    var praedikat = ["passt zu", "gehört in", "darf Niemals auf", "ist eigentlich", "verfeinert", "zerstört"];
    var objekt = ["Nasi Goreng", "Pizza", "Mensaessen", "Falafel Dürüm", "Suppe", "Grillfleisch"];
    var subjectCopy = [];
    var praedikatCopy = [];
    var objektCopy = [];
    function bliBlaBlub() {
        subjectCopy = subject.concat([]);
        praedikatCopy = praedikat.concat([]);
        objektCopy = objekt.concat([]);
        //randomizer
        function getRandom() {
            return Math.floor(Math.random() * subjectCopy.length);
        }
        function getVerse(_subject, _praedikat, _objekt) {
            var subIndex = getRandom();
            var preIndex = getRandom();
            var objIndex = getRandom();
            //sinnvolle Syntax
            var line = _subject[subIndex] + " " + _praedikat[preIndex] + " " + _objekt[objIndex];
            _subject.splice(subIndex, 1);
            _praedikat.splice(preIndex, 1);
            _objekt.splice(objIndex, 1);
            return line;
        }
        //for-Schleife
        for (var i = subject.length; i > 0; i--) {
            var anzeige = getVerse(subjectCopy, praedikatCopy, objektCopy);
            console.log(anzeige);
        }
    }
})(zufallsGedicht || (zufallsGedicht = {}));
//Nachschlageseiten:
//https://www.tutorialspoint.com/typescript
//https://developer.mozilla.org/de/docs/Web/JavaScript
//# sourceMappingURL=Script.js.map