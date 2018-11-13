/**
 * VehiculosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const Utilidades = require('./UtilidadesController');

module.exports = {
    obtenerVehiculos: async function(req, res){
        await Vehiculo.find({
            where: {}
        }).sort('id DESC').then(( vehiculos )=>{
            if (!vehiculos || vehiculos.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_VEHICULOS, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.VEHICULOS_ENCONTRADOS, res, vehiculos);
            }
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_VEHICULOS, res);
        });
    },
    obtenerVehiculoPorId: async function(req, res){
        let vehiculoInfo = req.allParams();
        await Vehiculo.find({
            where: { id: vehiculoInfo.id }
        }).then(( vehiculo )=>{
            if (!vehiculo || vehiculo.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_VEHICULO, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.VEHICULO_ENCONTRADO, res, vehiculo);
            }
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_VEHICULO, res);
        });
    },
    crearVehiculo: async function(req, res) {
        let vehiculoInfo = req.allParams();      
        await Vehiculo.create(vehiculoInfo).then(()=>{
            Utilidades.respuestaRetorno(true, sails.constantes.VEHICULO_CREADO, res);
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_VEHICULO, res);
        });                
    },
};

