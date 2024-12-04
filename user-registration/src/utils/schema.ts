import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.').max(50, 'O nome pode ter no máximo 50 caracteres.'),
  email: z.string().email('Insira um email válido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
  birthDate: z.string().refine((date) => {
    const age = new Date().getFullYear() - new Date(date).getFullYear();
    return age >= 13;
  }, 'Você deve ter pelo menos 13 anos.'),
});

export type UserFormData = z.infer<typeof userSchema>;