document.getElementById("submit-btn").addEventListener("click", function() {
  const income = document.getElementById("income").value;
  const goal = document.getElementById("goal").value;

 const products = [
  { name: "Conto Base", income: "low", goal: "saving" },
  { name: "Carta Oro", income: "high", goal: "investment" },
  { name: "Prestito Personale", income: "medium", goal: "debt" },
  { name: "Mutuo Giovani", income: "medium", goal: "saving" },
  { name: "Fondo ETF", income: "high", goal: "investment" },
];

  const results = products.filter(
    product => product.income === income && product.goal === goal
  );

  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (results.length > 0) {
    results.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product.name;
      productList.appendChild(li);
    });
  } else {
    productList.innerHTML = "<li>Nessun prodotto trovato</li>";
  }
});
