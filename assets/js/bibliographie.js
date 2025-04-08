// script.js
const books = [
  {
    title: "Exercices d'Algèbre",
    authors: ["Aviva Szpirglas"],
    edition: "Cassini",
    categories: ["algèbre"],
    cover: "/Portfolio/assets/covers/cassini-algebre-tome1.jpg",
  },
  {
    title: "Algèbre Tome 2",
    authors: ["Aviva Szpirglas"],
    edition: "Cassini",
    categories: ["algèbre"],
    cover: "/Portfolio/assets/covers/cassini-algebre-tome2.jpg",
  },
  {
    title: "Algèbre Tome 3",
    authors: ["Aviva Szpirglas"],
    edition: "Cassini",
    categories: ["algèbre"],
    cover: "/Portfolio/assets/covers/cassini-algebre-tome3.png",
  },
  {
    title: "Algèbre Tome 4",
    authors: ["Aviva Szpirglas"],
    edition: "Cassini",
    categories: ["algèbre"],
    cover: "/Portfolio/assets/covers/cassini-algebre-tome4.jpg",
  },
  {
    title: "Eléments d'analyse et d'algèbre",
    authors: [" Pierre Colmez"],
    edition: "Ecole Polytechnique",
    categories: ["algèbre", "analyse", "théorie des nombres"],
    cover: "/Portfolio/assets/covers/elements-analyse-algebre.jpeg",
  },

  ,
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach((book) => {
    const li = document.createElement("li");
    li.className = "book-item";
    li.innerHTML = `
      <div class="book-entry">
        <img src="${book.cover}" alt="${book.title}" class="book-cover" />
        <div class="book-details">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-authors">Auteur(s) : ${book.authors.join(", ")}</p>
          <p class="book-edition">Édition : ${book.edition}</p>
          <div class="book-categories">
            ${book.categories.map((cat) => `<span class="book-category">${cat}</span>`).join(" ")}
          </div>
        </div>
        <!--<span class="expand-icon">▼</span>-->
      </div>
    `;
    li.addEventListener("click", () => showCover(book));
    bookList.appendChild(li);
  });
}

function showCover(book) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-content">
      <img src="${book.cover}" alt="${book.title}" />
      <span class="close-btn">&times;</span>
    </div>
  `;
  document.body.appendChild(modal);

  // Fermer la modale
  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.remove();
  });
}

searchInput.addEventListener("input", () => {
  const filteredBooks = filterBooksFromSearchBar(searchInput.value);
  displayBooks(filteredBooks);
});

function filterBooksFromSearchBar(searchInput) {
  const search = searchInput.trim().toLowerCase();
  const filters = {
    title: [],
    authors: [],
    edition: [],
    categories: [],
  };

  const rawTerms = search.split(/\s+/);

  rawTerms.forEach((term) => {
    if (term.startsWith("auteur:")) {
      filters.authors.push(term.slice(7));
    } else if (term.startsWith("édition:")) {
      filters.edition.push(term.slice(8));
    } else if (term.startsWith("catégorie:")) {
      filters.categories.push(term.slice(10));
    } else {
      filters.title.push(term);
    }
  });

  return books.filter((book) => {
    const titleMatch = filters.title.every((t) =>
      book.title.toLowerCase().includes(t),
    );
    const authorMatch = filters.authors.every((a) =>
      book.authors.some((author) => author.toLowerCase().includes(a)),
    );
    const editionMatch = filters.edition.every((e) =>
      book.edition.toLowerCase().includes(e),
    );
    const categoryMatch = filters.categories.every((c) =>
      book.categories.some((cat) => cat.toLowerCase().includes(c)),
    );
    return titleMatch && authorMatch && editionMatch && categoryMatch;
  });
}
// Afficher tous les livres au chargement
displayBooks(books);

/* Pour les dropdowns */

function populateDropdowns(books) {
  const authorSet = new Set();
  const editionSet = new Set();
  const categorySet = new Set();

  books.forEach((book) => {
    book.authors.forEach((a) => authorSet.add(a));
    editionSet.add(book.edition);
    book.categories.forEach((c) => categorySet.add(c));
  });

  const createOptions = (select, values) => {
    values.forEach((value) => {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = value;
      select.appendChild(opt);
    });
  };

  createOptions(
    document.getElementById("filter-author"),
    [...authorSet].sort(),
  );
  createOptions(
    document.getElementById("filter-edition"),
    [...editionSet].sort(),
  );
  createOptions(
    document.getElementById("filter-category"),
    [...categorySet].sort(),
  );
}

populateDropdowns(books);

function filterBooksAdvanced() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedAuthor = document.getElementById("filter-author").value;
  const selectedEdition = document.getElementById("filter-edition").value;
  const selectedCategory = document.getElementById("filter-category").value;

  const filtered = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm) ||
      book.authors.some((a) => a.toLowerCase().includes(searchTerm)) ||
      book.categories.some((c) => c.toLowerCase().includes(searchTerm)) ||
      book.edition.toLowerCase().includes(searchTerm);

    const matchAuthor =
      !selectedAuthor || book.authors.includes(selectedAuthor);
    const matchEdition = !selectedEdition || book.edition === selectedEdition;
    const matchCategory =
      !selectedCategory || book.categories.includes(selectedCategory);

    return matchSearch && matchAuthor && matchEdition && matchCategory;
  });

  displayBooks(filtered);
}

searchInput.addEventListener("input", filterBooksAdvanced);
document
  .getElementById("filter-author")
  .addEventListener("change", filterBooksAdvanced);
document
  .getElementById("filter-edition")
  .addEventListener("change", filterBooksAdvanced);
document
  .getElementById("filter-category")
  .addEventListener("change", filterBooksAdvanced);

/* Pour la gestion des couleurs des dropdowns*/

document.querySelectorAll("#filter-controls select").forEach((select) => {
  select.addEventListener("change", () => {
    const selected = select.value !== "";
    select.setAttribute("data-selected", selected);
    filterBooksAdvanced(); // ou ton filtre principal
  });
});
