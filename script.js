//DOM Elements.
const main = document.querySelector('main');
let cards = [];
const newBookButton = document.getElementById('new-book-button');

let myLibrary = [];

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read)
{
    myLibrary.push(new Book(title, author, pages, read));
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function displayBooks()
{
    for(card in cards)
    {
        main.removeChild(cards[0]);
        cards.shift();
    }

    myLibrary.forEach(book =>
    {
        console.log(book);
        const newCard = document.createElement('div');
        newCard.classList.add('card');

        const title = document.createElement('h3');
        const authorHeader = document.createElement('h4');
        const author = document.createElement('p');
        const pagesHeader = document.createElement('h4');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        
        title.classList.add('title');
        read.classList.add('read');

        title.textContent = book.title;
        authorHeader.textContent = 'Author';
        author.textContent = book.author;
        pagesHeader.textContent = 'Number of Pages';
        pages.textContent = book.pages;
        read.textContent = book.read ? 'This book has been read' : 'This book has not been read';

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

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 310, true));

displayBooks();

