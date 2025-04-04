/*
 * 1) Animation du canvas :
 * On crée des lignes (vert clair ou gris) qui montent du bas vers le haut
 * en laissant une trace qui s'estompe petit à petit.
 */

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let w, h;
let lines = [];

function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
}

window.addEventListener("resize", resize);
resize();

// Classe pour générer les lignes
class Line {
  constructor(x, speed, color) {
    this.x = x;
    this.y = h;
    this.speed = speed; // vitesse de montée
    this.color = color;
    this.length = Math.random() * 80 + 40; // longueur aléatoire
  }

  update() {
    this.y -= this.speed; // la ligne se déplace vers le haut
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

// Pour réduire la quantité de traits : on génère moins souvent
function generateLine() {
  const colors = ["rgba(0,255,0,0.7)", "rgba(128,128,128,0.5)"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const x = Math.random() * w;
  const speed = Math.random() * 2 + 1;
  lines.push(new Line(x, speed, color));
}

// On génère une nouvelle ligne toutes les 1 secondes
setInterval(generateLine, 1000);

// Boucle d'animation pour dessiner et faire l'effet de traînée
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(17, 17, 17, 0.2)";
  ctx.fillRect(0, 0, w, h);

  lines.forEach((line) => {
    line.update();
    line.draw();
  });

  // On retire les lignes qui sortent de l'écran
  lines = lines.filter((line) => line.y + line.length > 0);
}
animate();
