/**
 * EstadosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const Utilidades = require('./UtilidadesController');

module.exports = {
    obtenerEstados: async function(req, res){
        await Estado.find({
            where: {}
        }).sort('id DESC').then(( estados )=>{
            if (!estados || estados.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_ESTADOS, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.ESTADOS_ENCONTRADOS, res, estados);
            }
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_ESTADOS, res);
        });
    },
    crearEstado: async function(req, res) {
        let estado = req.allParams();
        console.log(estado);        
        await Estado.create(estado).then(()=>{
            Utilidades.respuestaRetorno(true, sails.constantes.ESTADO_CREADO, res);
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_ESTADO, res);
        });                
    },
};

