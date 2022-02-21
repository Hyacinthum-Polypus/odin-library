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

let myLibrary = [];

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function createAndAddBookToLibrary(title, author, pages, read)
{
    addBookToLibrary(new Book(title, author, pages, read));
}

function removeBook(index)
{
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks()
{
    for(let i = 0; i < cards.length;)
    {
        console.log('hello')
        main.removeChild(cards[0]);
        cards.shift();
    }

    myLibrary.forEach((book, index) =>
    {
        const newCard = document.createElement('div');
        newCard.classList.add('card');

        const removeButton = document.createElement('button');
        const title = document.createElement('h3');
        const authorHeader = document.createElement('h4');
        const author = document.createElement('p');
        const pagesHeader = document.createElement('h4');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        
        removeButton.classList.add('remove-button');
        title.classList.add('title');
        read.classList.add('read');

        removeButton.addEventListener('click', (e) => removeBook(index));

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
        newCard.appendChild(read);

        main.appendChild(newCard);
        cards.push(newCard);
    });
}

addBookToLibrary(new Book("The Hobbit 1", "J.R.R. Tolkien", 310, true));
addBookToLibrary(new Book("The Hobbit 2", "J.R.R. Tolkien", 310, true));
addBookToLibrary(new Book("The Hobbit 3", "J.R.R. Tolkien", 310, true));

displayBooks();

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

function submitForm(e)
{
    createAndAddBookToLibrary(
        titleInput['value'],
        authorInput['value'],
        pagesInput['value'],
        readInput.checked
    );

    displayBooks();
    toggleBookForm();

    e.preventDefault();
}

newBookButton.addEventListener('click', toggleBookForm);
form.addEventListener('submit', submitForm);
