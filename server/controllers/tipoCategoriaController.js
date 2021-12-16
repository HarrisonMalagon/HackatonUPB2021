const Servicio = require('../models/tiposCategoria')


class TipoCategoriaController{
    constructor(){

    }

    getServicio(req, res) {
        Servicio.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }
    getServicioCategory(req, res){
            let id = req.params.id;
            Servicio.find({id: id}, (error, data)=>{
                if(error){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
            })
    }

}

module.exports= TipoCategoriaController;