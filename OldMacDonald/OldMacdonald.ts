namespace MacDonaldsFarmhouse {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        console.log("The Barn holds " + barn.wheat + "kg of wheat, " + barn.seed + "kg of seed, " + barn.evidence + "kg of evidence, " + barn.meat + "kg of meat, and " + barn.hay + "kg of hay.");   

        let cow: Animal = new Animal("cow", "Berta", "wheat", 15, "Muh");
        cow.eat();
        cow.sing();

        let chicken: Animal = new Animal("chicken", "Robot", "seed", 5, "Gak");
        chicken.eat();
        chicken.sing();

        let pig: Animal = new Animal("pig", "Waddles", "evidence", 20, "Oink");
        pig.eat();
        pig.sing();

        let dog: Animal = new Animal("dog", "Bolle", "meat", 10, "Woof");
        dog.eat();
        dog.sing();

        let donkey: Animal = new Animal("donkey", "Donkey", "Hay", 25, "I-Ah");
        donkey.eat();
        donkey.sing();
    }

}