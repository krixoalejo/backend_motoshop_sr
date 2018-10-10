/**
 * TipoUsuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tipo_usuarios',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idTipoUsuario',
    },
    tipoUsuario: {
      type: 'string',
      columnName: 'tipoUsuario'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }
};

