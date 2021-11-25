class Rectangle{
    constructor(length, height){
        this.length = length;
        this.height = height;
    }
    setLength(length){
        this.length = length;
    }
    getLength() {
        return this.length;
    }
    setHeight(height){
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
    computeArea(){
        return this.height * this.length;
    }
}

let reactangle1 = new Rectangle(3, 3);
console.log("AREA: " + reactangle1.computeArea());