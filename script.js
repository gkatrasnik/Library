function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return(title + author + pages + read)
    }
  }

function popupShow() {
    let element = document.getElementById("popupDiv")
    element.classList.toggle("hidden");
}

function addBook() {
    
    popupShow();
}

function cancelPopup() {
    popupShow();
}