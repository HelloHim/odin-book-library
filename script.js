const myLibrary = []

function Book(name, author, status) {
  this.name = name
  this.author = author
  this.status = status
}

function addBookToLibrary(name, author, status) {
  const newBook = new Book(name, author, status)
  let uuid = crypto.randomUUID()
  newBook.id = uuid
  myLibrary.push(newBook)
  getColumnHeaders(myLibrary)
}

function getColumnHeaders(myLibrary) {
  const table = document.getElementById("libraryTable")

  // Get the thead element
  const thead = table.tHead

  // Insert a row into the thead(index 0 = first row)
  const newHeaderRow = table.insertRow(0)

  // Add cells to row by through thourhg key array and using insertCell()
  Object.keys(myLibrary[0]).forEach((element, index) => {
    const cell = newHeaderRow.insertCell(index)
    cell.textContent = element.charAt(0).toUpperCase() + element.slice(1)
  })
}

// Test
addBookToLibrary("Harry Potter & the Curse of the Honoured One", "Gojo")