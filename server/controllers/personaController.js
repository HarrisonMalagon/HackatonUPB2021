
const key_database = require('../database/key_database');
const Persona = require('../models/persona')


class PersonaController{
    constructor(){

    }

    getPersona(req, res) {
        Persona.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    obtenerPersonas(req, res) {
        producto.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }


    getPersonaCategory(req, res){
        let category = req.params.category;
        console.log(category);
        let persona = data.filter(obj => (obj.category == category));
        res.status(200).json(persona);
    }

    crearPersona(req,res){
        Persona.create(req.body,(error,data)=>{
            if (error){
                res.status(500).json({error});
            }else{
                res.status(201).json(data);
            }
        });
        console.log(req);
        let {nombre,apellido}=req.body;
        console.table({nombre,apellido});
        personas.push(req.body);
        //Dar respuesta a la peticion
        res.status(201).json({"message":"Persona Creada con éxito"});
    }
    actualizarPersona(req,res){
        let {nombre,apellido}=req.body;
        // Actualizar una persona 
        personas.map(obj=>{
            if(obj.apellido==apellido){
                obj.nombre==nombre;
            }
        });
        res.status(200).send();    
    }
    eliminarPersona(req,res){
        let{apellido}=req.body
        let tempoPersonas=[];
        personas.forEach(obj => {
            if(obj.apellido !=apellido){
                tempoPersonas.push(obj);
            }
            
        });
        personas=tempoPersonas;
        res.status(200).send();   
    }


}

module.exports= PersonaController;