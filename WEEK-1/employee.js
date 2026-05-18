// DAY - 2

/*
1. Insert new employee at 2nd position
2. Remove employee with name "Kiran"
3. Change Sneha's last mark from 95 to 75
*/

// Employee Array
const employees = [

    { eno: 101, name: "Ravi", marks: [78, 82, 91] },

    { eno: 102, name: "Bhanu", marks: [65, 70, 68] },

    { eno: 103, name: "Sneha", marks: [88, 92, 95] },

    { eno: 104, name: "Kiran", marks: [55, 60, 58] },

    { eno: 105, name: "Anitha", marks: [90, 85, 87] }

];


// --------------------------------------------------
// 1. Insert new employee at 2nd position
// --------------------------------------------------

employees.splice(2, 0,
    {
        eno: 108,
        name: "vAnitha",
        marks: [0, 5, 7]
    }
);

console.log("After inserting new employee:");
console.log(employees);


// --------------------------------------------------
// 2. Remove employee with name "Kiran"
// --------------------------------------------------

// Kiran is at index 4 after insertion
employees.splice(4, 1);

console.log("After removing Kiran:");
console.log(employees);


// --------------------------------------------------
// 3. Change Sneha's last mark from 95 to 75
// --------------------------------------------------

// Sneha is now at index 3
employees.splice(3, 1,
    {
        eno: 103,
        name: "Sneha",
        marks: [88, 92, 75]
    }
);

console.log("After updating Sneha's marks:");
console.log(employees);