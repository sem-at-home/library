const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (this.read) {
      return `${this.title} by ${this.author}, ${pages} pages, already read.`;
    } else {
      return `${this.title} by ${this.author}, ${pages} pages, not read yet.`;
    }
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log('The Hobbit info', theHobbit.info());

function addBookToLibrary(book, library) {
  library.push(book);
}

addBookToLibrary(theHobbit, myLibrary);
console.log('My Library', { myLibrary });