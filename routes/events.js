const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')
const { validarJWT }  = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const isDate = require('../helpers/isDate');



// Events Routes 


router.use(validarJWT);

// Obetener Eventos
router.get('/', getEventos);

//Crear nuevo evento
router.post('/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

//Actualizar Evento
router.put('/:id', actualizarEvento);

//Eliminar Evento
router.delete('/:id', eliminarEvento);


module.exports = router;




