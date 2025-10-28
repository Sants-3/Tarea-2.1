import { NextFunction, Request, Response } from "express";
import * as UserService from "../services/user.service";
import { validateUser, validateUserPartial } from "../schemas/user.schema";

export const getAllUsers = async (
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

export const findUserById = async (
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

export const createUser = async (
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

export const updateUser = async (
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

export const deleteUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const result = await UserService.findById(Number(id));

    if (!result) {
      return res.status(404).json({
        message: "El usuario no existe",
      });
    }

    const user = await UserService.deleteById(Number(id));

    return res.status(200).json({
      message: "Usuario eliminado con éxito",
      
    });
  } catch (error) {
    next(error);
  }
};