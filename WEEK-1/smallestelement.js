// 4. Find the Smallest Element in an Array

let marks = [12, 50, 62, 20, 50];

// Assume first element is the smallest
let smallest = marks[0];

// Loop through the array starting from index 1
for (let i = 1; i < marks.length; i++) {

    // Check if current element is smaller
    if (marks[i] < smallest) {
        smallest = marks[i];
    }
}

// Display the smallest value
console.log("Smallest element is:", smallest);