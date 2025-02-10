const express = require('express');
const app = express();
const usuarioRutas = require('./rutas/usuarioRutas');
const actividadRutas = require('./rutas/actividadRutas');
const habitosRutas = require('./rutas/habitosRutas');
const proyectosRutas = require('./rutas/proyectosRutas');


app.set('view engine', 'ejs');
app.set('views', './vistas');
app.use(express.static('publico'));
app.use(express.urlencoded({ extended: true }));

app.use('/usuarios', usuarioRutas);
app.use('/actividades', actividadRutas);
app.use('/habitos', habitosRutas);
app.use('/proyectos', proyectosRutas);

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});