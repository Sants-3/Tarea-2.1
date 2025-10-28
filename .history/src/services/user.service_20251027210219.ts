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

export const create = async (user: Partial<User>): Promise<User> => {

  const newUser = { id: uuid(), ...user } as User;

  // todos.push(newTodo);
  return await prisma.todo.create({
    data: newTodo,
  });
};

export const update = async (
  todoId: string,
  payload: Partial<Todo>
): Promise<Todo | null> => {
  return await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: payload,
  });
};

export const deleteById = async (id: string): Promise<void> => {
   await prisma.todo.delete({
    where: {
      id,
    },
  });
};
