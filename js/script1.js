function Cat (breed, color, age, gender){
    this.breed = this.breed;
    this.color = this.color;
    this.age = age;
    this.gender = gender;
    this.speak = function () {
        console.log(`Meow...`);
    }
    this.eat = function () {
        console.log(`I love to eat tuna`);
    }
}

let tintin = new Cat("Ragdoll", "Calico", 1, "female");
