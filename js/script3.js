function middle(array) {
    if (array.length%2 !== 0){
        return array[Math.floor(array.length/2)];
    } else {
        return -1;
    }
}

let arr1 = [12, 56, 23, 67];
let arr2 = [12, 56, 23, 67, 39];
console.log(middle(arr1));
console.log(middle(arr2));