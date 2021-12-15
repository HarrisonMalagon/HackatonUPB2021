const Servicio = require('../models/servicio')


class ServicioController{
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
            let category = req.params.category;
            Servicio.findOne({category: category}, (error, data)=>{
                if(error){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
            })
    }

}

module.exports= ServicioController;