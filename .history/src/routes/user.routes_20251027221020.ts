import { Router } from "express";
import {
  getAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUserById
} from "../controllers/user.controller";

// /todos/....
const router = Router();

router.get("/", getAll);
router.get("/:id", findById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteById);

export default router;
