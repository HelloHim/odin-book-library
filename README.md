# Odin Book Library

A browser-based personal library tracker built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library) JavaScript curriculum.

## Features

- Add books to your library with a title, author, and read status
- Books are displayed in a clean, responsive table
- Toggle a book's read status directly from the table
- Delete any book from the library
- Custom form validation: leaving the book or author field empty shows a clear error message and highlights the field, and no book is added until it is fixed
- Each book is assigned a unique ID via `crypto.randomUUID()` so removals and reorders stay stable

## Built With

- HTML
- CSS (responsive form layout using the Holy Albatross flexbox technique)
- Vanilla JavaScript (ES6 classes, event delegation)

## Concepts Practiced

- Refactored from constructor functions and prototype methods to ES6 classes
- ES6 classes (`Book` class with `changeReadStatus` as a class method)
- Separating data (the `myLibrary` array) from the display logic (DOM rendering)
- Using `data-*` attributes to link DOM rows back to their book objects
- Event delegation on the table for delete and read-status toggling
- `event.preventDefault()` to handle form submission without a page reload
- Custom form validation with the Constraint Validation API (`checkValidity`, `validity.valueMissing`, `setCustomValidity`) and the `novalidate` attribute
- Showing errors on submit only, then clearing them with an `input` listener as the user corrects a field
- Working on a new feature in its own Git branch before merging it into `main`

## Project Page

[The Odin Project: Form Validation with JavaScript (assignment 2: add custom validation to the Library form)](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript)