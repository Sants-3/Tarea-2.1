import * as z from "zod";

// establecer el idioma en español
z.config(z.locales.es());

import { User } from "../interfaces/user.interface";

const userSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("El correo no es valido")
});

export const validateUser = (user: Partial<User>) => {
  return userSchema.safeParse(user);
};
 
export const validateUserPartial = (user: Partial<Todo>) =>{
  return userSchema.partial().safeParse(todo)
}