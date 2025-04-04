function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Adresse copiée : ${text}`);
    })
    .catch((err) => {
      console.error("Erreur lors de la copie :", err);
    });
}
