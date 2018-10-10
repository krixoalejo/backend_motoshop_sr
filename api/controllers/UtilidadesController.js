/**
 * UtilidadesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    respuestaRetorno: function(estado, mensaje, res, data) {
        if ( data ) {
            return res.send({
                'estado': estado,
                'mensaje': mensaje,
                'data': data
            });
        } else {
            return res.send({
                'estado': estado,
                'mensaje': mensaje
            });
        }
    }

};

