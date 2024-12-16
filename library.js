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
    let removeBook = document.createElement('button');
    let readToggle = document.createElement('button');
    readToggle.textContent = 'Read it?';
    readToggle.classList.add('read-toggle');
    removeBook.textContent = 'Remove';
    removeBook.classList.add('remove-button');
    let read = document.createElement('p');
    read.textContent = 'Read';
    
    newTitle.textContent = newBook.title;
    newAuthor.textContent = newBook.author;
    newYear.textContent = newBook.year;

    newCard.append(newTitle, newAuthor, newYear, removeBook, readToggle, read);

    //adding read functionality
    readToggle.addEventListener('click', () => {
        if (read.style.display === 'none') {
            read.style.display = 'initial';
        } else if (read.style.display !== 'none') {
            read.style.display = 'none'
        }
    });

    //adding remove functionality
    removeBook.addEventListener('click', () => {
        newCard.remove();
    });
};

//adding functionality to button
let addButton = document.querySelector('.addBookButton');
let form = document.querySelector('form');
addButton.addEventListener('click', () => {
    form.style.display = 'initial';
});

//adding submit
let submitButton = document.querySelector('.submit');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let yearInput = document.querySelector('#year');
submitButton.addEventListener('click', (event) => {

    //check if any of the inputs are empty
    if (titleInput.value === '' || authorInput.value === '' || yearInput.value === '') {
        event.preventDefault();
        alert('Please ensure all fields are filled out');
    } else {
        event.preventDefault();
        addBookToLibrary(titleInput.value, authorInput.value, yearInput.value);
        form.style.display = 'none';
        titleInput.value = '';
        authorInput.value = '';
        yearInput.value = '';
    };
});