const myLibrary = [];
const container = document.querySelector('.container');

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

function addBookToLibrary(title, author, year) {
    myLibrary.push(new Book(title, author, year)); //adds new book to array after creating object

    myLibrary.forEach(element) {
        //create card
        let newCard = document.createElement('div');
        newCard.setAttribute('class', 'card');
        container.appendChild(newCard);

        //create title on card
        let newTitle = document.createElement('h1');
        newTitle.innerText(element.title);
        newCard.appendChild(newTitle);

        //create author on card
        let newAuthor = document.createElement('h2');
        newAuthor.innerText(element.author);
        newCard.append(newAuthor);

        //create year on card
        let newYear = document.createElement('h3');
        newYear.innerText(element.year);
        newCard.append(newYear);
    };
};