import mongoose from "mongoose";

const RadnikSchema = new mongoose.Schema(
  {
    ime: {
      type: String,
      required: [true, "Morate uneti ime radnika"],
    },
    prezime: {
      type: String,
      required: [true, "Morate uneti prezime radnika"],
    },
    mailAdresa: {
      type: String,
      required: [true, "Morate uneti mejl adresu radnika"],
    },
    brTelefona: {
      type: String,
      required: [true, "Molim Vas unesite broj telefona radnika"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Radnik", RadnikSchema);
