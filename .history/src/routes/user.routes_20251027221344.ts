import { Router } from "express";
import {
  getAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUserById
} from "../controllers/user.controller";

//users
const router = Router();

router.get("/users", getAllUsers);
router.get("/:id", findUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);

export default router;
