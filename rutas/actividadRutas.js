const express = require('express');
const router = express.Router();
const actividadControlador = require('../controlador/actividadControlador');

const controlador = new actividadControlador();

router.get('/', (req, res) => {
  const { actividades } = controlador.listarActividades();
  res.render('actividades/actividades', { actividades });
});

router.get('/agregar', (req, res) => {
  res.render('actividades/agregarActividad');
});

router.post('/', (req, res) => {
  controlador.agregarActividad(req.body);
  res.redirect('/actividades');
});

router.get('/editar/:id', (req, res) => {
  const actividad = controlador.obtenerActividad(req.params.id);
  res.render('actividades/editarActividad', { actividad });
});

router.post('/actualizar/:id', (req, res) => {
  controlador.actualizarActividad(req.params.id, req.body);
  res.redirect('/actividades');
});

router.get('/eliminar/:id', (req, res) => {
  controlador.eliminarActividad(req.params.id);
  res.redirect('/actividades');
});

module.exports = router;