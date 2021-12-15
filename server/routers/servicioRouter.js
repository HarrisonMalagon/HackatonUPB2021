// IMPORTAR EXPRESS----
const express = require('express');
const ServicioController = require('../controllers/servicioController');

class ServicioRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    //MEOTODOS
    config(){
        const objServicioC= new ServicioController();
        
        // siempre se organiza de menor a mayor
        this.router.get('/servicios',objServicioC.getServicio);
        this.router.get('/servicios/:category', objServicioC.getServicioCategory);

    }
}

module.exports= ServicioRouter;