
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

//functions
function addBookToLibrary() {
  const bookTitle = document.getElementById("book-title").value;
  const bookAuthor = document.getElementById("book-author").value;
  const bookPages = document.getElementById("book-pages").value;
  const bookRead = document.getElementById("book-read").checked;

  let newBook = new book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.unshift(newBook);
  render();
  popupShow();
}


function render() {
  const container = document.getElementById("container");
  container.innerHTML =""; //pobriše vse 

  for (let i in myLibrary) { //za vsako knjigo v arrayu nardi nov card
    createBook(myLibrary[i]);
  }  
}


function createBook(item) {
  let bookCard = document.createElement("div");  
  bookCard.classList.add("lib-element");

  let textTitle = document.createElement("p"); 
  textTitle.textContent= item.title; 

  let textAuthor = document.createElement("p");
  textAuthor.textContent= item.author; 

  let textPages = document.createElement("p");
  textPages.textContent = ("Pages: " + item.pages);  

  let label = document.createElement("p");
  label.textContent = "Read:"; 

  readCheck = document.createElement("INPUT");
  readCheck.setAttribute("id", "read");
  readCheck.setAttribute("type", "checkbox");
  readCheck.checked = item.read; 

  let removeButton = document.createElement("button");
  removeButton.setAttribute("class", "removeBook");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render();
  });

  readCheck.addEventListener("change", () => {
    item.read = !item.read;
    render();
  });
  
  bookCard.appendChild(textTitle);
  bookCard.appendChild(textAuthor);
  bookCard.appendChild(textPages);
  bookCard.appendChild(label);
  bookCard.appendChild(readCheck);
  bookCard.appendChild(removeButton);  
  container.appendChild(bookCard);
  
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
addButton.addEventListener("click", addBookToLibrary);


//add local storage func.