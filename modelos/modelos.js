const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Categoria = sequelize.define('Categoria', { nombre: DataTypes.STRING });
const Actividad = sequelize.define('Actividad', { nombre: DataTypes.STRING, duracion: DataTypes.INTEGER });
const Habito = sequelize.define('Habito', { nombre: DataTypes.STRING });
const Proyecto = sequelize.define('Proyecto', { nombre: DataTypes.STRING });

Categoria.hasMany(Actividad);
Actividad.belongsTo(Categoria);

Habito.hasMany(Actividad);
Actividad.belongsTo(Habito);

Proyecto.hasMany(Actividad);
Actividad.belongsTo(Proyecto);

sequelize.sync({ alter: true });

module.exports = { sequelize, Categoria, Actividad, Habito, Proyecto };
