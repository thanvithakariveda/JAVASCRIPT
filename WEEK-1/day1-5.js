//DAY1
//5. Write a function that receives 3 number args and  return the big numberfunction findBiggest(a, b, c) {
    function findBiggest(a, b, c) {//functn keyword
        let bigNumber = a;//where a,b,c are parameters

    if (b > bigNumber) {
        bigNumber = b;
    }

    if (c > bigNumber) {
        biggest = c;
    }

    return bigNumber;
}
console.log(findBiggest(50, 25, 15)); 
