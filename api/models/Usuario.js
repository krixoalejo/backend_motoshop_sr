/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'usuarios',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idUsuario',
    },
    idTipoDocumento: {
      type: 'number',
      columnName: 'idTipoDocumento'
    },
    numeroDocumento: {
      type: 'string',
      columnName: 'numeroDocumento'
    },
    primerNombre: {
      type: 'string',
      columnName: 'primerNombre'
    },
    segundoNombre: {
      type: 'string',
      columnName: 'segundoNombre'
    },
    primerApellido: {
      type: 'string',
      columnName: 'primerApellido'
    },
    segundoApellido: {
      type: 'string',
      columnName: 'segundoApellido'
    },
    idTipoUsuario: {
      type: 'number',
      columnName: 'idTipoUsuario'
    },
    correoElectronico: {
      type: 'string',
      columnName: 'correoElectronico'
    },
    clave: {
      type: 'string',
      columnName: 'claveEncriptada'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }

};

