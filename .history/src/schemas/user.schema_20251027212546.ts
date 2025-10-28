import * as z from "zod";

// establecer el idioma en español
z.config(z.locales.es());

import { User } from "../interfaces/user.interface";

const userSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("El correo no es valido")
});

export const validateTodo = (todo: Partial<Todo>) => {
  return userSchemaSchema.safeParse(todo);
};
 
export const validateTodoPartial = (todo: Partial<Todo>) =>{
  return todoSchema.partial().safeParse(todo)
}