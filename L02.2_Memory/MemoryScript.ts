window.addEventListener("load", function(){
     //Declaring three Arrays to sort out choosing the amount of cards and having a duplicate of each one
     const possibleCards: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"]
     let amountOfPairs: string[] = []
     let pairs: string[] = duplicate();
     console.log(possibleCards)
     console.log(amountOfPairs)
     console.log(pairs)
     //duplicate possibleCards into "pairs" Array
     function duplicate() {
        return(possibleCards.concat(possibleCards));
     }
     //shuffle cards
     function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    shuffle(pairs);
    //push into HTML
    for( let referenceNumber: number = 0; referenceNumber < pairs.length; referenceNumber++) {
        let wrapper: HTMLDivElement = <HTMLDivElement> this.document.getElementById("wrapper");
        let pushIntoAction: HTMLElement = document.createElement("div");
        pushIntoAction.classList.add("cards");
        wrapper.appendChild(pushIntoAction);
        pushIntoAction.innerHTML = pairs[referenceNumber];
    }
    //reveal cards
    wrapper.addEventListener("click", handleClick)
    let handleClick = 0
});