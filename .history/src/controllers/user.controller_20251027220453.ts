import { NextFunction, Request, Response } from "express";
import * as UserService from "../services/user.service";
import { validateUser, validateUserPartial } from "../schemas/user.schema";

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // todos los usuarios
  try {
    const users = await UserService.getAll(); // retorna una promesa
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const user = await UserService.findById(Number(id));// convertimos a numero, ya que los params son string

    if (!user) {
      return res.status(404).json({
        message: `Usuario con id ${id} no encontrado`,
      });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { success, error, data } = validateUser(req.body);

    if (!success) {
      return res.status(400).json(error.issues);
    }

    const newUser = await UserService.create(data);

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const updateU = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const { success, error, data } = validateUserPartial(req.body);

    if (!success) {
      return res.status(400).json(error.issues);
    }

    const result = await UserService.findById(Number(id));

    if (!result) {
      return res.status(404).json({
        message: "El usuario no existe",
      });
    }

    const user = await UserService.update(Number(id), data);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const result = await TodoService.findById(id);

    if (!result) {
      return res.status(404).json({
        message: "La tarea no existe",
      });
    }

    await TodoService.deleteById(id);

    return res.status(200).json({
      message: "Tarea eliminada con éxito",
    });
  } catch (error) {
    next(error);
  }
};