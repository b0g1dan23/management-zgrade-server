import mongoose from "mongoose";

const ZgradaSchema = new mongoose.Schema(
  {
    ulica: {
      type: String,
      required: [true, "Morate uneti ulicu zgrade"],
    },
    broj: {
      type: Number,
      required: [true, "Morate uneti broj zgrade"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Zgrada", ZgradaSchema);
