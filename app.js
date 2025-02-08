const express = require('express');
const app = express();
const usuarioRutas = require('./rutas/usuarioRutas');
const actividadRutas = require('./rutas/actividadRutas');

//  EJS y archivos estáticos
app.set('view engine', 'ejs');
app.set('views','./vistas');
app.use(express.static('publico'));
app.use(express.urlencoded({ extended: true })); 

// Rutas
app.use('/usuarios', usuarioRutas);
app.use('/actividades', actividadRutas);

// Ruta de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});