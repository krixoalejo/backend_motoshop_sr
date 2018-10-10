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
  sails.bcrypt = require('bcrypt'); 
  sails.jwtSecreto = "95_fsdFASDsdgasASDF_605_asdfweGrewgdGSDFsvxc43ASDF_QwRtfdCFr4_65";
  sails.constantes = {
    BIENVENIDO_USUARIO: 'BIENVENIDO_USUARIO',
    CORREO_CLAVE_INCORRECTA: 'CORREO_CLAVE_INCORRECTA',
    CORREO_YA_EXISTE: 'CORREO_YA_EXISTE',
    ESTADO_CREADO: 'ESTADO_CREADO',
    ESTADOS_ENCONTRADOS: 'ESTADOS_ENCONTRADOS',
    ERROR_CREAR_ESTADO: 'ERROR_CREAR_ESTADO',
    ERROR_CREAR_TIPO_USUARIO: 'ERROR_CREAR_TIPO_USUARIO',
    ERROR_CREAR_TIPO_VEHICULO: 'ERROR_CREAR_TIPO_VEHICULO',
    ERROR_CREAR_USUARIO: 'ERROR_CREAR_USUARIO',
    ERROR_HALLAR_ESTADOS: 'ERROR_HALLAR_ESTADOS',
    ERROR_HALLAR_TIPO_USUARIOS: 'ERROR_HALLAR_TIPO_USUARIOS',
    ERROR_HALLAR_TIPO_VEHICULOS: 'ERROR_HALLAR_TIPO_VEHICULOS',
    ERROR_HALLAR_USUARIO: 'ERROR_HALLAR_USUARIO',
    ERROR_HALLAR_USUARIOS: 'ERROR_HALLAR_USUARIOS',
    NO_ENCONTRO_ESTADOS: 'NO_ENCONTRO_ESTADOS',
    NO_ENCONTRO_TIPO_USUARIOS: 'NO_ENCONTRO_TIPO_USUARIOS',
    NO_ENCONTRO_TIPO_VEHICULOS: 'NO_ENCONTRO_TIPO_VEHICULOS',
    NO_ENCONTRO_USUARIO: 'NO_ENCONTRO_USUARIO',
    NO_ENCONTRO_USUARIOS: 'NO_ENCONTRO_USUARIOS',
    NO_TOKEN: 'NO_TOKEN',
    NO_TOKEN_NUM: -1,
    TIPO_USUARIO_CREADO: 'TIPO_USUARIO_CREADO',
    TIPO_VEHICULO_CREADO: 'TIPO_VEHICULO_CREADO',
    TIPO_USUARIOS_ENCONTRADOS: 'TIPO_USUARIOS_ENCONTRADOS',
    TIPO_VEHICULOS_ENCONTRADOS: 'TIPO_VEHICULOS_ENCONTRADOS',
    TOKEN_EXPIRADO: 'TOKEN_EXPIRADO',
    TOKEN_EXPIRADO_NUM: 'TOKEN_EXPIRADO_NUM',
    USUARIO_CREADO: 'USUARIO_CREADO',
    USUARIO_ENCONTRADO: 'USUARIO_ENCONTRADO',
    USUARIOS_ENCONTRADOS: 'USUARIOS_ENCONTRADOS',
  };
  sails.estados = {
    INACTIVO: 0,
    ACTIVO: 1,
  };
  return done();

};
