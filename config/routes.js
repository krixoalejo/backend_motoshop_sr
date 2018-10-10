/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  '/': {
    view: 'pages/homepage'
  },

  /**
   * Rutas para el usuario
   */
  'GET /usuarios' : 'UsuariosController.obtenerUsuarios',
  'GET /usuarios/:id' : 'UsuariosController.obtenerUsuarioPorId',
  'POST /usuarios' : 'UsuariosController.crearUsuario',
  'POST /usuarios/ingresar' : 'UsuariosController.ingresarUsuario',

  /**
   * Rutas para los estados
   */
  'GET /estados': 'EstadosController.obtenerEstados',
  'POST /estados': 'EstadosController.crearEstado',

  /**
   * Rutas para los tipos de vehiculos
   */
  'GET /tipoVehiculos': 'TipoVehiculosController.obtenerTipoVehiculos',
  'POST /tipoVehiculos': 'TipoVehiculosController.crearTipoVehiculo',

  /**
   * Rutas para los tipos de usuarios
   */
  'GET /tipoUsuarios': 'TipoUsuariosController.obtenerTipoUsuarios',
  'POST /tipoUsuarios': 'TipoUsuariosController.crearTipoUsuario',
};
