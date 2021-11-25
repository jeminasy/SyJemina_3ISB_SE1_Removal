function Rectangle(length, height){
    this.length = length;
    this.height = height;

    this.computeArea = function() {
        console.log(length * height);
    }
}

let reactangle1 = new Rectangle(3, 3);
reactangle1.computeArea();