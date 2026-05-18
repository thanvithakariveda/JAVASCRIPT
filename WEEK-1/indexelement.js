// Function to find the index of an element in an array

function findIndex(arr, searchElement) {

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {

        // Check if current element matches searchElement
        if (arr[i] === searchElement) {

            // Return index if found
            return i;
        }
    }

    // Return message if element is not found
    return "not found";
}


// Function Calls

console.log(findIndex([5, 10, 15, 20], 15));

console.log(findIndex([5, 10, 15, 20], 25));