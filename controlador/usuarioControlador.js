class usuarioControlador {
  constructor() {
    this.usuarios = [
      { id: 1, nombre: 'Ernesto', email: 'ernesto@ejemplo.com'},
    ];
  }

  listarUsuarios() {
    return { usuarios: this.usuarios };
  }

  agregarUsuario(usuario) {
    const nuevoUsuario = {
      id: parseInt(Date.now()), // <-- Convierte a número entero
      nombre: usuario.nombre,
      email: usuario.email,
    };
    this.usuarios.push(nuevoUsuario);
  }

  obtenerUsuario(id) {
    return this.usuarios.find(usuario => usuario.id == id);
  }

  actualizarUsuario(id, usuario) {
    const index = this.usuarios.findIndex(usuario => usuario.id == id);
    if (index !== -1) {
      this.usuarios[index] = {
        id: parseInt(id),
        nombre: usuario.nombre,
        email: usuario.email,
      };
    }
  }

  eliminarUsuario(id) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
  }
}

module.exports = usuarioControlador;
  
  

  