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
        console.log('Mucho perro');        
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
        let usuario = req.allParams();
        let existeCorreoElectronico = await UtilidadesUsuarios.existeCorreoElectronico(usuario.correo_electronico);
        if ( !existeCorreoElectronico ) {
            let clave = await UtilidadesUsuarios.obtenerClaveEncriptada(usuario.clave);
            if ( clave ) {
                usuario.clave = clave;
                usuario.idEstado = sails.estados.ACTIVO;
                await Usuario.create(usuario).then(()=>{
                    Utilidades.respuestaRetorno(true, sails.constantes.USUARIO_CREADO, res);
                }).catch((err)=>{
                    sails.log.debug(err);
                    Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_USUARIO, res);
                });                
            } else {
                Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_USUARIO, res);
            }                
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.CORREO_YA_EXISTE, res);
        }
    },
    ingresarUsuario: async function(req, res) {
        let usuarioInfo = req.allParams();
        let usuario = await Usuario.find({ where: { correoElectronico: usuarioInfo.correoElectronico } });
        if ( usuario.length > 0 ) {
            let validarClave = await UtilidadesUsuarios.validarClaveUsuario(usuarioInfo.clave, usuario[0].clave);
            if ( validarClave ) {
                let token = UtilidadesUsuarios.crearToken({id:usuario[0].id}, sails.jwtSecreto);
                let data = {
                    accessToken: token,
                    id: usuario[0].id,
                    nombreCompleto: usuario[0].primerNombre + usuario[0].primerApellido,
                    correoElectronico: usuario[0].correoElectronico,
                    idTipoUsuario: usuario[0].idTipoUsuario
                }
                Utilidades.respuestaRetorno(true, sails.constantes.BIENVENIDO_USUARIO, res, data);
            } else {
                Utilidades.respuestaRetorno(false, sails.constantes.CORREO_CLAVE_INCORRECTA, res);
            }
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.CORREO_CLAVE_INCORRECTA, res);
        }
    }
};

