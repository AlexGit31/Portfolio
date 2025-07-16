const fetch_link = "https://backend-portfolio-z3lg.onrender.com/log";

fetch(fetch_link, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ page: window.location.pathname }),
});
