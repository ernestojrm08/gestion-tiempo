const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controlador/usuarioControlador');

//rutas para usuarios

router.get('/', usuarioControlador.list);
router.get('/añadir', usuarioControlador.add);
router.post('/crear', usuarioControlador.create);
router.get('/editar/:id', usuarioControlador.edit);
router.post('/actualizar/:id', usuarioControlador.update);
router.get('/eliminar/:id', usuarioControlador.delete);

module.exports = router;