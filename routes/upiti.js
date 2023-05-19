import express from "express";
import {
  fetchUpiti,
  createNewUpit,
  editUpit,
  deleteUpit,
  fetchUpitById,
} from "../controllers/upitController.js";
const router = express.Router();

router.get("/", fetchUpiti);

router.post("/", createNewUpit);

router.get("/:id", fetchUpitById);

router.put("/:id", editUpit);

router.delete("/:id", deleteUpit);

export default router;
