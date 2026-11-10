const http = require('http');
const VERSION = '1.0';

const productos = [
  { icono: '☕', nombre: 'Café de altura', detalle: 'Cusco · 250 g', precio: 'S/ 24.90' },
  { icono: '🍫', nombre: 'Chocolate orgánico', detalle: 'Cacao 70% · 100 g', precio: 'S/ 12.50' },
  { icono: '🧶', nombre: 'Chalina de alpaca', detalle: 'Artesanal · Puno', precio: 'S/ 89.00' },
  { icono: '🍯', nombre: 'Miel de abeja', detalle: 'Pura · 500 g', precio: 'S/ 19.90' },
  { icono: '🌽', nombre: 'Maíz morado', detalle: 'Bolsa · 1 kg', precio: 'S/ 9.90' },
  { icono: '🫒', nombre: 'Aceitunas de Tacna', detalle: 'Frasco · 400 g', precio: 'S/ 15.00' }
];

const tarjetas = productos.map(p => `
  <div class="card">
    <div class="img">${p.icono}</div>
    <h3>${p.nombre}</h3>
    <p class="det">${p.detalle}</p>
    <div class="fila">
      <span class="precio">${p.precio}</span>
      <button>Agregar</button>
    </div>
  </div>`).join('');

const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Andina Market</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #f6f4ef; color: #1f2937; }
  header { background: #14532d; color: #fff; padding: 16px 6%; display: flex;
           justify-content: space-between; align-items: center; }
  header h1 { font-size: 1.4rem; letter-spacing: 1px; }
  nav a { color: #d1fae5; text-decoration: none; margin-left: 24px; font-size: .95rem; }
  .hero { background: linear-gradient(135deg, #166534, #ca8a04); color: #fff;
          padding: 70px 6%; text-align: center; }
  .hero h2 { font-size: 2.4rem; margin-bottom: 12px; }
  .hero p { font-size: 1.1rem; opacity: .95; margin-bottom: 24px; }
  .hero a { background: #fff; color: #14532d; padding: 12px 28px; border-radius: 999px;
            text-decoration: none; font-weight: 600; }
  main { padding: 50px 6%; }
  main h2 { text-align: center; margin-bottom: 30px; font-size: 1.8rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 24px; }
  .card { background: #fff; border-radius: 14px; padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,.08); transition: transform .2s; }
  .card:hover { transform: translateY(-4px); }
  .img { background: #ecfdf5; border-radius: 10px; height: 130px; display: flex;
         align-items: center; justify-content: center; font-size: 3.6rem; margin-bottom: 14px; }
  .card h3 { font-size: 1.05rem; margin-bottom: 4px; }
  .det { color: #6b7280; font-size: .88rem; margin-bottom: 14px; }
  .fila { display: flex; justify-content: space-between; align-items: center; }
  .precio { font-weight: 700; color: #14532d; font-size: 1.1rem; }
  button { background: #14532d; color: #fff; border: 0; padding: 8px 16px;
           border-radius: 8px; cursor: pointer; }
  button:hover { background: #166534; }
  footer { background: #111827; color: #9ca3af; text-align: center; padding: 24px; font-size: .9rem; }
  footer strong { color: #fff; }
</style>
</head>
<body>
  <header>
    <h1>ANDINA MARKET</h1>
    <nav><a href="#">Inicio</a><a href="#">Productos</a><a href="#">Ofertas</a><a href="#">Contacto</a></nav>
  </header>
  <section class="hero">
    <h2>Lo mejor del Perú, en tu puerta</h2>
    <p>Productos andinos auténticos, directo de los productores.</p>
    <a href="#productos">Ver productos</a>
  </section>
  <main id="productos">
    <h2>Productos destacados</h2>
    <div class="grid">${tarjetas}</div>
  </main>
  <footer>
    <p><strong>Andina Market</strong> · Versión ${VERSION}</p>
    <p>Desplegado automáticamente desde GitHub</p>
  </footer>
</body>
</html>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(3000);
