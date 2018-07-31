var monday = document.getElementById("Mon");
var montext = document.getElementById("montext");
var add1 = document.getElementById("add1");
var tuetext = document.getElementById("tuetext");
var add2 = document.getElementById("add2");
var myLibrary = ["The Hobbit", "Catcher in the Rye"];

monday.addEventListener("click", addM);
//montext.addEventListener("input", add);
add1.addEventListener("click", addM);

function Book(title) {
  this.title = title;

}

Book.prototype.info = function() {
  return `${this.title} is a great book!`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addM() {
  var one = tuetext.value;
  var zero = montext.value;
  var header = document.createElement("header");
  var item1 = document.createElement("p");
  item1.textContent = "*" + zero + " by " + one + " -has been added.";
  header.appendChild(item1);
  monday.appendChild(header);
  //var bookex = new Book(zero);
  addBookToLibrary(bookex);
  addBookToLibrary(new Book(zero));
  myLibrary.push(zero);
  alert(myLibrary);
}
