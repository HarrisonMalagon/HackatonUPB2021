const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Construir schema para el modelo profile
// id, nombre, precio, calificacion y descripcion de cada servicio
let tipocategoriaSchema = new Schema(
  {
    id: { type: Number,    },
    nombre: { type: String,    },
    costo: { type: Number, },
    costo_con_descuento: { type: Number, },
    descripcion: { type: String, },
    calificacion: { type: Number, },
    numeroComentarios: { type: Number,},

  },
  {
    collection: "tiposervicio",
  }
);

module.exports = mongoose.model("tiposervicio", tipocategoriaSchema);
