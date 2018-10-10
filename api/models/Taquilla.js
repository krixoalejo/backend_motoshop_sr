/**
 * Taquilla.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'taquillas',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idTaquilla',
    },
    taquilla: {
      type: 'string',
      columnName: 'taquilla'
    },
    idUsuario: {
      type: 'number',
      columnName: 'idUsuario'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }

};

