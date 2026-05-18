/*ASSIGNMENT 1:
You are building a shopping cart summary for an e-commerce website.*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// 1. Use filter() to get only inStock products
const cart1=cart.filter((items)=>items.inStock==true)
console.log(cart1)

//2. Use map() to create a new array with:  { name, totalPrice }
const newarr=cart.map(item=>{
   return {name:item.name, totalPrice:(item.price*item.quantity)}
})
console.log(newarr)

//3. Use reduce() to calculate grand total cart value
const grandTotal = cart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);
console.log("Grand Total:", grandTotal);

//4. Use find() to get details of "Mouse"
const mouseDetails = cart.find(item => item.name = "Mouse");
console.log("Mouse Details:", mouseDetails);

 //5. Use findIndex() to find the position of "Keyboard"
 const keyboardIndex = cart.findIndex(item => item.name = "Keyboard");
console.log("Keyboard Index:", keyboardIndex);
//------------------------------------------------------------------------------------
/*assignment 2
Student Performance Dashboard
You are working on a college result analysis system.*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
const passedStudent=students.filter((student)=>student.marks>=40)
console.log(passedStudent)

//2. map() to add a grade field   ≥90 → A,  ≥75 → B, ≥60 → C, else → D*/
 const gradeStudent=students.map(student=>{
    let grade;
    if(student.marks>=90) grade="A"
    else if (student.marks>=75) grade="B"
    else if (student.marks>=60) grade="C"
    else grade="D";
return{...grade,student};
 });
 console.log(gradeStudent)

  // 3. reduce() to calculate average marks
  const avgMarks=students.reduce((total,student)=>{
    return total+student.marks;
  },0)/students.length;
  console.log(avgMarks)
   //4. find() the student who scored 92
   const highestStd=students.find(student=>student.marks===92)
   console.log(highestStd)
   //5. findIndex() of student "Kiran"
const stdIndex=students.findIndex(student=>student.marks===35)
console.log(stdIndex)

//---------------------------------------------------------------------------------------------
/*ASSIGNMENT 3:
Employee Payroll Processor
You are building a salary processing module in a company HR app.*/


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


   // 1. filter() employees from IT department
   const empIt=employees.filter((employees)=>employees.department==="IT")
console.log(empIt)
   // 2. map() to add:  netSalary = salary + 10% bonus
const netSalary=employees.map((employee)=>{
    let bonus=employee.salary*0.10;
    return {
        ...employee,
        netSalary:employee.salary+bonus
    };
    
})
   
console.log(netSalary)
    //3. reduce() to calculate total salary payout
    const totalSalary=employees.reduce((total,employee)=>{
         return total+employee.marks;
  },0)/employees.length;
    console.log(totalSalary)

    //4. find() employee with salary 30000
    const salary30000=employees.find((employee)=>employee.salary===30000)
    console.log(salary30000)
    //5. findIndex() of employee "Neha"
const empNeha=employees.findIndex((employee)=>employee.name==="Neha")
console.log(empNeha)
   // ---------------------------------------------------------------------------------------
//ASSIGNMENT 4: 
//Movie Streaming Platform
//You are working on a movie recommendation system.

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

    //1. filter() only "Sci-Fi" movies
    const scifiMovie=movies.filter((total,movie)=>movie.genre==="Sci-Fi")
    console.log(scifiMovie)

    //2. map() to return:"Inception (8.8)
     const movieList = movies.map(m => `${m.title} (${m.rating})`);
     console.log(movieList)

    //3. reduce() to find average movie rating
    const avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
    console.log(avgRating)
       // 4. find() movie "Joker"
       const joker=movies.find((movie)=>movie.title==="Joker")
       console.log(joker)

  //  5. findIndex() of "Avengers"
      const Avengers=movies.findIndex((movie)=>movie.title==="Avengers")
      console.log(Avengers)
//---------------------------------------------------------------------------------------------
/*ASSIGNMENT 5: 
Bank Transaction Analyzer
You are building a bank statement summary.*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

    //1. filter() all credit transactions
    const credit=transactions.filter((transactions)=>transactions.type==="credit")
    console.log(credit)

    //2. map() to extract only transaction amounts
    const transactionAmounts = transactions.map(
  transaction => transaction.amount
);
console.log( transactionAmounts);

    //3. reduce() to calculate final account balance
    const finalBalance = transactions.reduce((balance, transaction) => {
  return transaction.type === "credit"
    ? balance + transaction.amount
    : balance - transaction.amount;
}, 0);
console.log( finalBalance);

    //4. find() the first debit transaction
    const debit=transactions.find((transactions)=>transactions.type==="debit")
    console.log(debit)

   // 5. findIndex() of transaction with amount 10000
   const amount10000=transactions.findIndex((transaction)=>transaction.amount===10000)
   console.log(amount10000)

//---------------------------------------------------------------------------
