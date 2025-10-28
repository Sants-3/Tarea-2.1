import { Router } from "express";
import {
  getAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUserById
} from "../controllers/user.controller";

// Rutas definidas para usuarios y declarada en el server.ts
// /users
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", findUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);

export default router;
