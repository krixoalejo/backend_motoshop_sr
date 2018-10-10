/**
 * TipoTurno.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tipo_turnos',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idTipoTurno',
    },
    tipoVehiculo: {
      type: 'string',
      columnName: 'tipoTurno'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }
};

