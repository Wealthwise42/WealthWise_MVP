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
document.getElementById("analyze-expenses").addEventListener("click", function() {
  const expenses = {
    food: parseFloat(document.getElementById("food").value) || 0,
    rent: parseFloat(document.getElementById("rent").value) || 0,
    leisure: parseFloat(document.getElementById("leisure").value) || 0,
    transport: parseFloat(document.getElementById("transport").value) || 0,
    clothing: parseFloat(document.getElementById("clothing").value) || 0,
    health: parseFloat(document.getElementById("health").value) || 0,
    savings: parseFloat(document.getElementById("savings").value) || 0,
  };

  const totalExpenses = Object.values(expenses).reduce((acc, val) => acc + val, 0);

  // Logica per i prodotti consigliati
  const products = [
    { name: "Carta Cashback", criteria: expenses.leisure > 100 },
    { name: "Conto Risparmio", criteria: expenses.savings > 200 },
    { name: "Mutuo Giovani", criteria: expenses.rent > 500 },
    { name: "Assicurazione Salute", criteria: expenses.health > 50 },
    { name: "Carta Premium", criteria: totalExpenses > 1500 },
  ];

  const recommendations = products.filter(product => product.criteria);

  const recommendationsList = document.getElementById("recommendations-list");
  recommendationsList.innerHTML = "";

  if (recommendations.length > 0) {
    recommendations.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product.name;
      recommendationsList.appendChild(li);
    });
  } else {
    recommendationsList.innerHTML = "<li>Nessun prodotto trovato per il tuo profilo.</li>";
  }
});

