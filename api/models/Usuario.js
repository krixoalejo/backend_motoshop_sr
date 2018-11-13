/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'usaurios',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idUsuario',
    },
    tipoIdentificacion: {
      type: 'string',
      columnName: 'tipoIdentificacion'
    },
    identificacion: {
      type: 'string',
      columnName: 'identificacion'
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
    correoElectronico: {
      type: 'string',
      columnName: 'correoElectronico'
    },
    telefono: {
      type: 'string',
      columnName: 'telefono'
    },
    celular: {
      type: 'string',
      columnName: 'celular'
    },
    direccion: {
      type: 'string',
      columnName: 'direccion'
    },
    estado: {
      type: 'number',
      columnName: 'estado'
    }
  }
};

