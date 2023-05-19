import express from "express";
import {
  fetchAllStatuses,
  createNewStatus,
  fetchStatusById,
  editStatus,
  deleteStatus,
  preDeleteMiddleware,
} from "../controllers/statusController.js";
const router = express.Router();

router.get("/", fetchAllStatuses);

router.post("/", createNewStatus);

router.get("/:id", fetchStatusById);

router.put("/:id", editStatus);

router.delete("/:id", preDeleteMiddleware, deleteStatus);

export default router;
