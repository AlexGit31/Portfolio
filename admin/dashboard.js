const periodSelector = document.getElementById("period");

let visitsOverTimeChart, visitsByHourChart, mostVisitedPagesChart;

async function fetchStats(period = "7d") {
  const response = await fetch(
    `https://backend-portfolio-z3lg.onrender.com/api/stats?period=${period}`,
  );
  if (!response.ok) {
    alert("Impossible de charger les statistiques.");
    return;
  }
  return await response.json();
}

function renderLineChart(ctx, data) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map((d) => d.date),
      datasets: [
        {
          label: "Nombre de visites",
          data: data.map((d) => d.count),
          borderColor: "blue",
          backgroundColor: "lightblue",
          tension: 0.2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

function renderBarChart(ctx, labels, data, horizontal = false) {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Nombre de visites",
          data,
          backgroundColor: "teal",
        },
      ],
    },
    options: {
      indexAxis: horizontal ? "y" : "x",
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

async function updateDashboard() {
  const period = periodSelector.value;
  const stats = await fetchStats(period);
  if (!stats) return;

  // Détruire les anciens graphiques s'ils existent
  [visitsOverTimeChart, visitsByHourChart, mostVisitedPagesChart].forEach(
    (chart) => {
      if (chart) chart.destroy();
    },
  );

  // Graphique visites dans le temps
  const timeCtx = document
    .getElementById("visitsOverTimeChart")
    .getContext("2d");
  visitsOverTimeChart = renderLineChart(timeCtx, stats.visitsOverTime);

  // Graphique par heure
  const hourCtx = document.getElementById("visitsByHourChart").getContext("2d");
  visitsByHourChart = renderBarChart(
    hourCtx,
    stats.visitsByHour.map((d) => `${d.hour}h`),
    stats.visitsByHour.map((d) => d.count),
  );

  // Graphique par page
  const pageCtx = document
    .getElementById("mostVisitedPagesChart")
    .getContext("2d");
  mostVisitedPagesChart = renderBarChart(
    pageCtx,
    stats.mostVisitedPages.map((d) => d.page),
    stats.mostVisitedPages.map((d) => d.count),
    true,
  );
}

periodSelector.addEventListener("change", updateDashboard);

// Initialisation
updateDashboard();
