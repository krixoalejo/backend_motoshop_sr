/**
 * TipoUsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Utilidades = require('./UtilidadesController');

module.exports = {
  
    obtenerTipoUsuarios: async function(req, res){
        await TipoUsuario.find({
            where: {}
        }).sort('id DESC').then(( tipoUsuarios )=>{
            if (!tipoUsuarios || tipoUsuarios.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_TIPO_USUARIOS, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.TIPO_USUARIOS_ENCONTRADOS, res, tipoUsuarios);
            }
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_TIPO_USUARIOS, res);
        });
    },
    crearTipoUsuario: async function(req, res) {
        let tipoUsuario = req.allParams();   
        await TipoUsuario.create(tipoUsuario).then(()=>{
            Utilidades.respuestaRetorno(true, sails.constantes.TIPO_USUARIO_CREADO, res);
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_TIPO_USUARIO, res);
        });                
    },

};

