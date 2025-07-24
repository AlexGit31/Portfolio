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

// Formatte les dates au format court (ex: "23 juil.")
function formatDateLabel(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
  });
}

// Simplifie un chemin d’URL pour l'affichage (ex: "/pages/projets.html" → "Projets")
function simplifyPagePath(path) {
  if (path === "/" || path === "/index.html") return "Accueil";
  const name = path.split("/").pop().replace(".html", "");
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function renderLineChart(ctx, data) {
  const labels = data.map((d) => formatDateLabel(d.date));
  const counts = data.map((d) => d.count);

  return new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          data: counts,
          borderColor: "#14f5bc", // bleu doux
          backgroundColor: "rgba(48, 199, 174, 0.2)", // remplissage léger
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
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
          data,
          backgroundColor: "#10B997", // vert jade
        },
      ],
    },
    options: {
      indexAxis: horizontal ? "y" : "x",
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.parsed.x || context.parsed.y;
              return `${value} visites`;
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: horizontal
          ? {
              ticks: {
                autoSkip: false,
                callback: function (_, index) {
                  return labels[index];
                },
              },
            }
          : {
              beginAtZero: true,
            },
      },
    },
  });
}

async function updateDashboard() {
  const period = periodSelector.value;
  const stats = await fetchStats(period);
  if (!stats) return;

  // Détruire les anciens graphiques s’ils existent
  [visitsOverTimeChart, visitsByHourChart, mostVisitedPagesChart].forEach(
    (chart) => {
      if (chart) chart.destroy();
    },
  );

  // Graphique : visites dans le temps
  const timeCtx = document
    .getElementById("visitsOverTimeChart")
    .getContext("2d");
  visitsOverTimeChart = renderLineChart(timeCtx, stats.visitsOverTime);

  // Graphique : heures de visites
  const hourCtx = document.getElementById("visitsByHourChart").getContext("2d");
  visitsByHourChart = renderBarChart(
    hourCtx,
    stats.visitsByHour.map((d) => `${d.hour}h`),
    stats.visitsByHour.map((d) => d.count),
  );

  // Graphique : pages les plus visitées
  const pageCtx = document
    .getElementById("mostVisitedPagesChart")
    .getContext("2d");
  mostVisitedPagesChart = renderBarChart(
    pageCtx,
    stats.mostVisitedPages.map((d) => simplifyPagePath(d.page)),
    stats.mostVisitedPages.map((d) => d.count),
    true,
  );
}

// Écoute du changement de période
periodSelector.addEventListener("change", updateDashboard);

// Chargement initial
updateDashboard();
