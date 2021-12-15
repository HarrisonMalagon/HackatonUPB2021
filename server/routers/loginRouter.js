// IMPORTAR EXPRESS----
const express = require('express');
const LoginController = require('../controllers/loginController');

class PloginRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    //MEOTODOS
    config(){
        const objPloginC= new LoginController();
        // siempre se organiza de menor a mayor
        this.router.get('/login',objPloginC.getPlogin);
        this.router.get('/login/:category',objPloginC.getPloginCategory);
        this.router.post('/login',objPloginC.crearPlogin);
        this.router.put('/login',objPloginC.actualizarPlogin);
        this.router.delete('/login',objPloginC.eliminarPlogin);

    }
}

module.exports= PersonaRouter;