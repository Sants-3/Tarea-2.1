import { prisma } from "../db/client";
import { User } from "../interfaces/user.interface";
import { randomUUID as uuid } from "node:crypto";

export const getAll = async (): Promise<User[]> => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findById = async (id: string): Promise<Todo | null> => {
  return await prisma.todo.findUnique({
    where: {
      id,
    },
  });
};

export const create = async (todo: Partial<Todo>): Promise<Todo> => {
  // const newTodo: Todo = {
  //   id: uuid(),
  //   title: todo.title!,
  //   description: todo.description ?? null,
  //   completed: !!todo.completed,
  // };

  const newTodo = { id: uuid(), ...todo } as Todo;

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
