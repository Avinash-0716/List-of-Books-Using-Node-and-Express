// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json()); // Middleware to parse JSON

// // In-memory books array
// let books = [
//   { id: 1, title: "Atomic Habits", author: "James Clear" },
//   { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
// ];

// // GET /books - Read all books
// app.get("/books", (req, res) => {
//   res.json(books);
// });

// // POST /books - Add a new book
// app.post("/books", (req, res) => {
//   const { title, author } = req.body;
//   if (!title || !author) {
//     return res.status(400).json({ error: "Title and Author are required." });
//   }

//   const newBook = {
//     id: books.length + 1,
//     title,
//     author,
//   };

//   books.push(newBook);
//   res.status(201).json(newBook);
// });

// // PUT /books/:id - Update a book
// app.put("/books/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const { title, author } = req.body;

//   const book = books.find((b) => b.id === id);
//   if (!book) {
//     return res.status(404).json({ error: "Book not found." });
//   }

//   if (title) book.title = title;
//   if (author) book.author = author;

//   res.json(book);
// });

// // DELETE /books/:id - Delete a book
// app.delete("/books/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = books.findIndex((b) => b.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: "Book not found." });
//   }

//   const deleted = books.splice(index, 1);
//   res.json({ message: "Book deleted", book: deleted[0] });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Book API server running at http://localhost:${port}`);
// });


const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Metaheuristic-based IDS", author: "Avinash Kumar"},
  { id: 3, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 4, title: "Kyun", author: "Jaun Elia"}
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find((b) => b.id === id);

  if (!book) return res.status(404).json({ error: "Book not found." });

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) return res.status(404).json({ error: "Book not found." });

  const deleted = books.splice(index, 1);
  res.json({ message: "Book deleted", book: deleted[0] });
});

app.listen(port, () => {
  console.log(`Book API server running at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("📚 Welcome to the Book API. Add /books at the end in search bar to view all books.");
});
