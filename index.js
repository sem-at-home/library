const library = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (this.read) {
      console.log(`${this.title} by ${this.author}, ${pages} pages, already read.`);
    } else {
      console.log(`${this.title} by ${this.author}, ${pages} pages, not read yet.`);
    }
  }
}

function addBookToLibrary() {

}