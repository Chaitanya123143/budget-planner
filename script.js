function calculateBudget() {
  let income = document.getElementById("income").value;
  if (!income || income <= 0) {
    alert("Please enter a valid income!");
    return;
  }

  // Budget percentages
  let budget = {
    Housing: 0.30,
    Food: 0.20,
    Transport: 0.10,
    Savings: 0.15,
    Entertainment: 0.10,
    Health: 0.10,
    Others: 0.05
  };

  // Show results section
  document.getElementById("result").classList.remove("hidden");

  // Fill cards
  document.getElementById("housing").innerHTML = `🏠 Housing: ₹${(income * budget.Housing).toFixed(2)}`;
  document.getElementById("food").innerHTML = `🍔 Food: ₹${(income * budget.Food).toFixed(2)}`;
  document.getElementById("transport").innerHTML = `🚌 Transport: ₹${(income * budget.Transport).toFixed(2)}`;
  document.getElementById("savings").innerHTML = `💰 Savings: ₹${(income * budget.Savings).toFixed(2)}`;
  document.getElementById("entertainment").innerHTML = `🎉 Entertainment: ₹${(income * budget.Entertainment).toFixed(2)}`;
  document.getElementById("health").innerHTML = `⚕️ Health: ₹${(income * budget.Health).toFixed(2)}`;
  document.getElementById("others").innerHTML = `📦 Others: ₹${(income * budget.Others).toFixed(2)}`;

  // Chart.js Pie Chart
  const ctx = document.getElementById('budgetChart').getContext('2d');
  if (window.budgetChartInstance) {
    window.budgetChartInstance.destroy();
  }
  window.budgetChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(budget),
      datasets: [{
        data: Object.values(budget).map(v => income * v),
        backgroundColor: ['#ff6384','#36a2eb','#ffce56','#4bc0c0','#9966ff','#ff9f40','#c9cbcf']
      }]
    }
  });
}
