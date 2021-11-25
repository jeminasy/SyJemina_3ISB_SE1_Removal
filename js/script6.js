class School{
    constructor(name, location, population){
        this.name = name;
        this.location = location;
        this.population = population;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setLocation(location){
        this.location = location;
    }
    getLocation(){
        return this.location;
    }
    setPopulation(population){
        this.population = population;
    }
    getLocation(){
        return this.population;
    }
    displayInfo() {
        console.log(`${this.name}, ${this.location}, ${this.population}`)
    }
}

function numPrograms(programs) {
    return programs;
}

population.prototype.show = function(population) {
    this.population = population;
}