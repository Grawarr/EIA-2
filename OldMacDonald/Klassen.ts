namespace MacDonaldsFarmhouse {

    interface Barn {
        [key: string]: number;
    }

    export let barn: Barn = {
        "wheat": 100, "seed": 100, "evidence": 100, "meat": 100, "hay": 100,
    }

    let preferredFood: string;

    export class Animal {
        type: string;
        name: string;
        preferredFood: string;
        hungerLevel: number;
        sound: string;
        constructor(_type: string, _name: string, _preferredFood: string, _hungerLevel: number, _sound: string) {
            this.name = _name;
            this.type = _type;
            this.preferredFood = _preferredFood;
            this.hungerLevel = _hungerLevel;
            this.sound = _sound;
        }

        eat(): void {
            preferredFood = String(this.preferredFood);

            console.log(this.name + " ate " + this.hungerLevel + "kg of " + this.preferredFood)

            barn[preferredFood] = barn[preferredFood] - (this.hungerLevel);

            console.log("There are " + barn[preferredFood] + "kg of " + this.preferredFood + " remaining");
        }

        sing(): void {
            console.log("Old MacDonald had a Farm E-I-E-I-O And on that farm there is a " + this.type + " E-I-E-I-O  With a " + this.sound + this.sound + " here And a " + this.sound + this.sound + " there here a " + this.sound + " there a " + this.sound + " Everywhere a " + this.sound + this.sound + " Old MacDonald had a farm E-I-E-I-O")
        }
    }

}