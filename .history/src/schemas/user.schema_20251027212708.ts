import * as z from "zod";

// establecer el idioma en español
z.config(z.locales.es());

import { User } from "../interfaces/user.interface";

const userSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().
});

export const validateUser = (user: Partial<User>) => {
  return userSchema.safeParse(user);
};
 
export const validateUserPartial = (user: Partial<User>) =>{
  return userSchema.partial().safeParse(user)
}