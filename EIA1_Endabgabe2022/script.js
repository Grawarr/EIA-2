var learningSpanish;
(function (learningSpanish) {
    window.addEventListener("load", hndLoad);
    var lvlButtons;
    var lvlBtnOne;
    var lvlBtnTwo;
    var lvlBtnThree;
    var lvlOne = [];
    var lvlTwo = [];
    var lvlThree = [];
    var germanSentenceCollection = [];
    var germanSentenceOutput;
    var tmpSelectWords = [];
    var tmpSelectWordsOutput;
    function hndLoad() {
        lvlBtnOne = document.getElementById("lvlBtnOne");
        lvlBtnTwo = document.getElementById("lvlBtnTwo");
        lvlBtnThree = document.getElementById("lvlBtnThree");
        lvlButtons = document.getElementById("lvlButtons");
        lvlButtons.addEventListener("click", hndClick);
        germanSentenceCollection = ["Ich fahre ein Auto", "Ich sitze am Dock der Bucht", "Schaue der Zeit beim vergehen zu"];
        germanSentenceOutput = document.getElementById("germanSentence");
        lvlOne = ["Im", "driving", "a", "car"];
        lvlTwo = ["Im", "sittin", "on", "the", "dock", "of", "the", "bay"];
        lvlThree = ["Watching", "the", "time", "roll", "away"];
        tmpSelectWords = [];
        tmpSelectWordsOutput = document.getElementById("randomizedSpanishSentence");
    }
    function hndClick(_event) {
        var target = _event.target;
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
    function paste(_i) {
        germanSentenceOutput.innerHTML = germanSentenceCollection[_i];
        tmpSelectWords.splice(0, 10);
        tmpSelectWords.push(lvlOne[0]);
        console.log(tmpSelectWords);
    }
})(learningSpanish || (learningSpanish = {}));
//# sourceMappingURL=script.js.map