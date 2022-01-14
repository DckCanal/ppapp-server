const mongoose = require("mongoose");

const boySchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Occorre inserire il nome"],
  },
  cognome: {
    type: String,
    required: [true, "Occorre inserire il cognome"],
  },
  dataNascita: {
    type: Date,
    required: [true, "Occorre inserire la data di nascita"],
  },
  pp: {
    mete: [
      {
        meta: String,
        dataInizio: Date,
        dataFine: Date,
        stato: {
          type: String,
          enum: ["successo", "fallimento", "in corso"],
        },
      },
    ],
    impegni: [
      {
        impegno: String,
        dataInizio: Date,
        dataFine: Date,
        stato: {
          type: String,
          enum: ["successo", "fallimento", "in corso"],
        },
      },
    ],
    annotazioni: [
      {
        nota: String,
        data: Date,
      },
    ],
  },
});

const Boy = mongoose.model("Boy", boySchema);
export default Boy;
