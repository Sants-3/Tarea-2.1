import * as z from "zod";

// establecer el idioma en español
z.config(z.locales.es());

import { User } from "../interfaces/user.interface";

const userSchema = z.object({
  title: z.string({
    
  }).min(1, "El titulo es requerido"),
  
  description: z.string().optional().nullable(),
  completed: z.boolean().default(false),
  userId: z.number().int().optional().nullable()
});

export const validateTodo = (todo: Partial<Todo>) => {
  return todoSchema.safeParse(todo);
};
 
export const validateTodoPartial = (todo: Partial<Todo>) =>{
  return todoSchema.partial().safeParse(todo)
}