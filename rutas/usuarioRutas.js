const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controlador/usuarioControlador');

const controlador = new usuarioControlador();

router.get('/', (req, res) => {
    const { usuarios } = controlador.listarUsuarios();
    res.render('usuarios/usuarios', { usuarios });
});

router.get('/agregar', (req, res) => {
    res.render('usuarios/agregarUsuario')
});

router.post('/', (req, res) => {
    controlador.agregarUsuario(req.body);
    res.redirect('/usuarios')
});

router.get('/editar/:id', (req, res) => {
  const usuario =  controlador.obtenerUsuario(req.params.id);
    res.render('usuarios/editarUsuario', {usuario});
});

router.post('/actualizar/:id', (req, res) => {
    controlador.actualizarUsuario(req.body);
    res.redirect('/usuarios');
});

router.get('/eliminar/:id', (req, res) => {
    controlador.eliminarUsuario(req.params.id);
    res.redirect('/usuarios')
});

module.exports = router;