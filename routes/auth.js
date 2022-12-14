/*
Path: '/api/login'
*/
const {Router} = require('express');
const { check } = require('express-validator');
const {login,googleSingIn,renewToken} = require('../controllers/auth');
const { validarCampos } = require('../middlewars/validar-campos');
const { validarJWT } = require('../middlewars/validar_jwt');

const router = Router();

router.post('/',
    [
        check('email','El email es requerido').isEmail(),
        check('password','El password es requerido').not().isEmpty(),
        validarCampos
    ],
    login);
    
router.post('/google',
    [
        check('token','El token de google es obligatorio.').not().isEmpty(),
        validarCampos
    ],
    googleSingIn);

router.get('/renew',
    validarJWT,
    renewToken);

module.exports=router;
