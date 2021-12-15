// IMPORTAR EXPRESS----
const express = require('express');
const PersonaController = require('../controllers/personaController');

class PersonaRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    //MEOTODOS
    config(){
        const objPersonaC= new PersonaController();
        // const objPersonaC= new PersonaController();
        // siempre se organiza de menor a mayor
        this.router.get('/personas',objPersonaC.getPersona);
        this.router.get('/personas/:category',objPersonaC.getPersonaCategory);
        this.router.post('/personas',objPersonaC.crearPersona);
        this.router.put('/personas',objPersonaC.actualizarPersona);
        this.router.delete('/personas',objPersonaC.eliminarPersona);

    }
}

module.exports= PersonaRouter;