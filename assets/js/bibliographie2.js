// script.js
const books_informatique = [
  {
    title: "Krylov Subspace Methods for Linear Systems SPRINGER",
    category: "Algorithm",
  },
];

const bookList2 = document.getElementById("bookList2");
const searchInput2 = document.getElementById("searchInput2");

function displayBooks2(filteredBooks) {
  bookList2.innerHTML = "";
  filteredBooks.forEach((book) => {
    const li2 = document.createElement("li");
    li2.textContent = `${book.title} (${book.category})`;
    bookList2.appendChild(li2);
  });
}

searchInput2.addEventListener("input", () => {
  const searchTerm2 = searchInput2.value.toLowerCase();
  const filteredBooks2 = books_informatique.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm2) ||
      book.category.toLowerCase().includes(searchTerm2),
  );
  displayBooks2(filteredBooks2);
});

// Afficher tous les livres au chargement
displayBooks2(books_informatique);
