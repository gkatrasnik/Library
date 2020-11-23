
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
  const container = document.getElementById("container");
  let bookCard = document.createElement("div"); 
  
    let title = myLibrary[0].title;
    let author = myLibrary[0].author;
    let pages = myLibrary[0].pages;
    let read = myLibrary[0].read;
      
    bookCard.id = myLibrary[0].title;
    bookCard.classList.add("lib-element");

    let textTitle = document.createElement("p"); 
    textTitle.textContent= title; 

    let textAuthor = document.createElement("p");
    textAuthor.textContent= author; 

    let textPages = document.createElement("p");
    textPages.textContent = ("Pages: " + pages);  

    let label = document.createElement("p");
    label.textContent = "Read:"; 

    readCheck = document.createElement("INPUT");
    readCheck.setAttribute("id", "read");
    readCheck.setAttribute("type", "checkbox");
    readCheck.checked = read; 

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "removeBook");
    removeButton.textContent = "Remove"

    
    bookCard.appendChild(textTitle);
    bookCard.appendChild(textAuthor);
    bookCard.appendChild(textPages);
    bookCard.appendChild(label);
    bookCard.appendChild(readCheck);
    bookCard.appendChild(removeButton);  
  
    container.appendChild(bookCard);
}



function createNewBook() {
  const bookTitle = document.getElementById("book-title").value;
  const bookAuthor = document.getElementById("book-author").value;
  const bookPages = document.getElementById("book-pages").value;
  const bookRead = document.getElementById("book-read").checked;
    
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);  
  
  popupShow();
}


function popupShow() {
    let element = document.getElementById("popupDiv")
    element.classList.toggle("shown");

    popupClear();
}

function popupClear() {
  document.getElementById("book-title").value = "";
  document.getElementById("book-author").value = "";
  document.getElementById("book-pages").value = "";
  document.getElementById("book-read").checked = false; 
}

// events

const addButton = document.querySelector("#add");

addButton.addEventListener("click", createNewBook);