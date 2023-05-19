import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema(
  {
    naziv: {
      type: String,
      required: [true, "Morate uneti naziv statusa"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Status", StatusSchema);
