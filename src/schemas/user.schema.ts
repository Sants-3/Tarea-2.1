import * as z from "zod";

// establecer el idioma en español
z.config(z.locales.es());

import { User } from "../interfaces/user.interface";

const userSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z
    .string()
    .trim() //validamos que no halla espacios en blanco en el correo
    .toLowerCase() //funcion que convierte todo a minusculas
    .min(1, "El correo es requerido")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "El correo no es válido")//es una forma recomendada, ya que el .email() me salía deprecado
});
// con esta estructura user: { name: string; email: string } validamos los campos obligatorios del usuario
export const validateUser = (user: { name: string; email: string }) => {
  return userSchema.safeParse(user);
};

export const validateUserPartial = (user: Partial<User>) => {
  return userSchema.partial().safeParse(user);
};
