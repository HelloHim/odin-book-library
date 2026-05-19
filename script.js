// Array to store all books in the library
const myLibrary = [];

// Constructor function to create a new Book object
function Book(id, name, author, status) {
  this.id = id; // unique identifier (UUID)
  this.name = name;
  this.author = author;
  this.status = status;
}

// Adds a new book to the library and updates the display
function addBookToLibrary(name, author, status) {
  // Generate a unique identifier for this book using the Crypto API,
  // and limit it to only 5 characters.
  let uuid = crypto.randomUUID().substring(1, 6);
  
  // Create a new Book object with the provided information
  const newBook = new Book(uuid, name, author, status);
  
  
  // Add the new book to the library array
  myLibrary.push(newBook);
  
  // Refresh the table to display the updated library
  createBookTable(myLibrary);
}

// Populates the HTML table with all books in the library
function createBookTable(myLibrary) {
  // Get reference to the table element from the HTML
  const table = document.getElementById("libraryTable");

  // Add column headers based on book properties
  getColumnHeaders(table, myLibrary);

  // Get the table body where rows will be added
  const tbody = table.tBodies[0];

  // Loop through each book in the library
  myLibrary.forEach((objectElement, index) => {
    // Create a new row in the table for this book
    const newRow = tbody.insertRow(index);

    // Loop through each property of the book (id, name, author, status)
    for (const key in objectElement) {
      // Create a new cell in the row
      const cell = newRow.insertCell();
      
      // Add the book property value to the cell
      cell.textContent = objectElement[key];
      
      // Set the cell text to "Read" or "Not Read" based on the book's status.
      if (objectElement[key]) {
        cell.textContent = "Read";
      } else {
        cell.textContent = "Not Read";
      }
    }
  });
}

// Creates and populates table column headers from book properties
function getColumnHeaders(table, myLibrary) {
  // Get the table head section
  const thead = table.tHead;

  // Insert a new row at the top of the thead for headers
  const newHeaderRow = thead.insertRow(0);
  
  // Get all property names from the first book in the MyLibrary array
  // (id, name, author, status) and create a header cell for each one
  const myLibraryKeys = Object.keys(myLibrary[0]);
  Object.keys(myLibrary[0]).forEach((element, index) => {
    // Create a new cell in the header row
    const cell = newHeaderRow.insertCell(index);
    
    // Add the property name to the cell with first letter capitalised
    cell.textContent = element.charAt(0).toUpperCase() + element.slice(1);
  });
}

// test
addBookToLibrary("Harry Potter & the Curse of the Honoured One", "Gojo", true);