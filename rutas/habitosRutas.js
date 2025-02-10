const express = require('express');
const router = express.Router();
const HabitosControlador = require('../controlador/habitosControlador');

const controlador = new HabitosControlador();

router.get('/', (req, res) => {
  const { habitos } = controlador.listarHabitos();
  res.render('habitos/index', { habitos });
});

router.get('/agregar', (req, res) => {
  res.render('habitos/agregar');
});

router.post('/', (req, res) => {
  controlador.agregarHabito(req.body);
  res.redirect('/habitos');
});

router.get('/editar/:id', (req, res) => {
  const habito = controlador.obtenerHabito(req.params.id);
  res.render('habitos/editar', { habito });
});

router.post('/actualizar/:id', (req, res) => {
  controlador.actualizarHabito(req.params.id, req.body);
  res.redirect('/habitos');
});

router.get('/eliminar/:id', (req, res) => {
  controlador.eliminarHabito(req.params.id);
  res.redirect('/habitos');
});

module.exports = router;