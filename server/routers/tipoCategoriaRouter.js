// IMPORTAR EXPRESS----
const express = require('express');
const tipoCategoriaController = require('../controllers/tipoCategoriaController');

class tipodeCategoriaRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    //MEOTODOS
    config(){
        const objServicioC= new tipoCategoriaController();
        
        // siempre se organiza de menor a mayor
        this.router.get('/categoria',objServicioC.getServicio);
        this.router.get('/categoria/:id', objServicioC.getServicioCategory);

    }
}

module.exports= tipodeCategoriaRouter;