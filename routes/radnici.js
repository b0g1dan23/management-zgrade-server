import express from "express";
import {
  fetchRadnici,
  createNewRadnik,
  editRadnik,
  deleteRadnik,
  fetchRadnikById,
  preDeleteMiddleware,
} from "../controllers/radnikController.js";
const router = express.Router();

router.get("/", fetchRadnici);

router.post("/", createNewRadnik);

router.get("/:id", fetchRadnikById);

router.put("/:id", editRadnik);

router.delete("/:id", preDeleteMiddleware, deleteRadnik);

export default router;
