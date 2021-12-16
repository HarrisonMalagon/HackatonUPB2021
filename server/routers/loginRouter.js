// IMPORTAR EXPRESS----
const express = require('express');
const LoginController = require('../controllers/loginController');

class LoginRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    //MEOTODOS
    config(){
        const objLoginC= new LoginController();
        // siempre se organiza de menor a mayor
        this.router.post('/login',objLoginC.crearLogin);
        // this.router.put('/login',objPloginC.actualizarPlogin);
        // this.router.delete('/login',objPloginC.eliminarPlogin);

    }
}

module.exports= LoginRouter;