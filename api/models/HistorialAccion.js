/**
 * HistorialAccion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'historial_acciones',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idHistorialAccion',
    },
    idUsuario: {
      type: 'number',
      columnName: 'idUsuario'
    },
    idVehiculo: {
      type: 'number',
      columnName: 'idVehiculo'
    },
    estado: {
      type: 'number',
      columnName: 'estado'
    }
  }
};

