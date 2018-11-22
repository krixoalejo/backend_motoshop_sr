/**
 * UseriossController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Utilidades = require('./UtilidadesController');
const UtilidadesUsuarios = require('./UtilidadesUsuariosController');

module.exports = {
    obtenerUsuarios: async function(req, res){
        await Usuario.find({
            where: {}
        }).sort('id DESC').then(( usuarios )=>{
            if (!usuarios || usuarios.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_USUARIOS, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.USUARIOS_ENCONTRADOS, res, usuarios);
            }
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_USUARIOS, res);
        });
    },
    obtenerUsuarioPorId: async function(req, res){
        let usuarioInfo = req.allParams();
        await Usuario.find({
            where: { id: usuarioInfo.id }
        }).then(( usuario )=>{
            if (!usuario || usuario.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_USUARIO, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.USUARIO_ENCONTRADO, res, usuario);
            }
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_USUARIO, res);
        });
    },
    crearUsuario: async function(req, res) {
        let usuarioInfo = req.allParams();
        let existeIdentificacion = await UtilidadesUsuarios.existeIdentificacion(usuarioInfo.identificacion);
        let existeCorreoElectronico = await UtilidadesUsuarios.existeCorreoElectronico(usuarioInfo.correo_electronico);
        if ( !existeCorreoElectronico && !existeIdentificacion ) {
            usuarioInfo.idEstado = sails.estados.ACTIVO;
            await Usuario.create(usuarioInfo).then(()=>{
                Utilidades.respuestaRetorno(true, sails.constantes.USUARIO_CREADO, res);
            }).catch((err)=>{
                sails.log.debug(err);
                Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_USUARIO, res);
            });               
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.CORREO_IDENTIFICACION_YA_EXISTE, res);
        }
    }
};

