const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Construir schema para el modelo profile
// id, nombre, precio, calificacion y descripcion de cada servicio

let servicioSchema = new Schema(
  {
    id: { type: Intl    },
    email: { type: String,    },
    imgurl: { type: String, },
    password: { type: String, },

  },
  {
    collection: "fulldata",
  }
);

module.exports = mongoose.model("fulldata", servicioSchema);
