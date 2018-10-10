/**
 * TipoDocumento.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tipo_documentos',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idTipoDocumentos',
    },
    tipoDocumento: {
      type: 'string',
      columnName: 'tipoDocumento'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }
};

