
let myLibrary = [];

//constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return(title + author + pages + read)
    }
  }

function addBookToLibrary(title, author, pages, read) {
  let newBook = new book(title, author, pages, read);
  myLibrary.unshift(newBook);
  displayLibrary(myLibrary);
}

function displayLibrary(myLibrary) {
  console.log(myLibrary)
}

function popupShow() {
    let element = document.getElementById("popupDiv")
    element.classList.toggle("shown");
}

function createNewBook() {
  const bookTitle = document.getElementById("book-title").value;
  const bookAuthor = document.getElementById("book-author").value;
  const bookPages = document.getElementById("book-pages").value;
  const bookRead = document.getElementById("book-read").checked;
    
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);  
  popupShow();
}


// code

const addButton = document.querySelector("#add");

addButton.addEventListener("click", createNewBook);