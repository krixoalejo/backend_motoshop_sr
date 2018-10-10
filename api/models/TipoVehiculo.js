/**
 * TipoVehiculo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tipo_vehiculos',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idTipoVehiculo',
    },
    tipoVehiculo: {
      type: 'string',
      columnName: 'tipoVehiculo'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }

};

