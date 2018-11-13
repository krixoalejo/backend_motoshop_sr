/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  sails.jwtSecreto = "95_fsdFASDsdgasASDF_605_asdfweGrewgdGSDFsvxc43ASDF_QwRtfdCFr4_65";
  sails.constantes = {
    CORREO_IDENTIFICACION_YA_EXISTE: 'El usuario ya está registrado.',
    ERROR_CREAR_USUARIO: 'Error al crear un usuario.',
    ERROR_HALLAR_USUARIO: 'Error al hallar al usuario.',
    ERROR_HALLAR_USUARIOS: 'Error al hallar usuarios.',
    ERROR_CREAR_VEHICULO: 'Error al crear un vehículo.',
    ERROR_HALLAR_VEHICULO: 'Error al hallar el vehículo.',
    ERROR_HALLAR_VEHICULOS: 'Error al hallar vehículos.',
    NO_ENCONTRO_USUARIO: 'No se encontró al usuario.',
    NO_ENCONTRO_USUARIOS: 'No se encontraron usuarios.',
    NO_ENCONTRO_VEHICULO: 'No se encontró el vehículo.',
    NO_ENCONTRO_VEHICULOS: 'No se encontraron vehículos.',
    USUARIO_ENCONTRADO: 'Usuario encontrado.',
    USUARIOS_ENCONTRADOS: 'Usuarios encontrados.',
    USUARIO_CREADO: 'Usuario creado exitosamente.',
    VEHICULO_CREADO: 'Vehículo creado exitosamente.',
    VEHICULO_ENCONTRADO: 'Se encontró el vehículo.',
    VEHICULOS_ENCONTRADOS: 'Se encontraron vehículos.'
  };
  sails.estados = {
    INACTIVO: 0,
    ACTIVO: 1,
  };
  return done();

};
