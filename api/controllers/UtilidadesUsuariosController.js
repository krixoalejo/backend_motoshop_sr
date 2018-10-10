/**
 * UtilidadesUsuariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require('jsonwebtoken');

module.exports = {
    obtenerClaveEncriptada: function( clave ) {
        const rondas = 10 ;
        return sails.bcrypt.hash(clave, rondas);
    },
    validarClaveUsuario: async function(clave, picar) {
        return await sails.bcrypt.compare(clave, picar);
    },
    existeCorreoElectronico: async function(correoElectronico) {
        let usuario = await Usuario.find({where: { correoElectronico: correoElectronico }});
        if ( usuario && usuario.length > 0 ) {
            return true;
        } else {
            return false;
        }
    },
    crearToken: function (carga, jwtSecreto) {
        return token = jwt.sign(carga, jwtSecreto, {expiresIn: '1d'});
    },
    verificarToken: async function (token, jwtSecreto) {
        let tokenS = token.split(' ');
        try {
            let tieneToken = await jwt.verify(tokenS[1], jwtSecreto);        
            if( tieneToken ) {
                return true;
            }    
        } catch (err) {
            return false;
        }
    },
    existeUsuario: async function( id ) {
        return await Usuario.find({ where: { id: id } })
        .then(( usuario )=>{
            if ( usuario.length > 0 ) {
                return true;
            } else {
                return false;
            }
        }).catch(()=>{
            return false;
        });
    }
};

