function findIndex(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }

    return "not found";
}

console.log(findIndex([5, 10, 15, 20], 15));  //2
console.log(findIndex([5, 10, 15, 20], 25));  //not found