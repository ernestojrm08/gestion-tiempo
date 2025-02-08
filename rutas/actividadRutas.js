const express = require('express');
const router = express.Router();
const actividadControlador = require('../controlador/actividadControlador');

//rutas para actividades

router.get('/', actividadControlador.list); 
router.get('/añadir', actividadControlador.add); 
router.post('/crear', actividadControlador.create); 
router.get('/editar/:id', actividadControlador.edit); 
router.post('/actualizar/:id', actividadControlador.update); 
router.get('/eliminar/:id', actividadControlador.delete); 

module.exports = router;