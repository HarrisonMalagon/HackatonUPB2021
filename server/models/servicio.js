const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Construir schema para el modelo profile
// id, nombre, precio, calificacion y descripcion de cada servicio
let servicioSchema = new Schema(
  {
    id: { type: Intl    },
    name: { type: String,    },
    imgurl: { type: String, },
    city: { type: String, },
    description: { type: String, },
    category: { type: Number, },
    truequeable: { type: String,},
    costo:{ type: String, },
  },
  {
    collection: "servicio",
  }
);

module.exports = mongoose.model("servicio", servicioSchema);
