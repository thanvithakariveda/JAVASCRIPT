//DAY-4.1
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  isLongBook() {
    return this.pages > 300;
  }
}

// Creating books
let b1 = new Book("Harry Potter", "J.K. Rowling", 350);
let b2 = new Book("1984", "George Orwell", 250);
let b3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let b4 = new Book("Atomic Habits", "James Clear", 280);
let b5 = new Book("Game of Thrones", "George R.R. Martin", 500);

let library = [b1, b2, b3, b4, b5];

// i. Display info of all books
library.forEach(b => console.log(b.getInfo()));

// ii. Borrow 2 books
b1.borrow();
b3.borrow();
console.log("Availability:", b1.title, b1.isAvailable, b3.title, b3.isAvailable);

// iii. Return 1 book
b1.returnBook();
console.log("Updated:", b1.title, b1.isAvailable);

// iv. Count long books
let longBooks = library.filter(b => b.isLongBook()).length;
console.log("Long books:", longBooks);

// v. List available books
let availableBooks = library.filter(b => b.isAvailable);
console.log("Available books:");
availableBooks.forEach(b => console.log(b.title));