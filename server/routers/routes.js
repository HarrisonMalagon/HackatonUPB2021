const express = require ('express')
const multer = require('multer')
const router = express.Router()
const path  = require ('path')

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname,'../images'),
    filename:(req,file,cb)=>{
        cb(null,Date.now ()+"-update-"+file.originalname)
    }
})

const fileUpload = multer({
    storage: diskStorage
}).single('image')
router.get('/',(req,res)=>{
    res.send('Bienvenido a la aplicación')
})
router.post('/images/post',fileUpload, (req,res)=>{
    // res.send('Bienvenido a la aplicación')
    

    console.log(req.file )
    res.send("Imagen Guardada")
})

module.exports =router