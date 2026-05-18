//DAY1
//Write a function that receives an array as arg and return their sum
function sumArray(arr) {//fuctn with parameter
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([10, 20, 30, 40])); // 100