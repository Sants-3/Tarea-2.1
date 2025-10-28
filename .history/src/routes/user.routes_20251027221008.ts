import { Router } from "express";
import {
  getAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteById
} from "../controllers/todo.controller";

// /todos/....
const router = Router();

router.get("/", getAll);
router.get("/:id", findById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteById);

export default router;
