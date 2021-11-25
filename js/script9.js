class Vehicle{
    constructor(size, color, weight){
        this.size = size;
        this.color = color;
        this.weight = weight;
    }
    setSize(size) {
        this.size = size;
    }
    getSize() {
        return this.size;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    travel(distance) {
        console.log(`This car travels ${distance}`);
    }
}

class Car extends Vehicle{
    consructor(model){
        this.model = model;
    }
    setModel(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
    provideComfort() {
        console.log(`${this.model} provides comfort`);
    }
}

const car1 = new Car();
car1.setModel("Model x");
car1.provideComfort();
car1.travel("5 km");