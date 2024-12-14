const myLibrary = [];
const container = document.querySelector('.container');

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

function addBookToLibrary(title, author, year) {
    myLibrary.push(new Book(title, author, year)); //adds new book to array after creating object

    myLibrary.forEach((element) => {
        //create card
        let newCard = document.createElement('div');
        newCard.setAttribute('class', 'card');
        container.append(newCard);

        let newTitle = document.createElement('h1');
        let newAuthor = document.createElement('h2');
        let newYear = document.createElement('h3');
        newCard.append(newTitle, newAuthor, newYear);
        newTitle.textContent = element.title
        newAuthor.textContent = element.author;
        newYear.textContent = element.year;

    });
};