window.addEventListener("load", function () {
    //Declaring three Arrays to sort out choosing the amount of cards and having a duplicate of each one
    var possibleCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    var amountOfPairs = [];
    var pairs = duplicate();
    console.log(possibleCards);
    console.log(amountOfPairs);
    console.log(pairs);
    //duplicate possibleCards into "pairs" Array
    function duplicate() {
        return (possibleCards.concat(possibleCards));
    }
    //shuffle cards
    function shuffle(a) {
        var _a;
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
    }
    shuffle(pairs);
    //push into HTML
    for (var referenceNumber = 0; referenceNumber < pairs.length; referenceNumber++) {
        var wrapper = this.document.getElementById("wrapper");
        var pushIntoAction = document.createElement("div");
        pushIntoAction.classList.add("cards");
        wrapper.appendChild(pushIntoAction);
        pushIntoAction.innerHTML = pairs[referenceNumber];
    }
    //reveal cards
    wrapper.addEventListener("click", handleClick);
    var handleClick = 0;
});
//# sourceMappingURL=MemoryScript.js.map