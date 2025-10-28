import { prisma } from "../db/client";
import { User } from "../interfaces/user.interface";
import { randomUUID as uuid } from "node:crypto";

export const getAll = async (): Promise<User[]> => {
  return await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const findById = async (id: number): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};
// Definimos los paramentros así, ya que en nuestra base de datos los campos name y email son obligatorios
export const create = async (user: {
  name: string;
  email: string;
}): Promise<User> => {
  const newUser = { name: user.name, email: user.email };

  return await prisma.user.create({
    data: newUser,
  });
};

export const update = async (
  userId: number,
  payload: Partial<User>
): Promise<User | null> => {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });
};
// Primero busca al usuario para incluirlo en la respuesta y despues lo elimina
export const deleteById = async (id: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return null;
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
