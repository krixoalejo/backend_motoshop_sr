/**
 * UtilidadesUsuariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require('jsonwebtoken');

module.exports = {
    existeCorreoElectronico: async function(correoElectronico) {
        return await Usuario.find({ where: { correoElectronico: correoElectronico } });
    },
    existeIdentificacion: async function( identificacion ) {
        return await Usuario.find({ where: { identificacion: identificacion } });
    }
};

