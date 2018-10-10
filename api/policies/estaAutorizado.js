/**
 * estaAutorizado
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

const Utilidades = require('../controllers/UtilidadesController');
const UtilidadesUsuarios = require('../controllers/UtilidadesUsuariosController');

module.exports = function (req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        Utilidades.respuestaRetorno(sails.constantes.NO_TOKEN_NUM, sails.constantes.NO_TOKEN, res);
    } else {
        const secreto = sails.jwtSecreto;
        UtilidadesUsuarios.verificarToken( token, secreto ).then(( verificar )=>{
            if ( verificar ) {
                next();        
            } else {
                Utilidades.respuestaRetorno(sails.constantes.TOKEN_EXPIRADO_NUM, sails.constantes.TOKEN_EXPIRADO, res);
            }
        });
    }   
  };