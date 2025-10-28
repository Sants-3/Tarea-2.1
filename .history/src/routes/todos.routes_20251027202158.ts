import { Router } from "express";
// import * as TodoController from "../controllers/todo.controller";
import {
  getAll,
  findById,
  create,
  update,
  deleteById
} from "../controllers/todo.controller";

// /todos/....
const router = Router();

router.get("/", getAll);
router.get("/:id", findById);
router.post("/", create);
router.put("/:id", update);
rou

export default router;
