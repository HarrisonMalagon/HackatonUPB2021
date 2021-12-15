// IMPORTAR XPRESS
const express = require('express');
const PersonaRouter = require('./routers/personaRouter');
const ServicioRouter = require('./routers/servicioRouter');
const mongoose = require('mongoose');
const key_database = require('./database/key_database');

class Server{
    // METODO CONSTRUCTOR - construc
    constructor(){
        // Gerar conexion a la BD
        this.conectarBD();
        // crear aplicacion express
        // app es el norme de la variable Se recomienta app
        this.app = express();
        this.config();
    }
    config(){
        // Indicar el puerto
        this.app.set('port',process.env.PORT || 9000);
        //Indicar que en las peticiones se procesaran datos en formato json
        this.app.use(express.json());
        // crear Ruta Raiz
        // var mivariable=""
        let router=express.Router();
        //crear ruta raiz del Servidor
        router.get('/',(req,res)=>{
            // request = peticion, response = respuesta de la petición
            // https://developer.mozilla.org/es/docs/Web/HTTP/Status
            res.status(200).json({"messages":"All OK-- Esta bien el server"});
        });

        //CREAR OBJETOS ROUTERS
        const objPersonaR = new PersonaRouter();
        const objServicioR = new ServicioRouter();

        // *******Añadir rutas a express******
        this.app.use(router);
        this.app.use(objPersonaR.router)
        this.app.use(objServicioR.router)

        // Levantar el servidor o Ponerlo a la escucha
        this.app.listen(this.app.get('port'),()=>{
            console.log("Servidor Corriendo por el puerto=>", this.app.get('port'));
        });
    }
    conectarBD(){
        mongoose.connect(key_database.db).then(()=>{
            console.log("Conexión exitosa a la BD");
        }).catch(error=>{
            console.log(error);
        });
    }

}

const obj = new Server();