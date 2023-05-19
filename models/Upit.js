import mongoose from "mongoose";
import Radnik from "./Radnik.js";
import Status from "./Status.js";
import Zgrada from "./Zgrada.js";

const UpitSchema = new mongoose.Schema(
  {
    zaglavlje: {
      type: String,
      required: [true, "Morate uneti zaglavlje upita"],
    },
    telo: {
      type: String,
      required: [true, "Morate uneti telo upita"],
    },
    brojStana: {
      type: Number,
      required: [true, "Morate uneti broj stana u kome je problem"],
    },
    brTelVlasnika: {
      type: String,
      required: [true, "Morate uneti broj telefona vlasnika stana"],
    },
    vlasnik: {
      type: String,
      required: [true, "Morate uneti ime i prezime vlasnika stana"],
    },
    idStatusa: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "Morate uneti id statusa"],
      ref: Status,
    },
    idZgrade: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "Morate uneti id zgrade"],
      ref: Zgrada,
    },
    idRadnika: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "Morate uneti id radnika"],
      ref: Radnik,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Upit", UpitSchema);
