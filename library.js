const myLibrary = [];
const container = document.querySelector('.container');

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

function addBookToLibrary(title, author, year) {
    myLibrary.push(new Book(title, author, year)); //adds new book to array after creating object

    const newBook = myLibrary[myLibrary.length - 1];

    let newCard = document.createElement('div');
    newCard.classList.add('card');
    container.append(newCard);

    let newTitle = document.createElement('h1');
    let newAuthor = document.createElement('h2');
    let newYear = document.createElement('h3');
    newTitle.textContent = newBook.title;
    newAuthor.textContent = newBook.author;
    newYear.textContent = newBook.year;

    newCard.append(newTitle, newAuthor, newYear);
};