const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];

const compare = (array1, array2) => {
    return array1.length === array2.length &&
    array1.every((item, index) => item === array2[index])
}

console.log(compare(array1, array2));
