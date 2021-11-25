let numbers = [4, 6, 2, 9, 5];

reduce = (numbers) => {
    var product = 1;
    for(var x=0; x<numbers.length; x++){
        product = product * numbers[x];
    }
    return product;
}

console.log(reduce(numbers));
