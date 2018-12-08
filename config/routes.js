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
   * Rutas para el vehículo
   */

  'GET /vehiculos/:id': 'VehiculosController.obtenerVehiculoPorId',
  'POST /vehiculos/obtenerlos': 'VehiculosController.obtenerVehiculos',
  'POST /vehiculos': 'VehiculosController.crearVehiculo',
  'PUT /vehiculos': 'VehiculosController.actualizarVehiculo',
  'PUT /vehiculos/eliminar': 'VehiculosController.eliminarVehiculo',

  /**
   * Rutas para el usuario
   */
  'GET /usuarios/:id': 'UsuariosController.obtenerUsuarioPorId',
  'POST /usuarios/obtenerlos': 'UsuariosController.obtenerUsuarios',
  'POST /usuarios': 'UsuariosController.crearUsuario',
  'PUT /usuarios': 'UsuariosController.actualizarUsuario',
  'PUT /usuarios/eliminar': 'UsuariosController.eliminarUsuario'
};
