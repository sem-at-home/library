const myLibrary = []
const libraryTable = document.getElementById('library');
const addBookButton = document.getElementById('add-book');
const dialog = document.querySelector("dialog");
const dialogAddButton = document.querySelector("dialog .ok");

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

const theIt = new Book('IT', 'Steven King', 666, true);
console.log('Book info', theIt.info());

const theFellowshipOftheRing = new Book('The Fellowship Of The Ring', 'J.R.R. Tolkien', 1200, false);
console.log('Book info', theFellowshipOftheRing.info());

function addBookToLibrary(book, library) {
  library.push(book);
}

addBookToLibrary(theHobbit, myLibrary);
addBookToLibrary(theIt, myLibrary);
addBookToLibrary(theFellowshipOftheRing, myLibrary);

console.log('My Library', { myLibrary });

function renderLibraryTableItem(book) {
  const row = libraryTable.insertRow();
  const bookAttributes = [book.title, book.author, book.pages, book.read];
  bookAttributes.map(function(value) {
    const cell = row.insertCell();
    cell.innerHTML = value
  })
};

myLibrary.map(renderLibraryTableItem)

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

dialogAddButton.addEventListener("click", (event) => {
  console.log('OK clicked')
  event.preventDefault();
  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const read = document.querySelector("#yes").checked
  renderLibraryTableItem(new Book(title, author, pages, read));
  dialog.close();
});