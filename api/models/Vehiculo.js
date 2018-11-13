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
    marca: {
      type: 'string',
      columnName: 'marca'
    },
    linea: {
      type: 'string',
      columnName: 'linea'
    },
    modelo: {
      type: 'string',
      columnName: 'modelo'
    },
    cilindraje: {
      type: 'string',
      columnName: 'cilindraje'
    },
    color: {
      type: 'string',
      columnName: 'color'
    },
    usuario: {
      type: 'number',
      columnName: 'usuario'
    },
    seguro: {
      type: 'number',
      columnName: 'seguro'
    },
    estado: {
      type: 'number',
      columnName: 'estado'
    }
  }
};

