let c1= {
    name: "cinema 1", 
    location: "north edsa", 
    capacity: 500
}

function show(movie){
    return this.name + " is showing " + movie;
}

console.log(show.call(c1, "End Game"));