// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    div.classList.add('alert');
    div.classList.add(className);
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function(target) {
    if(target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
        const ui = new UI();
        ui.showAlert('Book Removed', 'success');
    }
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('Please Check Your Inputs', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book Added', 'success');
        ui.clearFields();
    }

    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);

    e.preventDefault();
})