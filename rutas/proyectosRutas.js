const express = require('express');
const router = express.Router();
const ProyectoControlador = require('../controlador/proyectoControlador');

const controlador = new ProyectoControlador();

router.get('/', (req, res) => {
  const { proyectos } = controlador.listarProyectos();
  res.render('proyectos/proyectos', { proyectos });
});

router.get('/agregar', (req, res) => {
  res.render('proyectos/agregarProyecto');
});

router.post('/', (req, res) => {
  controlador.agregarProyecto(req.body);
  res.redirect('/proyectos');
});

router.get('/editar/:id', (req, res) => {
  const proyecto = controlador.obtenerProyecto(req.params.id);
  res.render('proyectos/editarProyecto', { proyecto });
});

router.post('/actualizar/:id', (req, res) => {
  controlador.actualizarProyecto(req.params.id, req.body);
  res.redirect('/proyectos');
});

router.get('/eliminar/:id', (req, res) => {
  controlador.eliminarProyecto(req.params.id);
  res.redirect('/proyectos');
});

module.exports = router;