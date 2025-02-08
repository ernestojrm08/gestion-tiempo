class UsuarioControlador {
    // Datos de ejemplo en memoria (simulando una base de datos)
    static usuarios = [
      { id: 1, nombre: 'Ejemplo', email: 'ejemplo@test.com' },
    ];
  
    static list(req, res) {
      const usuarios = UsuarioControlador.usuarios; // Obtener la lista de usuarios
      res.render('usuarios/usuarios', { usuarios });
    }
  
    static add(req, res) {
      res.render('/usuarios/añadirUsuario');
    }
  
    static create(req, res) {
      const { nombre, email } = req.body;
  
      // Validación básica de datos
      if (!nombre || !email) {
        return res.status(400).send('Todos los campos son obligatorios');
      }
  
      // Crear un nuevo usuario
      const nuevoUsuario = {
        id: Date.now(), // Usamos un timestamp como ID único
        nombre,
        email,
      };
  
      // Guardar el usuario en memoria
      UsuarioControlador.usuarios.push(nuevoUsuario);
      console.log('Nuevo usuario creado:', nuevoUsuario);
  
      // Redirigir a la lista de usuarios
      res.redirect('/usuarios');
    }
  
    static edit(req, res) {
      const usuarioId = parseInt(req.params.id); // Obtener el ID del usuario
    
      // Simular la búsqueda de un usuario (en memoria)
      const usuario = {
        id: usuarioId,
        nombre: 'Ejemplo',
        email: 'ejemplo@test.com',
      };
    
      // Renderizar la vista de edición con los datos del usuario
      res.render('usuarios/editarUsuario', { usuario });
      }
  
    static update(req, res) {
      const usuarioId = parseInt(req.params.id); // Obtener el ID del usuario
      const { nombre, email } = req.body;
  
      // Validación básica de datos
      if (!nombre || !email) {
        return res.status(400).send('Todos los campos son obligatorios');
      }
  
      // Buscar el usuario por su ID
      const usuario = UsuarioControlador.usuarios.find(u => u.id === usuarioId);
  
      if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
      }
  
      // Actualizar los datos del usuario
      usuario.nombre = nombre;
      usuario.email = email;
  
      console.log('Usuario actualizado:', usuario);
  
      // Redirigir a la lista de usuarios
      res.redirect('/usuarios');
    }
  
    static delete(req, res) {
      const usuarioId = parseInt(req.params.id); // Obtener el ID del usuario
  
      // Buscar el índice del usuario por su ID
      const usuarioIndex = UsuarioControlador.usuarios.findIndex(u => u.id === usuarioId);
  
      if (usuarioIndex === -1) {
        return res.status(404).send('Usuario no encontrado');
      }
  
      // Eliminar el usuario del arreglo
      UsuarioControlador.usuarios.splice(usuarioIndex, 1);
  
      console.log(`Usuario con ID ${usuarioId} eliminado`);
  
      // Redirigir a la lista de usuarios
      res.redirect('/usuarios');
    }
  }
  
  module.exports = UsuarioControlador;