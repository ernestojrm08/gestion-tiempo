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

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(__dirname + '/publico'));

// Rutas
app.get('/index', (req, res) => res.render('index'));  

app.get('/dashboard', async (req, res) => {
  try {
    const actividades = await Actividad.findAll({ limit: 5, order: [['id', 'DESC']] });
    const categorias = await Categoria.findAll();
    res.render('dashboard', { actividades, categorias });
  } catch (error) {
    console.error('Error cargando el dashboard:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/reports', (req, res) => res.render('reports'));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

