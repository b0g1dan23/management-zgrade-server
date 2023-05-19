import express from "express";
import {
  addZgrada,
  fetchAllZgrade,
  fetchZgradaById,
  deleteZgradaById,
  changeZgradaById,
  preDeleteMiddleware,
} from "../controllers/zgradeController.js";
const router = express.Router();

router.get("/", fetchAllZgrade);

router.post("/", addZgrada);

router.get("/:id", fetchZgradaById);

router.delete("/:id", deleteZgradaById);

router.put("/:id", preDeleteMiddleware, changeZgradaById);

export default router;
