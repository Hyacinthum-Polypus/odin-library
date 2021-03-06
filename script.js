//DOM Elements.
const main = document.querySelector('main');
let cards = [];
const newBookButton = document.getElementById('new-book-button');
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitButton = document.querySelector('#submit');

class Book 
{
    constructor(title, author, pages, read)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead()
    {
        this.read = !this.read;
    }
}

class Library
{
    bookArray = [];

    constructor()
    {

    }

    get myLibrary()
    {
        return this.bookArray;
    }

    addBookToLibrary(book)
    {
        this.myLibrary.push(book);
    }

    createAndAddBookToLibrary(title, author, pages, read)
    {
        this.addBookToLibrary(new Book(title, author, pages, read));
    }

    removeBook(index)
    {
        this.myLibrary.splice(index, 1);
        displayBooks(this);
    }
}

let myLibrary = new Library();
myLibrary.addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 310, true));
displayBooks(myLibrary);
newBookButton.addEventListener('click', toggleBookForm);
form.addEventListener('submit', (e) => submitForm(e, myLibrary));


function displayBooks(library)
{
    for(let i = 0; i < cards.length;)
    {
        main.removeChild(cards[0]);
        cards.shift();
    }

    library.myLibrary.forEach((book, index) =>
    {
        const newCard = document.createElement('div');
        newCard.classList.add('card');

        const removeButton = document.createElement('button');
        const title = document.createElement('h3');
        const authorHeader = document.createElement('h4');
        const author = document.createElement('p');
        const pagesHeader = document.createElement('h4');
        const pages = document.createElement('p');
        const readContainer = document.createElement('div');
        const read = document.createElement('p');
        const readToggleContainer = document.createElement('div');
        const readToggle = document.createElement('div');
        
        removeButton.classList.add('remove-button');
        title.classList.add('title');
        readContainer.classList.add('read');
        readToggleContainer.classList.add('read-toggle-container');
        readToggle.classList.add('read-toggle');
        book.read ? readToggle.classList.add('read-checked') : readToggle.classList.add('read-unchecked');

        removeButton.addEventListener('click', (e) => library.removeBook(index));
        readToggleContainer.addEventListener('click', (e) => { book.toggleRead(); displayBooks(library);});

        removeButton.textContent = 'X';
        title.textContent = book.title;
        authorHeader.textContent = 'Author';
        author.textContent = book.author;
        pagesHeader.textContent = 'Number of Pages';
        pages.textContent = book.pages;
        read.textContent = book.read ? 'This book has been read' : 'This book has not been read';

        newCard.appendChild(removeButton);
        newCard.appendChild(title);
        newCard.appendChild(authorHeader);
        newCard.appendChild(author);
        newCard.appendChild(pagesHeader);
        newCard.appendChild(pages);
        newCard.appendChild(readContainer);
        readContainer.append(read)
        readContainer.appendChild(readToggleContainer);
        readToggleContainer.appendChild(readToggle);

        main.appendChild(newCard);
        cards.push(newCard);
    });
}

function clearForm()
{
    titleInput['value'] = '';
    authorInput['value'] = '';
    pagesInput['value'] = '';
    readInput.checked = false;    
}

function toggleBookForm(e)
{
    form.toggleAttribute('Hidden')
    clearForm();
}

function submitForm(e, library)
{
    library.createAndAddBookToLibrary(
        titleInput['value'],
        authorInput['value'],
        pagesInput['value'],
        readInput.checked
    );

    displayBooks(library);
    toggleBookForm();

    e.preventDefault();
}


