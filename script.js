
let myLibrary = [];

// book class - changed from constructor
class book {
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return(title + author + pages + read)
    }
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
  setData();
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

  let textTitle = document.createElement("h3"); 
  textTitle.textContent= ("Title: " +item.title); 

  let textAuthor = document.createElement("p");
  textAuthor.textContent= ("Author: " + item.author); 

  let textPages = document.createElement("p");
  textPages.textContent = ("Pages: " + item.pages);  

  let label = document.createElement("p");
  label.textContent = "Read: "; 
  label.setAttribute("class", "read");

  readCheck = document.createElement("INPUT");
  readCheck.setAttribute("class", "read");
  readCheck.setAttribute("type", "checkbox");
  readCheck.checked = item.read; 

  let removeButton = document.createElement("button");
  removeButton.setAttribute("class", "removeBook");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    setData();
    render();
  });

  readCheck.addEventListener("change", () => {
    item.read = !item.read;
    setData();
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

// popup functions

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

//storage functions

function setData(){
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function restoreData(){

  if(!localStorage.myLibrary) {
    render();
  }else {
    let storedData = JSON.parse(localStorage.getItem("myLibrary"));
    myLibrary = storedData;
    render();
  }
}

// popup add button event listener
const addButton = document.querySelector("#add");
addButton.addEventListener("click", addBookToLibrary);
window.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    addBookToLibrary();
    console.log("enter")
  }
});

//add local storage func.
restoreData();
