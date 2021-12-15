const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Construir schema para el modelo profile
let personaSchema = new Schema(
  {
    id: { type: Intl    },
    name: { type: String,    },
    phone: { type: String,    },
    image: { type: String,    },
    cedula: { type: Number, },
    email: { type: String, },
    city: { type: String, },
    address: { type: String, },
    description: { type: String, },
    category: { type: Number, },
    truequeable: { type: String,},
    genero: { type: String, },
    costo:{ type: String, },
    imgurl: { type: String, },
  },
  {
    collection: "persona",
  }
);

module.exports = mongoose.model("persona", personaSchema);
