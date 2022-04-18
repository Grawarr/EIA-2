//Danke an Ilkan und seine super Bemerkungen im Code

namespace MemorySettings
{
    let startTime: Date;
    let chosen: boolean = false;
    let firstCard: HTMLDivElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void 
    {
        document.querySelector("#startButton").addEventListener("click", createGame);
    }

    function createGame(): void 
    {
        let playArea: HTMLDivElement = document.querySelector("#playArea");
        playArea.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);

        let amountOfPairs: number = parseInt(formData.get("amountOfPairs").toString());
        let sizeOfCards: string = formData.get("sizeOfCards") + "px";
        let backgroundColor: string = formData.get("backgroundColor").toString();
        let cardColor: string = formData.get("cardColor").toString();
        let textColor: string = formData.get("textColor").toString();
        let fontFamily: string = formData.get("fontFamily").toString();

        playArea.style.backgroundColor = backgroundColor;

        let values: number[] = [];
        for (let i: number = 1; i < amountOfPairs +1; i++) 
        {
            values.push(i);
            values.push(i);
        }

        values = shuffle(values);

        //create Card

        for (let i: number = 0; i < values.length; i++) 
        {
            createCard(values[i], sizeOfCards, cardColor, textColor, fontFamily);
        }

        startTime = new Date();

        let settings: HTMLDivElement = document.querySelector("#settings");
        settings.classList.add("hidden");
        playArea.classList.remove("hidden");
    }

    function shuffle(x: number[]): number[] 
    {
        for (let i: number = x.length - 1; i > 0; i--) 
        {
            const j: number = Math.floor(Math.random() * (i + 1));
            [x[i], x[j]] = [x[j], x[i]];
        }
        return x;
    }

    function createCard(_value: number, _cardSize: string, _cardColor: string, _textColor: string, _fontFamily: string): void 
    {
        let card: HTMLDivElement = document.createElement("div");
        let playArea: HTMLDivElement = document.querySelector("#playArea");

        playArea.appendChild(card);
        card.classList.add("card");
        card.style.height = _cardSize;
        card.style.width = _cardSize;
        card.style.backgroundColor = _cardColor;
        card.addEventListener("click", turnCard);

        let cardValue: HTMLSpanElement = document.createElement("span");
        card.appendChild(cardValue);
        cardValue.innerHTML = _value.toString();
        cardValue.classList.add("hidden");
        cardValue.style.color = _textColor;
        cardValue.style.fontFamily = _fontFamily;
    }

    function turnCard(_event: Event): void 
    {
        //no more than two cards choseable

        if (chosen == true) 
        {
            return;
        }
        else 
        {
            let cardChoose: HTMLDivElement = <HTMLDivElement>_event.target;

            if (cardChoose == firstCard) 
            {
                return;
            } 

            else 
            {
                //first Card chosen

                let cardClicked: HTMLSpanElement = cardChoose.querySelector("span");
                cardClicked.classList.remove("hidden");
                if (firstCard == undefined) 
                {
                    firstCard = cardChoose;
                } 

                //second Card chosen

                else 
                {
                    let firstCardValue: string = cardClicked.innerHTML;
                    let secondCardClicked: HTMLSpanElement = firstCard.querySelector("span");
                    let secondCardValue: string = secondCardClicked.innerHTML;
                    chosen = true;

                    setTimeout(function (): void 
                    {
                        chosen = false;

                        if (firstCardValue == secondCardValue) 
                        {
                            cardChoose.classList.add("invisible");
                            firstCard.classList.add("invisible");

                            let extantCard: HTMLDivElement = document.querySelector(".card:not(.invisible)");

                            if (extantCard == null) 
                            {
                                let endTimeStamp: Date = new Date();
                                let durationInMs: number = endTimeStamp.getTime() - startTime.getTime();
                                let minutes: number = Math.floor(durationInMs / 60000);
                                let seconds: number = Math.floor((durationInMs % 60000) / 1000);
                                alert("Du hast " + minutes + "min und " + seconds + "s gebraucht! Um noch einmal zu spielen lade die Seite neu.");
                            }
                        }

                        //if cards not correct set them back to hidden-state

                        else 
                        {
                            cardClicked.classList.add("hidden");
                            secondCardClicked.classList.add("hidden");
                        }

                        firstCard = undefined;
                    }, 1000); //two seconds are too long imo..
                }
            }
        }
    }
}