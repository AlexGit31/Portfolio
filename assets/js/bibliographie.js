// script.js
const books = [
  {
    title: "Analyse complexe CASSINI",
    category: "Analyse",
  },
  { title: "Exerices de Probabilités CASSINI", category: "Probabilités" },
  { title: "Calcul Intégral CASSINI", category: "Analyse" },
  { title: "Cours d'Algèbre CASSINI", category: "Algèbre" },
  { title: "Théorie des Probabilités SPRINGER", category: "Probabilités" },
  {
    title: "Modéles Aléatoires en Finance Mathématique HERMANN",
    category: "Probabilités",
  },
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} (${book.category})`;
    bookList.appendChild(li);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm),
  );
  displayBooks(filteredBooks);
});

// Afficher tous les livres au chargement
displayBooks(books);
