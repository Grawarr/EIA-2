//Danke an Ilkan und seine super Bemerkungen im Code
var MemorySettings;
(function (MemorySettings) {
    var startTime;
    var chosen = false;
    var firstCard;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector("#startButton").addEventListener("click", createGame);
    }
    function createGame() {
        var playArea = document.querySelector("#playArea");
        playArea.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        var amountOfPairs = parseInt(formData.get("amountOfPairs").toString());
        var sizeOfCards = formData.get("sizeOfCards") + "px";
        var backgroundColor = formData.get("backgroundColor").toString();
        var cardColor = formData.get("cardColor").toString();
        var textColor = formData.get("textColor").toString();
        var fontFamily = formData.get("fontFamily").toString();
        playArea.style.backgroundColor = backgroundColor;
        var values = [];
        for (var i = 1; i < amountOfPairs + 1; i++) {
            values.push(i);
            values.push(i);
        }
        values = shuffle(values);
        //create Card
        for (var i = 0; i < values.length; i++) {
            createCard(values[i], sizeOfCards, cardColor, textColor, fontFamily);
        }
        startTime = new Date();
        var settings = document.querySelector("#settings");
        settings.classList.add("hidden");
        playArea.classList.remove("hidden");
    }
    function shuffle(x) {
        var _a;
        for (var i = x.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [x[j], x[i]], x[i] = _a[0], x[j] = _a[1];
        }
        return x;
    }
    function createCard(_value, _cardSize, _cardColor, _textColor, _fontFamily) {
        var card = document.createElement("div");
        var playArea = document.querySelector("#playArea");
        playArea.appendChild(card);
        card.classList.add("card");
        card.style.height = _cardSize;
        card.style.width = _cardSize;
        card.style.backgroundColor = _cardColor;
        card.addEventListener("click", turnCard);
        var cardValue = document.createElement("span");
        card.appendChild(cardValue);
        cardValue.innerHTML = _value.toString();
        cardValue.classList.add("hidden");
        cardValue.style.color = _textColor;
        cardValue.style.fontFamily = _fontFamily;
    }
    function turnCard(_event) {
        //no more than two cards choseable
        if (chosen == true) {
            return;
        }
        else {
            var cardChoose_1 = _event.target;
            if (cardChoose_1 == firstCard) {
                return;
            }
            else {
                //first Card chosen
                var cardClicked_1 = cardChoose_1.querySelector("span");
                cardClicked_1.classList.remove("hidden");
                if (firstCard == undefined) {
                    firstCard = cardChoose_1;
                }
                //second Card chosen
                else {
                    var firstCardValue_1 = cardClicked_1.innerHTML;
                    var secondCardClicked_1 = firstCard.querySelector("span");
                    var secondCardValue_1 = secondCardClicked_1.innerHTML;
                    chosen = true;
                    setTimeout(function () {
                        chosen = false;
                        if (firstCardValue_1 == secondCardValue_1) {
                            cardChoose_1.classList.add("invisible");
                            firstCard.classList.add("invisible");
                            var extantCard = document.querySelector(".card:not(.invisible)");
                            if (extantCard == null) {
                                var endTimeStamp = new Date();
                                var durationInMs = endTimeStamp.getTime() - startTime.getTime();
                                var minutes = Math.floor(durationInMs / 60000);
                                var seconds = Math.floor((durationInMs % 60000) / 1000);
                                alert("Du hast " + minutes + "min und " + seconds + "s gebraucht! Um noch einmal zu spielen lade die Seite neu.");
                            }
                        }
                        //if cards not correct set them back to hidden-state
                        else {
                            cardClicked_1.classList.add("hidden");
                            secondCardClicked_1.classList.add("hidden");
                        }
                        firstCard = undefined;
                    }, 1000); //two seconds are too long imo..
                }
            }
        }
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=MemorySettings.js.map