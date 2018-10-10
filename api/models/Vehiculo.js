/**
 * Vehiculo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'vehiculos',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idVehiculo',
    },
    placa: {
      type: 'string',
      columnName: 'placa'
    },
    idTipoVehiculo: {
      type: 'number',
      columnName: 'idTipoVehiculo'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }
};

