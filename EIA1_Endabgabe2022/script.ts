namespace learningSpanish {
    window.addEventListener("load", hndLoad);

    let lvlButtons: HTMLDivElement;
    let lvlBtnOne: HTMLButtonElement;
    let lvlBtnTwo: HTMLButtonElement;
    let lvlBtnThree: HTMLButtonElement;

    let lvlOne: string[] = [];
    let lvlTwo: string [] = [];
    let lvlThree: string [] = [];

    let germanSentenceCollection: string [] = [];
    let germanSentenceOutput: HTMLDivElement;

    let tmpSelectWords: string[] = [];
    let tmpSelectWordsOutput: HTMLDivElement;


    function hndLoad(): void {
        lvlBtnOne = <HTMLButtonElement>document.getElementById("lvlBtnOne");
        lvlBtnTwo = <HTMLButtonElement>document.getElementById("lvlBtnTwo");
        lvlBtnThree = <HTMLButtonElement>document.getElementById("lvlBtnThree");
        lvlButtons = <HTMLDivElement>document.getElementById("lvlButtons");
        lvlButtons.addEventListener("click", hndClick);

        germanSentenceCollection = ["Ich fahre ein Auto", "Ich sitze am Dock der Bucht", "Schaue der Zeit beim vergehen zu"];
        germanSentenceOutput = <HTMLDivElement>document.getElementById("germanSentence")

        lvlOne = ["Im", "driving", "a", "car"];
        lvlTwo = ["Im", "sittin", "on", "the", "dock", "of", "the", "bay"];
        lvlThree = ["Watching", "the", "time", "roll", "away"];

        tmpSelectWords = [];
        tmpSelectWordsOutput = <HTMLDivElement>document.getElementById("randomizedSpanishSentence");
    }

    function hndClick(_event: Event): void {
        let target: EventTarget = <EventTarget> _event.target;
        console.log(target);

        if (target == lvlBtnOne) {
            console.log("You pressed button One");
            paste(0);
        }

        if (target == lvlBtnTwo) {
            console.log("You pressed button Two");
            paste(1);
        }

        if (target == lvlBtnThree) {
            console.log("You pressed button Three");
            paste(2);
        }

    }

    function paste(_i: number): void {
        germanSentenceOutput.innerHTML = germanSentenceCollection[_i];
        tmpSelectWords.splice(0, 10);
        tmpSelectWords.push(lvlOne[0]);
        console.log(tmpSelectWords);
    }
}