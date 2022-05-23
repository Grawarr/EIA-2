var MacDonaldsFarmhouse;
(function (MacDonaldsFarmhouse) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("The Barn holds " + MacDonaldsFarmhouse.barn.wheat + "kg of wheat, " + MacDonaldsFarmhouse.barn.seed + "kg of seed, " + MacDonaldsFarmhouse.barn.evidence + "kg of evidence, " + MacDonaldsFarmhouse.barn.meat + "kg of meat, and " + MacDonaldsFarmhouse.barn.hay + "kg of hay.");
        var cow = new MacDonaldsFarmhouse.Animal("cow", "Berta", "wheat", 15, "Muh");
        cow.eat();
        cow.sing();
        var chicken = new MacDonaldsFarmhouse.Animal("chicken", "Robot", "seed", 5, "Gak");
        chicken.eat();
        chicken.sing();
        var pig = new MacDonaldsFarmhouse.Animal("pig", "Waddles", "evidence", 20, "Oink");
        pig.eat();
        pig.sing();
        var dog = new MacDonaldsFarmhouse.Animal("dog", "Bolle", "meat", 10, "Woof");
        dog.eat();
        dog.sing();
        var donkey = new MacDonaldsFarmhouse.Animal("donkey", "Donkey", "Hay", 25, "I-Ah");
        donkey.eat();
        donkey.sing();
    }
})(MacDonaldsFarmhouse || (MacDonaldsFarmhouse = {}));
//# sourceMappingURL=OldMacdonald.js.map