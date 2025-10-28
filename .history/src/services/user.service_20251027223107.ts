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

export const create = async (user: User): Promise<User> => {
  const newUser = 

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

export const deleteById = async (id: number): Promise<void> => {
   await prisma.user.delete({
    where: {
      id,
    },
  });
};
