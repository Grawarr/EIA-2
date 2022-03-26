namespace zufallsGedicht {
window.addEventListener("load", bliBlaBlub);

console.log("Weisheiten des Tages:")
//Bausteine
let subject: string[] = ["Bier", "Studentenfutter", "Knoblauch", "Leidenschaft", "Wein", "Quellwasser"];
let praedikat: string[] = ["passt zu", "gehört in", "darf Niemals auf", "ist eigentlich", "verfeinert", "zerstört"];
let objekt: string[] = ["Nasi Goreng", "Pizza", "Mensaessen", "Falafel Dürüm", "Suppe", "Grillfleisch"];

let subjectCopy: string[] = [];
let praedikatCopy: string[] = [];
let objektCopy: string[] = [];

function bliBlaBlub(): void {

    subjectCopy = subject.concat([]);
    praedikatCopy = praedikat.concat([]);
    objektCopy = objekt.concat([]);
//randomizer
    function getRandom(): number {
        return Math.floor(Math.random() * subjectCopy.length);
    }

    function getVerse(_subject: string[], _praedikat: string[], _objekt: string[]): string {

        let subIndex: number = getRandom();
        let preIndex: number = getRandom();
        let objIndex: number = getRandom();
//sinnvolle Syntax
        let line: string = _subject[subIndex] + " " + _praedikat[preIndex] + " " + _objekt[objIndex];

        _subject.splice(subIndex, 1);
        _praedikat.splice(preIndex, 1);
        _objekt.splice(objIndex, 1);

        return line;
    }
//for-Schleife
    for (let i: number = subject.length; i > 0; i--) {
        let anzeige: string = getVerse(subjectCopy, praedikatCopy, objektCopy);
        console.log(anzeige);
    }
}
}
//Nachschlageseiten:
//https://www.tutorialspoint.com/typescript
//https://developer.mozilla.org/de/docs/Web/JavaScript