import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import helmet from "helmet";
import zgradaRoutes from "./routes/zgrade.js";
import statusRoutes from "./routes/statusi.js";
import radnikRoutes from "./routes/radnici.js";
import upitRoutes from "./routes/upiti.js";
import cors from "cors";

// Configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// const corsOptions = {
//   origin: "http://localhost:3000/",
// };
app.use(cors());

// Routes
app.get("/", (_, res) => {
  res.send("Hello NODE API");
});

app.use("/zgrade", zgradaRoutes);

app.use("/statusi", statusRoutes);

app.use("/radnici", radnikRoutes);

app.use("/upiti", upitRoutes);

// MONGOOSE setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(`${err} did not connect`));
