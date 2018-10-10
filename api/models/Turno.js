/**
 * Turno.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'turnos',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idTurno',
    },
    idTipoTurno: {
      type: 'number',
      columnName: 'idTipoTurno'
    },
    idUsuario: {
      type: 'number',
      columnName: 'idUsuario'
    },
    idVehiculo: {
      type: 'number',
      columnName: 'primeridVehiculoNombre'
    },
    idTaquilla: {
      type: 'number',
      columnName: 'idTaquilla'
    },
    idEstado: {
      type: 'number',
      columnName: 'idEstado'
    }
  }

};

