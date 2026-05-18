// DAY-1
// 2. Find the biggest number among three numbers

function bigNumber(a, b, c) {

    // Check if 'a' is greater than both 'b' and 'c'
    if (a > b && a > c) {
        return a;
    }

    // Check if 'b' is greater than both 'a' and 'c'
    else if (b > a && b > c) {
        return b;
    }

    // Otherwise 'c' is the biggest
    else {
        return c;
    }
}

// Function call
let result = bigNumber(10, 2, 6);

// Display result
console.log("Biggest number is:", result);


// --------------------------------------------
// Another method using normal if-else
// --------------------------------------------

let d = 5;
let t = 10;
let c = 15;

// Check if d is biggest
if (d > t && d > c) {
    console.log("Bigger number is d:", d);
}

// Check if t is biggest
else if (t > d && t > c) {
    console.log("Bigger number is t:", t);
}

// Otherwise c is biggest
else {
    console.log("Bigger number is c:", c);
}