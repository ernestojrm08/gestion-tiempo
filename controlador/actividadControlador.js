class actividadControlador {

    static list(req, res) {
      const actividades = [
        { id: 1, nombre: 'Correr', descripcion: 'Correr 5 km', habitoId: 1 },
        { id: 2, nombre: 'Leer', descripcion: 'Leer un libro', habitoId: 2 },
      ];
  
      res.render('actividades/actividades', { actividades });
    }
  
    
    static add(req, res) {
      res.render('actividades/añadirActividad');
    }
  
   
    static create(req, res) {
      const { nombre, descripcion, habitoId } = req.body;
      const nuevaActividad = {
        id: Date.now(), 
        nombre,
        descripcion,
        habitoId: parseInt(habitoId), 
      };
      console.log('Nueva actividad creada:', nuevaActividad);
      res.redirect('/actividades');
    }
  
    
    static edit(req, res) {
      const actividadId = parseInt(req.params.id); 
      const actividad = {
        id: actividadId,
        nombre: 'Ejemplo de actividad',
        descripcion: 'Descripción de ejemplo',
        habitoId: 1,
      };
      res.render('actividades/editarActividad', { actividad });
    }
  
   
    static update(req, res) {
      const actividadId = parseInt(req.params.id); 
      const { nombre, descripcion, habitoId } = req.body;
      if (!nombre || !descripcion || !habitoId) {
        return res.status(400).send('Todos los campos son obligatorios');
      }
  
      const actualizarActividad = {
        id: actividadId,
        nombre,
        descripcion,
        habitoId: parseInt(habitoId),
      };
      console.log('Actividad actualizada:', actualizarActividad);
      res.redirect('/actividades');
    }
  

    static delete(req, res) {
      const actividadId = parseInt(req.params.id); 
      console.log(`Actividad con ID ${actividadId} eliminada`);
      res.redirect('/actividades');
    }
  }
  
  module.exports = actividadControlador;