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
  'GET /vehiculos': 'VehiculosController.obtenerVehiculos',
  'POST /vehiculos': 'VehiculosController.crearVehiculo',
  'PUT /vehiculos': 'VehiculosController.actualizarVehiculo',
  'PUT /vehiculos/eliminar': 'VehiculosController.eliminarVehiculo',

  /**
   * Rutas para el usuario
   */
  'GET /usuarios': 'UsuariosController.obtenerUsuarios',
  'GET /usuarios/:id': 'UsuariosController.obtenerUsuarioPorId',
  'POST /usuarios': 'UsuariosController.crearUsuario',
  'POST /usuarios/ingresar': 'UsuariosController.ingresarUsuario',
};
